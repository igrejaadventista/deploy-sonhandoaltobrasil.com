"use client";

import { useEffect, useState, useMemo } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { toast } from "sonner";
import Image from "next/image";

// -------- Schemas --------
const formSchema = z
  .object({
    nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    idade: z.string().min(1, "Selecione sua idade"),
    email: z.string().email("E-mail inválido"),
    celular: z.string().min(10, "Celular inválido").max(15, "Celular inválido"),
    instagram: z.string().min(2, "Instagram obrigatório"),
    cep: z.string().min(8, "CEP inválido"),
    cidade: z.string().min(2, "Cidade obrigatória"),
    estado: z.string().min(2, "Estado obrigatório"),
    escolaridade: z.string().min(1, "Escolaridade obrigatória"),
    curso: z.string().min(1, "Curso obrigatório"),
    otherCourse: z.string().optional(),
    universidade: z.string().min(1, "Universidade obrigatória"),
    otherUniversity: z.string().optional()
  })
  .refine((data) => data.curso !== "Outro" || !!data.otherCourse, {
    path: ["otherCourse"],
    message: "Digite o curso"
  })
  .refine((data) => data.universidade !== "Outra" || !!data.otherUniversity, {
    path: ["otherUniversity"],
    message: "Digite a universidade"
  });

type FormData = z.infer<typeof formSchema>;

// -------- Dados fixos --------
const universitiesData = [
  { name: "UNASP - Engenheiro Coelho", value: "UNASPEC" },
  { name: "UNASP - São Paulo", value: "UNASPSP" },
  { name: "UNASP - Hortolândia", value: "UNASPHT" },

  { name: "UNIAENE - Centro Universitário Adventista de Ensino do Nordeste", value: "UNIAENE" },

  { name: "FAAMA - Faculdade Adventista da Amazônia", value: "FAAMA" },
  { name: "FADMINAS - Faculdade Adventista de Minas Gerais", value: "FADMINAS" },
  { name: "FAP - Faculdade Adventista do Paraná", value: "FAP" },

  { name: "UAB - Universidad Adventista de Bolivia", value: "UAB" },
  { name: "UAP - Universidad Adventista del Plata", value: "UAP" },

  { name: "UPeU - Universidad Peruana Unión (Lima)", value: "UPEULIMA" },

  { name: "UNACH - Universidad Adventista de Chile", value: "UNACH" }
];


const commonCourses = [
  "Administração",
  "Análise e Desenvolvimento de Sistemas",
  "Arquitetura e Urbanismo",
  "Ciência da Computação",
  "Ciências Contábeis",
  "Direito",
  "Educação Física",
  "Enfermagem",
  "Engenharia Agronômica",
  "Engenharia Civil",
  "Engenharia Computação",
  "Engenharia Produção",
  "Fisioterapia",
  "Jornalismo",
  "Medicina",
  "Medicina Veterinária",
  "Música",
  "Nutrição",
  "Pedagogia",
  "Psicologia",
  "Publicidade e Propaganda",
  "Rádio e TV",
  "Sistemas de Informação",
  "Teologia",
  "Outro"
];

