import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"


const faqItems = [
  {
    question: "O que é o Sonhando Alto?",
    answer: (
      <>
        <p className="mb-4">
          É um programa que acelera o caminho de jovens que sonham em ingressar na universidade, mas que não possuem
          todos os recursos necessários para isso. Coordenado pelo Ministério de Publicações da Igreja Adventista do
          Sétimo Dia na América do Sul, o projeto não apenas viabiliza o custeio dos estudos, como também promove o
          desenvolvimento pessoal e interpessoal.
        </p>
        <p className="mb-4">
          Durante a participação no Sonhando Alto, o jovem assume a missão de levar a mensagem de Jesus às pessoas por
          meio do trabalho com literaturas que abordam temas espirituais, familiares, de saúde e educação.
        </p>
        <p className="mb-4">
          Voltado especialmente para jovens adventistas em fase pré-universitária, o projeto funciona como um programa
          de colportagem estudantil. Por meio dele, o Departamento de Publicações se dedica a recrutar, treinar e
          organizar esses jovens em equipes que atuam nos territórios das Associações e Missões.
        </p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “O Projeto Sonhando Alto foi a oportunidade que encontrei para realizar meu sonho. Mais do que um projeto
            educacional, experimentei uma jornada de desenvolvimento pessoal, crescimento espiritual e realização dos
            planos de Deus para minha vida”.
            <br />
            <span className="font-semibold not-italic text-gray-800">- Danilo Souza, estudante de Teologia.</span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Quem pode participar?",
    answer: (
      <>
        <p className="mb-4">
          Jovens adventistas a partir dos 16 anos, que desejam viver uma experiência missionária e transformadora —
          pessoal, espiritual e emocional — enquanto conquistam os recursos necessários para custear a tão sonhada
          graduação universitária.
        </p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “Se você tem sonhos como eu, basta ter disposição e fé, porque Deus fará milagres extraordinários em sua
            vida, como fez na minha.”
            <br />
            <span className="font-semibold not-italic text-gray-800">- Adalto Rocha, estudante de Teologia</span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Como se inscrever?",
    answer: (
      <>
        <p className="mb-4">
          Preencha o formulário on-line neste site e um representante do Projeto Sonhando Alto entrará em contato com
          você. Outra forma é conversar diretamente com o pastor da sua igreja, que fará o encaminhamento para a
          liderança do departamento de Publicações. Se preferir, você também pode procurar o líder de publicações da sua
          Associação/Missão na região onde reside.
        </p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “Para me inscrever, primeiro entrei em contato com o meu pastor distrital, solicitando que ele me
            encaminhasse ao pastor responsável pelo departamento de Publicações do Campo e, após a inscrição, fui
            direcionada à equipe de colportagem do Sonhando Alto, que me apoiou em minha jornada.”
            <br />
            <span className="font-semibold not-italic text-gray-800">- Katiane Sousa, bacharel em Nutrição</span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Onde posso estudar, se eu for participante do Sonhando Alto?",
    answer: (
      <>
        <p className="mb-4">
          Você pode estudar em uma universidade adventista, fazendo o curso dos seus sonhos, ou em outra universidade de
          sua escolha.
        </p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “Você pode realizar o sonho de cursar o ensino superior em qualquer universidade, mas eu recomendo
            especialmente as faculdades adventistas, porque, além de uma excelente formação acadêmica, elas também
            promovem um ambiente cristão que fortalece os valores espirituais e o crescimento pessoal. Essa foi a minha
            escolha.”
            <br />
            <span className="font-semibold not-italic text-gray-800">- Jefferson Menezes, estudante de Teologia</span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Quais cursos posso fazer, participando do Sonhando Alto?",
    answer: (
      <>
        <p className="mb-4">
          Você pode escolher o curso que quiser. Acesse a aba “Universidades” e encontre os cursos disponíveis nas
          universidades adventistas e decida agora onde passará os próximos anos da sua vida.
        </p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “Eu escolhi Teologia, e você pode fazer cursos em áreas como humanas, exatas, saúde, educação, ou o mesmo
            que eu. Escolher estudar em uma universidade adventista é a chance de estar em um ambiente missionário e
            crescer em todos os sentidos! Te convido a viver esse sonho com a gente!”
            <br />
            <span className="font-semibold not-italic text-gray-800">- Hian Sol Posto, estudante de Teologia.</span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Existe algum treinamento para quem quer fazer parte do Sonhando Alto?",
    answer: (
      <>
        <p className="mb-4">
          O jovem inscrito participa de treinamentos e recebe ferramentas antes e durante a participação no Sonhando
          Alto.
        </p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “O treinamento técnico foi fundamental para que eu compreendesse minhas atribuições na nova jornada, além de
            desenvolver a capacidade de entender pessoas, construir relacionamentos e resolver problemas."
            <br />
            <span className="font-semibold not-italic text-gray-800">- Samara Ferreira, estudante de Psicologia.</span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Quanto tempo dura o Sonhando Alto?",
    answer: (
      <>
        <p className="mb-4">
          Em torno de 6 meses. Geralmente de março a agosto e de setembro a fevereiro. Consulte a Associação/Missão
          local.
        </p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            "Participei do Sonhando Alto num período de 6 meses e foi uma experiência maravilhosa, me desenvolvendo e
            avançando a cada dia em direção ao meu sonho."
            <br />
            <span className="font-semibold not-italic text-gray-800">- Victor Souza, estudante de Teologia.</span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Onde eu vou atuar, quando me inscrever no Sonhando Alto?",
    answer: (
      <>
        <p className="mb-4">
          Após a inscrição, os participantes do Projeto Sonhando Alto são encaminhados para as campanhas — nome dado aos
          locais onde exercerão suas atividades.
        </p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “Eu atuei na região onde morava, porque a participação é na área da Missão ou Associação onde você se
            inscreveu. O seu pastor de Publicações vai te informar a data de início e o local.”
            <br />
            <span className="font-semibold not-italic text-gray-800">- Breno Cordeiro, estudante de Direito.</span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Quais são as obrigações de quem participa do Sonhando Alto?",
    answer: (
      <>
        <p className="mb-4">
          Seguir as regras de convivência da equipe e realizar o trabalho missionário no campo designado, conforme a
          orientação do líder.
        </p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “Vou te contar da minha experiência em uma lista do que certamente será essencial para o seu desempenho e
            sucesso no desafio de conquistar recursos para a faculdade: é importante seguir as orientações da liderança
            (como horários de dormir e levantar), respeitar os horários de saída para o trabalho e de retorno,
            apresentar relatórios das atividades diárias, demonstrar dedicação nas tarefas do dia a dia e concentrar-se
            exclusivamente na colportagem evangelística durante o projeto. E, é claro, manter uma vida ativa de oração,
            devoção e comunhão com Deus.”
            <br />
            <span className="font-semibold not-italic text-gray-800">- Rafael Serra, estudante de Psicologia.</span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Quais os benefícios de participar do Sonhando Alto?",
    answer: (
      <>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Ser um missionário e levar Jesus às pessoas.</li>
          <li>Ter dinheiro para ingressar no curso universitário;</li>
          <li>Até 35% de desconto nas mensalidades da faculdade (em universidades adventistas);</li>
          <li>Conhecer novos lugares;</li>
          <li>Desenvolver soft skills e sair na frente no mercado de trabalho;</li>
          <li>Transformar a vida de famílias e comunidades;</li>
          <li>Fazer novos amigos</li>
        </ul>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “Através do Sonhando Alto tive a oportunidade de pagar 100% do meu curso com a colportagem, além de viver
            grandes experiências. Esse projeto proporcionou a realização do meu sonho de ser pastor e ainda me ajudou a
            desenvolver habilidades essenciais para a vida e para o ministério. Foi para mim uma escola para a vida,
            ampliou meus horizontes e conheci pessoas, bem como lugares extraordinários.”
            <br />
            <span className="font-semibold not-italic text-gray-800">- Joanilton Alves, estudante de Teologia</span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "O que faz um participante do Sonhando Alto na prática?",
    answer: (
      <>
        <p className="mb-4">
          Apresenta e vende livros que falam de saúde, família, educação e espiritualidade, em áreas residenciais e
          comerciais. Desta forma, conquista recursos suficientes para pagar seus estudos.
        </p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “Vivi diariamente o voluntariado, fazendo a diferença na vida das pessoas. A cada literatura deixada,
            enxerguei a possibilidade de realizar meu próprio sonho. Pude me desenvolver espiritualmente, emocionalmente
            e nos relacionamentos interpessoais — e, acima de tudo, pude aprender a depender de Deus em todas as áreas
            da vida, inclusive na financeira. Visitei lares, compartilhei fé e espalhei esperança.”
            <br />
            <span className="font-semibold not-italic text-gray-800">
              - Maria Leticia Martins, estudante de Psicologia.
            </span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Com quais materiais o participante do Sonhando Alto trabalha?",
    answer: (
      <>
        <p className="mb-4">Livros e revistas que falam de saúde, família, educação e espiritualidade.</p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “Entre os títulos oferecidos, posso citar os que despertavam mais interesse do meu público: O Poder
            Medicinal dos Sucos e Shakes, Vida de Jesus e O Desejado de Todas as Nações. Os materiais disponíveis
            abrangem uma grande variedade de temas, incluindo saúde, educação, família e espiritualidade, e você
            certamente terá a sua lista de preferidos também”
            <br />
            <span className="font-semibold not-italic text-gray-800">- Maycon Leite, estudante de Teologia.</span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Como é o trabalho no Sonhando Alto?",
    answer: (
      <>
        <p className="mb-4">
          Por meio da venda direta de livros, realizada de forma presencial, o jovem participante obtém os recursos
          necessários para custear seus estudos, desenvolve competências pessoais e interpessoais e cumpre um papel
          missionário ao levar mensagens de esperança à comunidade.
        </p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “No projeto Sonhando Alto em que participei, o trabalho foi realizado em duplas, indo de casa em casa
            levando esperança por meio da página impressa.”
            <br />
            <span className="font-semibold not-italic text-gray-800">
              - Ellen Sabrina Costa, estudante de Psicologia.
            </span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Como são contabilizados os ganhos?",
    answer: (
      <>
        <p className="mb-4">
          Na casa da campanha (onde os participantes ficam hospedados), existe um escritório onde é feita a parte
          contábil do projeto. O participante acompanha todo o processo junto ao líder financeiro. Desta forma, é
          possível analisar o desempenho periodicamente e obter orientação quando houver necessidade de realinhar
          estratégias e métodos de trabalho.
        </p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “Existe um sistema de controle financeiro de cada participante do Sonhando Alto e eu sempre estava atenta a
            esses dados. Esse sistema é utilizado por um(a) líder financeiro(a), que registra todos os detalhes
            relacionados ao colportor, como retirada de livros, depósitos, entre outros. Cada livro que eu retirava do
            estoque, possuía um valor, e eu me responsabilizava por ele. Após efetuar a venda, o livro era pago, e eu
            ficava com o lucro. Dessa forma os ganhos são calculados. Além disso, existe o App do Colportor, que dá
            acesso a relatórios, apresenta a saúde financeira e conferência do total de ganhos.”
            <br />
            <span className="font-semibold not-italic text-gray-800">- Talis Cruz, estudante de Teologia.</span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Existe algum contrato?",
    answer: (
      <>
        <p className="mb-4">
          Não existe contrato. É um projeto missionário, no qual o participante, voluntariamente, solicita o seu
          ingresso por meio de recomendação da sua igreja local.
        </p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “Eu fiz todo o processo de inscrição e tive a recomendação da minha igreja e me voluntariei para estar no
            Sonhando Alto, porque tinha um grande sonho. Caso você seja menor de idade, será necessária uma autorização
            dos seus pais ou responsáveis para que seja feito o seu cadastro no sistema da campanha.”
            <br />
            <span className="font-semibold not-italic text-gray-800">- Ramon Nunes, estudante de Nutrição.</span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Como é feito o pagamento para quem participa do Sonhando Alto?",
    answer: (
      <>
        <p className="mb-4">
          Ao final do projeto, o SELS (Serviço Educacional Lar e Saúde) — instituição responsável pela gestão financeira
          dos materiais distribuídos às equipes — realiza o depósito do lucro diretamente na conta do participante.
          Desta forma, ele pode direcionar os recursos para o pagamento da universidade que escolheu.
        </p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “Eu informei meus dados bancários corretamente e recebi conforme o combinado. O pagamento para quem
            participa do Sonhando Alto é feito por PIX ou depósito em conta e tudo foi feito com transparência e
            responsabilidade.”
            <br />
            <span className="font-semibold not-italic text-gray-800">
              - Alexandre Martins, estudante de Contabilidade.
            </span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Posso usar o pagamento para outra universidade?",
    answer: (
      <>
        <p className="mb-4">
          Sim, você pode. No entanto, nas universidades adventistas você consegue descontos de até 35%.
        </p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “Além de ter o desconto ao escolher uma universidade adventista, eu sabia que esta era a melhor alternativa
            para realizar o meu sonho em um ambiente ligado aos princípios cristãos. Ao participar do Projeto Sonhando
            Alto, você tem a liberdade de utilizar o valor arrecadado para ingressar em qualquer instituição de ensino,
            seja ela adventista ou não. Mas, optar por uma instituição adventista, é a melhor escolha!”
            <br />
            <span className="font-semibold not-italic text-gray-800">- Artur Medeiros, estudante de Direito.</span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Posso ir para o Sonhando Alto se eu já sou formado?",
    answer: (
      <>
        <p className="mb-4">Sim, você pode.</p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            "Eu estou cursando a minha primeira faculdade, mas, certamente, uma formação acadêmica elevará ainda mais a
            qualidade do seu desempenho neste ministério."
            <br />
            <span className="font-semibold not-italic text-gray-800">- Matheus Ledo, estudante de Teologia</span>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    question: "Qual é a garantia de que irei conseguir os recursos que preciso?",
    answer: (
      <>
        <p className="mb-4">
          Por ser um projeto onde os participantes são totalmente autônomos, o sucesso dele depende do empenho e da
          perseverança pessoal, por isso, não há garantia institucional.
        </p>
        <Card className="bg-gray-50 border-l-4 border-orange-500 shadow-sm">
          <CardContent className="p-4 text-gray-700 italic">
            “O meu empenho e persistência me permitiram conquistar os recursos que eu precisava para estudar em uma
            faculdade Adventista e, hoje, estou próximo da formatura. Posso garantir a você que é possível e Deus também
            está te chamando. O Sonhando Alto foi um divisor de águas na minha vida. Graças a ele, pude realizar o sonho
            de ingressar em uma faculdade.”
            <br />
            <span className="font-semibold not-italic text-gray-800">- Rafael Oliveira, estudante de Teologia.</span>
          </CardContent>
        </Card>
      </>
    ),
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-16 px-4 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto mt-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-orange-500 text-center mb-12">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <Card key={index} className="mb-4">
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-800 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">{item.answer}</AccordionContent>
                </AccordionItem>
              </Card>
            ))}
          </Accordion>
        </div>
      </main>

    </div>
  )
}
