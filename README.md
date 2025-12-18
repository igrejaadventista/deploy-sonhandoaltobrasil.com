# Sonhando Alto Brasil - Landing Page (Edição 2025)


## 📖 Sobre o Projeto

Esta é a landing page oficial para a campanha **Sonhando Alto 2025**, uma iniciativa da Igreja Adventista do Sétimo Dia no Brasil. Este projeto desenvolvido em **Next.js** serve como o principal ponto de contato, informação e inspiração para estudantes que desejam participar do programa de colportagem estudantil.

### 🏛️ História e Contexto

O "Sonhando Alto" é mais do que um programa; é um legado histórico da educação adventista no Brasil. Há décadas, ele tem sido a ponte fundamental entre o sonho do ensino superior e a realidade financeira de milhares de jovens.

Através do ministério da colportagem (venda de literaturas cristãs e de saúde), estudantes adquirem recursos para custear seus estudos em instituições da rede adventista, além de desenvolverem habilidades de comunicação, liderança e missão.

### 🎯 Papel do Sistema e Missão

**Nosso Papel:**
Esta aplicação web tem o papel crucial de modernizar a comunicação do programa, oferecendo uma experiência de usuário fluida e inspiradora. Ela centraliza informações sobre como funciona a colportagem, apresenta as universidades parceiras e facilita o processo de inscrição.

**Nossa Missão:**
> "Conectar jovens adventistas a oportunidades reais de educação superior, fornecendo as ferramentas, a inspiração e o suporte necessários para que realizem seus sonhos acadêmicos e missionários através do ministério da colportagem."

---

## ✨ Funcionalidades Principais

Com base na estrutura atual do projeto, a landing page oferece:

* **Experiência Visual Imersiva:** Uso de vídeos de fundo e animações suaves (Lenis scroll) para engajar o visitante.
* **Testemunhos Reais:** Seção dedicada a histórias de sucesso de ex-colportores (em vídeo e texto) para inspirar novos participantes.
* **Mapa Interativo:** Navegação por regiões do Brasil para encontrar líderes e oportunidades locais.
* **Informações das Instituições:** Detalhes sobre as universidades parceiras (UNASP, FADMINAS, FAAMA, FAP).
* **FAQ Dinâmico:** Seção de perguntas frequentes para sanar dúvidas rapidamente.
* **Formulário de Inscrição:** Captação de leads interessados no programa.

---

## 📸 Screenshots do Sistema

*(Abaixo estão placeholders baseados nas imagens que você subiu. Quando o site estiver rodando, você pode tirar prints reais e substituir os caminhos).*

### Página Inicial (Hero)
Visão geral impactante com vídeo de fundo e chamada para ação. <br>
![Hero Section](public/readme/001.png)
![Hero Section](public/readme/002.png)

### Seção de Depoimentos
Histórias que inspiram, com carrossel de vídeos.
![Depoimentos](public/readme/003.png) <br>

### Universidades Parceiras
Apresentação das instituições de ensino.
![Universidades](public/readme/004.png)<br>

### Líderes Uniões
Apresentação dos líderes de cada união reprentante.
![Universidades](public/readme/005.png)<br>

### FAQ
Perguntas e resposta sobre o projeto.
![Universidades](public/readme/006.png)<br>

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as tecnologias mais modernas do ecossistema React:

* **[Next.js 15](https://nextjs.org/)** (App Router) - Framework React principal.
* **[TypeScript](https://www.typescriptlang.org/)** - Para tipagem estática e código mais seguro.
* **[Tailwind CSS](https://tailwindcss.com/)** - Para estilização utilitária e responsiva.
* **[shadcn/ui](https://ui.shadcn.com/)** - Componentes de UI reutilizáveis e acessíveis (baseados no Radix UI).
* **Swiper** - Para carrosséis de imagens e depoimentos.
* **Framer Motion / Lenis** - Para animações e scroll suave.

---

## 🚀 Como rodar o projeto localmente

Siga os passos abaixo para executar a aplicação em sua máquina.

### Pré-requisitos

* Node.js (Versão 18.17.0 ou superior recomendada)
* Gerenciador de pacotes (npm, yarn ou pnpm)
* Git LFS instalado (devido aos arquivos de vídeo grandes)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/igrejaadventista/deploy-sonhandoaltobrasil.com.git](https://github.com/igrejaadventista/deploy-sonhandoaltobrasil.com.git)
    cd deploy-sonhandoaltobrasil.com
    ```

2.  **Certifique-se de estar na branch correta:**
    ```bash
    git checkout sa-2025
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

4.  **Configure as variáveis de ambiente:**
    Renomeie o arquivo `.env.example` para `.env.local` e preencha as chaves necessárias (se houverem).
    ```bash
    cp .env.example .env.local
    ```

5.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---

## 🤝 Desenvolvido por:

Gabriel Kramer Mota

### Contatos
Linkedin: https://www.linkedin.com/in/gabriel-kramer-desenvolvedor/ <br>
Github: https://github.com/gabrielkramermota <br>
Email: kramermota55@gmail.com <br>