// -------- Subcomponente Form --------
function RegistrationFormContent({
  control,
  register,
  handleSubmit,
  errors,
  setValue
}: any) {
  const selectedCourse = useWatch({ control, name: "curso" });
  const selectedUniversity = useWatch({ control, name: "universidade" });

  const [cep, setCep] = useState("");
  const [isCityStateLoading, setIsCityStateLoading] = useState(false);

  // Debounce CEP
  useEffect(() => {
    if (cep.length !== 8) return;
    const timeout = setTimeout(async () => {
      setIsCityStateLoading(true);
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await res.json();
        if (!data.erro) {
          setValue("cidade", data.localidade);
          setValue("estado", data.uf);
        }
      } finally {
        setIsCityStateLoading(false);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [cep, setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Erro no envio");

      toast.success("Inscrição enviada com sucesso!");
    } catch {
      toast.error("Erro ao enviar inscrição!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Nome + Idade */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome Completo</Label>
          <Input
            id="nome"
            placeholder="Digite seu nome completo"
            {...register("nome")}
          />
          {errors.nome && (
            <p className="text-red-500 text-sm">{errors.nome.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="idade">Idade</Label>
          <Input
            id="idade"
            type="number"
            min={15}
            max={100}
            placeholder="Ex: 20"
            {...register("idade")}
          />
          {errors.idade && (
            <p className="text-red-500 text-sm">{errors.idade.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Celular + Instagram */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="celular">Celular/WhatsApp</Label>
          <Input
            id="celular"
            placeholder="(00) 00000-0000"
            {...register("celular")}
          />
          {errors.celular && (
            <p className="text-red-500 text-sm">{errors.celular.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="instagram">Instagram</Label>
          <Input
            id="instagram"
            placeholder="@seuinstagram"
            {...register("instagram")}
          />
          {errors.instagram && (
            <p className="text-red-500 text-sm">{errors.instagram.message}</p>
          )}
        </div>
      </div>

      {/* CEP + Cidade + Estado */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="cep">CEP</Label>
          <Input
            id="cep"
            placeholder="00000-000"
            {...register("cep")}
            value={cep}
            onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
          />
          {errors.cep && (
            <p className="text-red-500 text-sm">{errors.cep.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="cidade">Cidade</Label>
          <Input
            id="cidade"
            readOnly={isCityStateLoading}
            {...register("cidade")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="estado">Estado</Label>
          <Input
            id="estado"
            readOnly={isCityStateLoading}
            {...register("estado")}
          />
        </div>
      </div>

      {/* Escolaridade + Curso */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="escolaridade">Escolaridade</Label>
          <Controller
            control={control}
            name="escolaridade"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="escolaridade">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="medio-completo">
                    Ensino Médio Completo
                  </SelectItem>
                  <SelectItem value="superior-incompleto">
                    Ensino Superior Incompleto
                  </SelectItem>
                  <SelectItem value="superior-completo">
                    Ensino Superior Completo
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.escolaridade && (
            <p className="text-red-500 text-sm">
              {errors.escolaridade.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="curso">Curso</Label>
          <Controller
            control={control}
            name="curso"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="curso">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {commonCourses.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {selectedCourse === "Outro" && (
            <Input placeholder="Digite o curso" {...register("otherCourse")} />
          )}
        </div>
      </div>

      {/* Universidade */}
      <div className="space-y-2">
        <Label htmlFor="universidade">Universidade</Label>
        <Controller
          control={control}
          name="universidade"
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger id="universidade">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="w-none">
                {universitiesData.map((uni) => (
                  <SelectItem key={uni.value} value={uni.value}>
                    {uni.name}
                  </SelectItem>
                ))}
                
                <SelectItem value="Outra">Outra (digitar)</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {selectedUniversity === "Outra" && (
          <Input
            placeholder="Digite a universidade"
            {...register("otherUniversity")}
          />
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg rounded-full font-bold"
      >
        Enviar Formulário
      </Button>
    </form>
  );
}

// -------- Componente Principal --------
export default function RegistrationForm({
  variant = "page"
}: {
  variant?: "page" | "dialog";
}) {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const formContent = useMemo(
    () => (
      <RegistrationFormContent
        control={control}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        setValue={setValue}
      />
    ),
    [control, register, handleSubmit, errors, setValue]
  );

  if (variant === "dialog") return formContent;

  return (
    <section id="inscricao" className="relative py-20 pb-4 lg:px-4 lg:py-10">
      <div className="absolute inset-0 bg-[url('/images/fundo-form.webp')] bg-cover bg-center" />
      <div className="max-w-[1800px] mx-auto relative flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="hidden lg:flex justify-center items-center w-1/2 h-[900px] relative ">
          <Image
            src="/images/img-central-coracao.webp"
            alt="Coração Central"
            width={600}
            height={600}
            sizes="(max-width: 1024px) 0px, 600px"
            className="object-contain w-full h-full"
          />
          
        </div>
        <div className="relative z-10 min-w-[320px] w-[90%] max-w-[660px] lg:mr-[10%]">
          <Card className="rounded-3xl shadow-xl border-none bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-orange-500 text-center mb-8">
                Inscreva-se
              </h2>
              {formContent}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
