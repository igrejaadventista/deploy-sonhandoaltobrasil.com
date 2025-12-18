"use client"

import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useMediaQuery } from "usehooks-ts"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Tipos e interfaces
type CountryCode = "br" | "bo" | "ar" | "cl" | "pe"

interface State {
  id: string
  name: string
}

interface University {
  name: string
  image: string
  description: string
  endereco: string
  phone: string
  website: string
  courses: string[]
  country: CountryCode
  state: string
}

// Dados das universidades
const universitiesData: University[] = [
  {
    name: "UNASP - Centro Universitário Adventista de São Paulo de Engenheiro Coelho",
    image: "/images/unaspEC.webp",
    description:
      "O UNASP – Centro Universitário Adventista de São Paulo é uma instituição educacional adventista é reconhecida pela excelência nos serviços prestados, pelos seus elevados padrões éticos e pela qualidade pessoal e profissional de seus egressos.",
    endereco:
      "Estrada Municipal Pastor Walter Boger, S/N - Lagoa Bonita, Eng. Coelho - SP, 13448-900",
    phone: "0800 948 0048",
    website: "https://www.unasp.br",
    courses: [
      "Administração",
      "Arquitetura e Urbanismo",
      "Ciências Contábeis",
      "Direito",
      "Engenharia Agronômica",
      "Engenharia Civil",
      "Engenharia de Computação",
      "Engenharia de Produção",
      "Jornalismo",
      "Medicina Veterinária",
      "Música",
      "Pedagogia",
      "Psicologia",
      "Publicidade e Propaganda",
      "Rádio e TV",
      "Sistemas de Informação",
      "Teologia",
      "Regência Coral com Capacitação para Docência",
      "Vivências Musicais na Educação",
      "Psicologia infantil-juvenil: A clínica na interdisciplinaridade",
      "Profissionais em Saúde Mental e Contextos Hospitalares",
      "Análise do Comportamento Aplicada (ABA)",
      "Educação Especial Inclusiva",
      "Clínica Psicanalítica",
      "História Arqueológica do Antigo Oriente Próximo e Mediterrâneo",
    ],
    country: "br",
    state: "sp",
  },
  {
    name: "UNASP - Centro Universitário Adventista de São Paulo",
    image: "/images/unaspSP.webp",
    description:
      "O UNASP – Centro Universitário Adventista de São Paulo é uma instituição educacional adventista é reconhecida pela excelência nos serviços prestados, pelos seus elevados padrões éticos e pela qualidade pessoal e profissional de seus egressos.",
    endereco: "Estrada de Itapecerica, 5859 Cep 05858-001 / São Paulo - SP",
    phone: "0800 948 0048",
    website: "https://www.unasp.br",
    courses: [
      "Administração",
      "Análise e Desenvolvimento de Sistemas",
      "Arquitetura e Urbanismo",
      "Ciência da Computação",
      "Ciências Contábeis",
      "Direito",
      "Educação Física",
      "Enfermagem",
      "Engenharia de Computação",
      "Fisioterapia",
      "Nutrição",
      "Pedagogia",
      "Psicologia",
      "Publicidade e Propaganda",
      "Enfermagem em UTI e emergência",
      "Fisioterapia em Unidade de Terapia Intensiva",
      "Enfermagem Obstétrica",
      "Psicologia infantil-juvenil: A clínica na interdisciplinaridade",
      "Práticas Profissionais em Saúde Mental e Contextos Hospitalares",
      "Análise do Comportamento Aplicada (ABA)",
      "Educação Especial Inclusiva",
      "Enfermagem em Saúde da Família",
      "Clínica Psicanalítica",
    ],
    country: "br",
    state: "sp",
  },
  {
    name: "UNASP - Centro Universitário Adventista de São Paulo de Hortolândia ",
    image: "/images/unaspHT.webp",
    description:
      "O UNASP – Centro Universitário Adventista de São Paulo é uma instituição educacional adventista é reconhecida pela excelência nos serviços prestados, pelos seus elevados padrões éticos e pela qualidade pessoal e profissional de seus egressos.",
    endereco: "Rua Pr. Hugo Gegembauer, 265 Cep 13184-010 / Hortolândia - SP",
    phone: "0800 948 0048",
    website: "https://www.unasp.br",
    courses: [
      "Administração",
      "Ciências Contábeis",
      "Direito",
      "Educação Física",
      "Enfermagem",
      "Engenharia de Computação",
      "Medicina",
      "Psicologia",
      "Publicidade e Propaganda",
      "Sistemas de Informação",
      "Fisioterapia Traumato Ortopédica e Esportiva",
      "Profissionais em Saúde Mental e Contextos Hospitalares",
      "Psicologia infantil-juvenil: A clínica na interdisciplinaridade",
      "Práticas Profissionais em Saúde Mental e Contextos Hospitalares",
      "Análise do Comportamento Aplicada (ABA)",
      "Educação Especial Inclusiva",
      "Enfermagem em Saúde da Família",
      "Clínica Psicanalítica",
    ],
    country: "br",
    state: "sp",
  },
  {
    name: "UNIAENE - Centro Universitário Adventista de Ensino do Nordeste",
    image: "/images/uniane.webp",
    description:
      "O UNIAENE é uma instituição de ensino da Igreja Adventista do Sétimo Dia, alicerçada na cosmovisão bíblica, comprometida com a obra cristã da redenção e a formação integral de profissionais competentes para o exercício responsável da cidadania e o serviço à comunidade.",
    endereco:
      "BR-101, km 197, Capoeiruçu - Caixa Postal 18 - Cachoeira BA - CEP: 44.300-000 - Brasil",
    phone: "(75) 3425-8000;  (75) 99111-5129",
    website: "https://www.adventista.edu.br",
    courses: [
      "Administração",
      "Ciências Contábeis",
      "Direito",
      "Enfermagem",
      "Fisioterapia",
      "Gastronomia",
      "Gestão da Tecnologia da Informação",
      "Medicina Veterinária",
      "Nutrição",
      "Odontologia",
      "Pedagogia",
      "Psicologia",
      "Teologia",
      "Psicopedagogia",
      "Educação para Vida Familiar",
      "Andragogia e Formação de Adultos - EaD",
      "Neuropsicopedagogia Escolar - EaD",
      "Direito Civil e Processual Civil",
      "MBA em Gestão Financeira, Auditoria e Controladoria",
      "MBA Executivo em Inovação e Transformação Estratégica",
      "Liderança e Empreendedorismo para Mulheres",
      "Enfermagem em Obstetrícia",
      "Enfermagem em UTI / Urgência e Emergência - COMBO",
      "Fisioterapia em Ortotraumatologia e Hospitalar - COMBO",
      "Fisioterapia Hospitalar Neonatal e Pediátrica",
      "Nutrição Clínica Funcional e Integrativa",
      "Endodontia e imersão em pino de fibra de vidro",
      "Prescrição Clínica de Fitoterápicos Nutracêuticos e Suplementos",
      "Multiprofissional em Cuidados Paliativos",
      "Fitoterapia, Estilo de Vida e Promoção da Saúde EaD",
      "Pilates EaD",
      "Neuropsicologia",
      "Psicologia Hospitalar",
      "Psico-Oncologia",
      "Terapias Contextuais com ênfase em FAP e ACT",
      "Terapia-Cognitivo Comportamental Baseada em Processos",
      "Psicologia da Família - EaD",
    ],
    country: "br",
    state: "ba",
  },
  {
    name: "FAAMA - Faculdade Adventista da Amazônia",
    image: "/images/faama.webp",
    description:
      "FAAMA oferece uma educação integral fundamentada em princípios cristãos. Com seu campus estrategicamente localizado em Benevides, no coração da Amazônia Paraense, a faculdade proporciona um ambiente de aprendizado único, imerso na natureza. Neste cenário inspirador, a FAAMA se dedica a formar profissionais competentes e líderes missionários para servir com excelência na Amazônia e no mundo.",
    endereco:
      "Rodovia Augusto Meira Filho, Km 01, S/N – Paricatuba, Benevides – PA – CEP: 68795-000",
    phone: "(91) 99145-5360",
    website: "https://www.faama.edu.br",
    courses: [
      "Enfermagem",
      "Teologia",
      "Psicologia",
      "Direito",
      "Pedagogia",
      "Análise e Desenvolvimento de Sistemas",
      "MBA em Gerenciamento de Projetos e Metodologias Ágeis",
      "MBA em Gestão de Negócios Sociais e Voluntariado",
      "MBA em Gestão de Recursos Humanos",
      "MBA em Gestão Financeira, Controladoria e Auditoria; MBA em Gestão Organizacional",
      "MBA em Neuromarketing e Mídias Digitais",
      "MBA em Secretariado Executivo",
      "Pós-Graduação em Aprendizagem Criativa e Inovação no Ensino",
      "Terapia Familiar Sistêmica",
    ],
    country: "br",
    state: "pa",
  },
  {
    name: "FADMINAS - Faculdade Adventista de Minas Gerais",
    image: "/images/fadminas.webp",
    description:
      "A FADMINAS oferece uma educação integral fundamentada em princípios cristãos, com seu campo localizado em Lavras-MG.",
    endereco: "Estação Ferroviária Ityrapuan, s/n, zona rural.",
    phone: "(35) 3829-3600",
    website: "https://www.fadminas.edu.br",
    courses: [
      "Administração",
      "Ciências Contábeis",
      "Design Gráfico",
      "Design de Animação",
      "Direito",
      "Psicologia",
      "Pedagogia",
      "Publicidade e Propaganda",
      "MBA em Liderança",
      "MBA em Ciências Jurídicas",
      "MBA em Gestão de Instituições",
      "Neuropsicologia",
      "Gestão Financeira",
      "Marketing Digital",
      "Neuropsicopedagogia",
    ],
    country: "br",
    state: "mg",
  },
  {
    name: "FAP - Faculdade Adventista do Paraná",
    image: "/images/fap.webp",
    description:
      "A FAP oferece uma formação integral fundamentada em princípios cristãos, unindo excelência acadêmica e valores éticos. Localizada no interior do Paraná, é referência em ensino superior de qualidade.",
    endereco: "Gleba Paiçandu – Lote 80, Zona Rural, Ivatuba – PR, CEP 87130-000",
    phone: "(44) 3236-8001",
    website: "https://faculdadeadventista.edu.br/",
    courses: [
      "Análise e desenvolvimento de Sistemas",
      "Gestão de Tecnologia da Informação",
      "Redes de Computadores",
      "Ciências Contábeis",
      "Pedagogia",
      "Psicologia",
      "Teologia",
      "Enfermagem​",
      "Administração Pública",
      "Aprendizagem de Máquina",
      "Ciência de Dados e Big Data Analytics",
      "Educação Especial na Perspectiva Inclusiva",
      "Enfermagem Estética",
      "Enfermagem em Urgência e Emergência",
      "Engenharia de Software com Métodos Ágeis",
      "Gestão Financeira e Orçamentária em Organizações",
      "MBA em Controladoria e Finanças",
      "MBA em Gestão Estratégica em Instituições Educacionais",
      "Neuropsicopedagogia",
      "Pedagogia Social e Gestão de Projetos",
      "Psicologia da Família",
      "Psicomotricidade",
      "Saúde Pública",
    ],
    country: "br",
    state: "pr",
  },
  {
    name: "UAB - Universidad Adventista de Bolivia",
    image: "/images/universidades/uab.webp",
    description:
      "Localizada em Vinto, Cochabamba, oferece cursos nas áreas de saúde, engenharia e ciências humanas.",
    endereco: "Av. Pairumani, Cochabamba, Bolívia",
    phone: "+59 179959979",
    website: "https://www.uab.edu.bo",
    courses: [
      "Contabilidade Pública",
      "Enfermagem",
      "Psicologia",
      "Engenharia Civil",
      "Engenharia de Sistemas",
      "Engenharia Comercial",
      "Administração",
      "Nutrição e Dietética",
      "Bioquímica",
      "Atividade Física e Esportes",
      "Direito",
      "Comunicação social e mídia digital",
      "Administração e Negócios Internacionais",
      "Psicopedagogia",
      "Fisioterapia e Cinesiologia",
      "Arquitetura e Urbanismo",
      "Teologia",
      "Mestre em Administração de Empresas",
      "Mestrado em Educação",
    ],
    country: "bo",
    state: "cb",
  },
  // ===================== UAP - ARGENTINA =====================
  {
    name: "UAP - Universidad Adventista del Plata",
    image: "/images/universidades/uap.jpg",
    description:
      "A Universidad Adventista del Plata (UAP) é uma instituição educacional privada localizada em Libertador San Martín, Entre Ríos, Argentina, com origem em 1898. Oferece uma ampla variedade de cursos em Teologia, Ciências da Saúde, Ciências Econômicas e Administração, Humanidades, Educação e Ciências Sociais, com enfoque na formação integral baseada em princípios cristãos. A universidade também conta com escola de idiomas e programas de nível inicial, primário e secundário.",
    endereco: "Libertador San Martín, província de Entre Ríos, Argentina",
    phone: "Tel.: 0054 343 4918000 | WhatsApp | E-mail: informes@uap.edu.ar",
    website: "https://www.uap.edu.ar",
    courses: [
      // Humanidades / Educação
      "Profesorado en Educación Primaria",
      "Profesorado de Música",
      "Profesorado de Educación Inicial",
      "Psicopedagogía",
      "Comunicación",
      "Psicología",
      "Educación Física",
      "Inglés",
      "Público de Inglés",
      "Profesorado Universitario",
      "Ciencias de la Educación",
      // Econômicas / Administração / Tecnologias
      "Secretariado Ejecutivo (Distancia)",
      "Asistente Ejecutivo",
      "Contador Público",
      "Ingeniería de Sistemas",
      "Administración",
      "Tecnicatura en Tecnología de los Alimentos",
      // Saúde
      "Enfermería",
      "Kinesiología",
      "Nutrición",
      "Medicina",
      "Odontología",
      "Especialización en Cardiología",
      "Diplomatura en Funciones Cognitivas y Demencias",
      // Teologia
      "Capellanía",
      "Teología",
      "Maestría en Teología",
      "Doctorado en Teología",
      // Outros
      "Curso Preuniversitario",
    ],
    country: "ar",
    state: "er",
  },
  // ===================== UPeU - PERU =====================
  {
    name: "UPeU - Universidad Peruana Unión (Lima)",
    image: "/images/universidades/lima.webp",
    description:
      "A Universidad Peruana Unión (UPeU) é uma universidade privada da Igreja Adventista do Sétimo Dia, com sede principal em Lima e filiais em Juliaca e Tarapoto. Fundada em 1983, tem como missão formar profissionais íntegros e com espírito missionário, baseados em uma cosmovisão bíblico-cristã, com forte ênfase no desenvolvimento integral e na pesquisa.",
    endereco: "Km 19 Carretera Central, Ñaña - Lurigancho, Lima - Perú",
    phone: "Tel.: +51 989597367 | E-mail: saulfernandez@upeu.edu.pe",
    website: "https://www.upeu.edu.pe",
    courses: [
      // Graduação - Ciências da Saúde
      "Medicina Humana",
      "Enfermería",
      "Psicología",
      "Nutrición",
      // Graduação - Ciências Empresariais
      "Contabilidad",
      "Administración",
      // Graduação - Educação / Direito
      "Educación Inicial y Puericultura",
      "Educación Inicial",
      "Primaria y Pedagogía",
      "Derecho",
      // Graduação - Engenharia
      "Ingeniería Ambiental",
      "Ingeniería de Industrias Alimentarias",
      "Ingeniería Civil",
      "Ingeniería de Ciberseguridad",
      "Ingeniería de Sistemas",
      "Ingeniería de Software",
      "Ingeniería en Ciencias de Datos e Inteligencia Artificial",
      "Ingeniería Industrial",
      "Arquitectura",
      "Teología",
      // Pós-graduação - UPG Salud Pública / Ciencias de la Salud
      "Doctorado en Salud Pública",
      "Maestría en Salud Pública con mención en Gestión de los Servicios de Salud",
      "Maestría en Salud Pública con mención en Salud Colectiva y Promoción de la Salud",
      "Segunda Especialidad en Epidemiología",
      "Maestría en Enfermería con mención en Administración y Gestión",
      "Maestría en Nutrición Humana con mención en Alimentación Basada en Plantas",
      "Segunda Especialidad en Enfermería en Centro Quirúrgico",
      "Segunda Especialidad en Enfermería en Emergencias y Desastres",
      "Segunda Especialidad en Enfermería en Gineco Obstetricia",
      "Segunda Especialidad en Enfermería en Cuidados Intensivos Pediátricos",
      "Segunda Especialidad en Enfermería en Cuidados Intensivos Neonatales",
      "Segunda Especialidad en Enfermería en Oncología",
      "Segunda Especialidad en Enfermería en Cuidados Quirúrgicos",
      "Segunda Especialidad en Enfermería en Cardiología",
      "Segunda Especialidad en Enfermería en Cuidado Integral Infantil",
      "Segunda Especialidad en Salud Ocupacional",
      "Segunda Especialidad en Enfermería en Cuidados Intensivos",
      "Segunda Especialidad en Enfermería en Cuidados Quirúrgicos con mención en Traumatología y Ortopedia",
      "Segunda Especialidad en Enfermería en Gestión en Inmunizaciones",
      // Pós-graduação - Engenharias e Arquitetura
      "Maestría en Ingeniería de Sistemas con mención en Dirección y Gestión de Tecnologías de Información",
      "Maestría en Ingeniería Ambiental y Desarrollo Sostenible",
      "Maestría BIM Facility Management",
      "Segunda Especialidad en Estadística Aplicada para Investigación",
      "Segunda Especialidad en Ciencia de Datos",
      // Pós-graduação - Ciências Empresariais
      "Maestría en Administración de Negocios con mención en Liderazgo y Gestión Organizacional",
      "Maestría en Administración de Negocios con mención en Finanzas",
      "Maestría en Administración de Negocios con mención en Recursos Humanos",
      "Maestría en Auditoría con mención en Auditoría Integral",
      "Doctorado en Administración de Negocios",
      // Pós-graduação - Psicologia
      "Maestría en Psicología Clínica y de la Salud",
      "Maestría en Terapia Familiar y de Pareja",
      "Segunda Especialidad en Psicología Clínica y de la Salud",
      "Segunda Especialidad en Psicooncología y Cuidados Paliativos",
      "Segunda Especialidad en Neuropsicología",
      // Pós-graduação - Educação
      "Maestría en Educación con mención en Psicología Educativa",
      "Maestría en Educación con mención en Investigación y Docencia Universitaria",
      "Maestría en Educación con mención en Administración Educativa",
      "Doctorado en Educación con mención en Gestión Educativa",
      "Segunda Especialidad en Educación con mención en Enseñanza del Inglés",
      "Segunda Especialidad en Español",
      // Pós-graduação - Teologia
      "Maestría en Teología",
      "Doctorado en Teología",
    ],
    country: "pe",
    state: "li",
  },
  // ===================== UNACH - CHILE =====================
  {
    name: "UNACH - Universidad Adventista de Chile",
    image: "/images/universidades/unach.jpg",
    description:
      "A Universidad Adventista de Chile (UNACH) é uma instituição de ensino superior adventista localizada na Região de Ñuble, Chile. Atualizar esta descrição com informações oficiais da instituição (história, missão, ênfases acadêmicas etc.).",
    endereco: "Camino Las Mariposas 11771, 3780000 Chillán, Ñuble, Chile",
    phone: "Atualizar telefone da UNACH",
    website: "https://www.unach.cl",
  courses: [
    "Ingeniería Comercial",
    "Ingeniería en Agronomía",
    "Ingeniería Civil en Informática",
    "Ingeniería Civil Industrial",
    "Licenciatura en Enfermería",
    "Licenciatura en Nutrición y Dietética",
    "Licenciatura en Obstetricia y Puericultura",
    "Licenciatura en Ciencias de la Salud",
    "Licenciatura en Educación",
    "Licenciatura en Educación Parvularia",
    "Pedagogía en Educación Diferencial",
    "Pedagogía en Educación Física con mención",
    "Licenciatura en Psicología",
    "Licenciatura en Ciencias Jurídicas",
    "Licenciatura en Contador Auditor",
    "Magíster en Ciencias de la Motricidad Humana",
    "Magíster en Psicología Educacional",
    "Magíster en Educación",
    "Magíster en Gestión de Proyectos",
    "Magíster en Salud Pública",
    "Magíster en Fruticultura",
    "Diplomado en Comunicación Efectiva",
    "Diplomado en Manejo Integral del Paciente Crítico",
    "Diplomado en Medicina Natural basada en la Evidencia",
    "Diplomado en Gestión de Procesos",
    "Diplomado en Patrimonio Cultural",
    "Diplomado en Psicología Educacional"
  ],
    country: "cl",
    state: "nb",
  },
]

