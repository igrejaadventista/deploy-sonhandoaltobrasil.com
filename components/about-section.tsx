export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-orange-500 text-center mb-12">
          Transforme Seus Sonhos em Realidade
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Sonhando Alto!</h3>
            <p className="text-gray-600 leading-relaxed">
              Já imaginou realizar o sonho de cursar uma faculdade e, consequentemente poder obter outras realizações na
              vida? Já ficou horas nas redes sociais se comparando com outras pessoas? Já teve a sensação de que ir
              estudar em uma das faculdades adventistas, é algo somente para os outros e muito distante da sua
              realidade? Ei, abandone esse sentimento de comparação, ansiedade e desconfiança. Deus, o Deus em João
              10:10 diz que Ele veio para que eu e você tenhamos vida, e vida em abundância. Acredite, Cristo quer fazer
              infinitamente mais do que tudo quanto podemos imaginar. Essa é a sua chance, a grande oportunidade, de
              superar as dificuldades financeiras e ingressar no ensino superior.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Chegou a hora de viver o novo, de experimentar o extraordinário, e através do amor de Jesus lançar fora o
              medo e dar um passo de fé importante para o seu futuro. Ellen White afirma que "O segredo do êxito está na
              união do poder divino com o esforço humano. Aqueles que conseguem os maiores resultados são os que mais
              implicitamente confiam no Braço Todo-Poderoso." Deus já demonstrou que será contigo, agora você precisa
              confiar, dar o seu passo de fé e Sonhar Alto.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Sonhando Alto Brasil"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
