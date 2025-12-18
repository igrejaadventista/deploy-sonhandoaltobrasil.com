import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

function checkEnvVars() {
  const requiredEnvs = [
    "DISCORD_WEBHOOK_URL",
    "SMTP_USER",
    "SMTP_PASS",
    "MAIL_TO",
  ]

  const result: Record<string, string> = {}
  let allOk = true

  for (const key of requiredEnvs) {
    if (!process.env[key]) {
      console.error(`❌ Variável de ambiente ausente: ${key}`)
      result[key] = "MISSING"
      allOk = false
    } else {
     
      const value = process.env[key]!
      const masked =
        value.length > 10
          ? `${value.slice(0, 3)}...${value.slice(-3)}`
          : "***"
      result[key] = `SET (${masked})`
    }
  }

  console.log("🔎 Verificação de variáveis de ambiente:", result)
  return allOk
}

// 🚀 Executa a checagem apenas uma vez no load do módulo
const envOk = checkEnvVars()

export async function POST(req: Request) {
  try {
    // --- Se ambiente não estiver ok, já retorna erro ---
    if (!envOk) {
      return NextResponse.json(
        { ok: false, error: "Configuração de ambiente inválida." },
        { status: 500 }
      )
    }

    const data = await req.json()

    // --- 0) Validação básica ---
    const requiredFields = ["nome", "idade", "email", "celular", "cidade", "estado"]
    const missingFields = requiredFields.filter(f => !data[f])
    if (missingFields.length > 0) {
      console.warn("⚠️ Requisição com campos ausentes:", missingFields)
      return NextResponse.json(
        { ok: false, error: `Campos obrigatórios faltando: ${missingFields.join(", ")}` },
        { status: 400 }
      )
    }

    // --- Monta corpo da mensagem ---
    const allFields = `
=======================================================
📋 **Nova inscrição**
- **Nome:** ${data.nome}
- **Idade:** ${data.idade}
- **Email:** ${data.email}
- **Celular:** ${data.celular}
- **Instagram:** ${data.instagram}
- **CEP:** ${data.cep}
- **Cidade:** ${data.cidade}
- **Estado:** ${data.estado}
- **Escolaridade:** ${data.escolaridade}
- **Curso:** ${data.curso} ${data.otherCourse ? `(Outro: ${data.otherCourse})` : ""}
- **Universidade:** ${data.universidade} ${data.otherUniversity ? `(Outra: ${data.otherUniversity})` : ""}
=======================================================
    `

    // --- 1) Enviar para Discord ---
    try {
      await fetch(process.env.DISCORD_WEBHOOK_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: allFields }),
      })
      console.log("✅ Enviado para Discord")
    } catch (discordErr: any) {
      console.error("❌ Erro ao enviar para Discord:", discordErr.message)
    }

    // --- 2) Enviar por Email ---
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: `"Formulário Sonhando Alto" <${process.env.SMTP_USER}>`,
        to: process.env.MAIL_TO,
        subject: "Nova inscrição recebida 🎉",
        text: allFields,
        html: `
          <h2>📋 Nova inscrição</h2>
          <ul>
            <li><b>Nome:</b> ${data.nome}</li>
            <li><b>Idade:</b> ${data.idade}</li>
            <li><b>Email:</b> ${data.email}</li>
            <li><b>Celular:</b> ${data.celular}</li>
            <li><b>Instagram:</b> ${data.instagram}</li>
            <li><b>CEP:</b> ${data.cep}</li>
            <li><b>Cidade:</b> ${data.cidade}</li>
            <li><b>Estado:</b> ${data.estado}</li>
            <li><b>Escolaridade:</b> ${data.escolaridade}</li>
            <li><b>Curso:</b> ${data.curso} ${data.otherCourse ? `(Outro: ${data.otherCourse})` : ""}</li>
            <li><b>Universidade:</b> ${data.universidade} ${data.otherUniversity ? `(Outra: ${data.otherUniversity})` : ""}</li>
          </ul>
        `,
      })

      console.log("✅ Email enviado com sucesso")
    } catch (emailErr: any) {
      console.error("❌ Erro ao enviar email:", emailErr.message)
    }

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error("❌ Erro inesperado no processamento:", err)
    return NextResponse.json(
      { ok: false, error: "Falha inesperada ao processar inscrição." },
      { status: 500 }
    )
  }
}