// Dados de países e estados
const countries = [
  { id: "br", name: "Brasil" },
  { id: "ar", name: "Argentina" },
  { id: "cl", name: "Chile" },
  { id: "pe", name: "Peru" },
  { id: "bo", name: "Bolívia" },
] as const

const statesByCountry: Record<CountryCode, State[]> = {
  br: [
    { id: "sp", name: "São Paulo" },
    { id: "ba", name: "Bahia" },
    { id: "mg", name: "Minas Gerais" },
    { id: "pa", name: "Pará" },
    { id: "pr", name: "Paraná" },
  ],
  bo: [{ id: "cb", name: "Cochabamba" }],
  ar: [{ id: "er", name: "Entre Ríos" }],
  cl: [{ id: "nb", name: "Ñuble" }],
  pe: [{ id: "li", name: "Lima" }],
}

// Type guard para CountryCode
function isCountryCode(value: string): value is CountryCode {
  return ["br", "bo", "ar", "cl", "pe"].includes(value as CountryCode)
}

export default function UniversitiesPage() {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode | "">("")
  const [selectedState, setSelectedState] = useState<string>("")
  const [availableStates, setAvailableStates] = useState<State[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null)

  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const isTablet = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCountryChange = (value: string) => {
    if (value === "" || isCountryCode(value)) {
      setSelectedCountry(value as CountryCode | "")
    }
  }

  useEffect(() => {
    if (selectedCountry) {
      setAvailableStates(statesByCountry[selectedCountry])
    } else {
      setAvailableStates([])
    }
    setSelectedState("")
  }, [selectedCountry])

  const filteredUniversities = universitiesData.filter((uni) => {
    const countryMatch = !selectedCountry || uni.country === selectedCountry
    const stateMatch = !selectedState || uni.state === selectedState
    return countryMatch && stateMatch
  })

  const clearFilters = () => {
    setSelectedCountry("")
    setSelectedState("")
  }

  useEffect(() => {
    if (!mounted) return
    if (isDesktop) return
    if (filteredUniversities.length <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredUniversities.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [mounted, isDesktop, filteredUniversities.length])

  const goNext = () =>
    setCurrentSlide((prev) => (prev + 1) % filteredUniversities.length)
  const goPrev = () =>
    setCurrentSlide((prev) => (prev - 1 + filteredUniversities.length) % filteredUniversities.length)

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-16 px-4 lg:px-8 bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-orange-500 text-center mb-4">
            Nossas Universidades Parceiras
          </h2>
          <p className="text-gray-600 font-serif text-center mb-12 italic text-lg sm:text-xl lg:text-1xl">
            Conheça as instituições de ensino superior adventistas que podem te ajudar a realizar seu sonho.
          </p>

          {/* Filtros */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <div className="flex-1 max-w-md">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                País
              </label>
              <select
                id="country"
                value={selectedCountry}
                onChange={(e) => handleCountryChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Selecione um país</option>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1 max-w-md">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Estado/Região
              </label>
              <select
                id="state"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                disabled={!selectedCountry}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 disabled:opacity-50"
              >
                <option value="">Selecione um estado</option>
                {availableStates.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <Button
                onClick={clearFilters}
                variant="outline"
                className="h-[42px]"
                disabled={!selectedCountry && !selectedState}
              >
                Limpar
              </Button>
            </div>
          </div>

          {/* Resultados */}
          {filteredUniversities.length > 0 ? (
            <>
              {isDesktop && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredUniversities.map((uni, index) => (
                    <div
                      key={index}
                      className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer hover:shadow-xl transition-shadow group"
                      onClick={() => setSelectedUniversity(uni)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                      <img
                        src={uni.image}
                        alt={uni.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                        <h3 className="text-white text-xl font-bold mb-2 line-clamp-2">
                          {uni.name}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {uni.courses.slice(0, 3).map((course, i) => (
                            <span
                              key={i}
                              className="bg-orange-500 text-white text-xs px-2 py-1 rounded"
                            >
                              {course}
                            </span>
                          ))}
                          {uni.courses.length > 3 && (
                            <span className="bg-orange-300 text-white text-xs px-2 py-1 rounded">
                              +{uni.courses.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {!isDesktop && (
                <div className="relative">
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-300 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {filteredUniversities.map((uni, index) => (
                        <div key={index} className="w-full flex-shrink-0 px-4">
                          <div
                            className="relative w-full h-[350px] mx-auto overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer group"
                            onClick={() => setSelectedUniversity(uni)}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                            <img
                              src={uni.image}
                              alt={uni.name}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                              <h3 className="text-white text-lg font-bold mb-2 line-clamp-2">
                                {uni.name}
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {uni.courses.slice(0, 2).map((course, i) => (
                                  <span
                                    key={i}
                                    className="bg-orange-500 text-white text-xs px-2 py-1 rounded"
                                  >
                                    {course}
                                  </span>
                                ))}
                                {uni.courses.length > 2 && (
                                  <span className="bg-orange-300 text-white text-xs px-2 py-1 rounded">
                                    +{uni.courses.length - 2}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {filteredUniversities.length > 1 && (
                    <>
                      <button
                        onClick={goPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-100 hover:bg-orange-300 p-2 rounded-full z-10"
                        aria-label="Universidade anterior"
                      >
                        <ChevronLeft />
                      </button>
                      <button
                        onClick={goNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-100 hover:bg-orange-300 p-2 rounded-full z-10"
                        aria-label="Próxima universidade"
                      >
                        <ChevronRight />
                      </button>

                      <div className="flex justify-center items-center mt-6 gap-2">
                        {filteredUniversities.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              index === currentSlide
                                ? "bg-orange-500"
                                : "bg-orange-200"
                            }`}
                            aria-label={`Ir para universidade ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 text-gray-500">
              Nenhuma universidade encontrada com os filtros selecionados.
            </div>
          )}

          <Dialog
            open={!!selectedUniversity}
            onOpenChange={(open) => !open && setSelectedUniversity(null)}
          >
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              {selectedUniversity && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-orange-500">
                      {selectedUniversity.name}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img
                        src={selectedUniversity.image}
                        alt={selectedUniversity.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">
                          Cursos oferecidos:
                        </h4>
                        <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto py-2">
                          {selectedUniversity.courses.map((course, i) => (
                            <span
                              key={i}
                              className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2"></div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Descrição:
                    </h4>
                    <p className="text-gray-600">
                      {selectedUniversity.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Endereço:</h4>
                    {selectedUniversity.endereco ? (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          selectedUniversity.endereco,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:underline"
                      >
                        {selectedUniversity.endereco}
                      </a>
                    ) : (
                      <p className="text-gray-600">Endereço não disponível</p>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">Contato:</h4>
                    <p className="text-gray-600">{selectedUniversity.phone}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Website:</h4>
                    <a
                      href={selectedUniversity.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline break-all"
                    >
                      {selectedUniversity.website}
                    </a>
                  </div>
                  <Button asChild className="w-full mt-6">
                    <a
                      href={selectedUniversity.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      Visitar Site
                    </a>
                  </Button>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </div>
  )
}
