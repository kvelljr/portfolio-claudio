export type Aprendizado = {
  titulo: string
  descricao: string
}

export type Case = {
  slug: string
  title: string
  subtitle: string
  empresa: string
  ano: string
  role: string
  ferramentas: string[]
  tags: string[]
  cover: string
  contexto: string
  problema: string
  processo: ProcessoItem[]
  solucao: string
  imagens?: string[]
  metricas: Metrica[]
  aprendizados: Aprendizado[]
}

export type ProcessoItem = {
  numero: string
  titulo: string
  descricao: string
}

export type Metrica = {
  valor: string
  descricao: string
}

export const cases: Case[] = [
  {
    slug: "autopass",
    title: "Redesenhando a Home da Autopass.",
    subtitle: "Redesign estratégico da home de uma fintech de transporte urbano para aumentar conversão e reduzir suporte.",
    empresa: "Autopass",
    ano: "2024",
    role: "Product Designer",
    ferramentas: ["Figma", "FigJam", "Hotjar", "Notion"],
    tags: ["UX Research", "UI Design", "Fintech", "Mobile"],
    cover: "/cases/autopass-cover.png",
    contexto: "A Autopass é uma plataforma de pagamento de transporte urbano. A home do produto acumulava problemas de navegação, CTA fraco e ausência de informação sobre benefícios — resultando em altas taxas de abandono e tickets desnecessários de suporte.",
    problema: "Usuários chegavam na home e não entendiam o que o produto fazia nem como começar. A seção de recarga ficava abaixo do fold, os benefícios não estavam comunicados e o suporte recebia perguntas que deveriam ser respondidas pela própria interface.",
    processo: [
      {
        numero: "01",
        titulo: "Descoberta",
        descricao: "Análise heurística, mapeamento de jornada e entrevistas com usuários para identificar os principais pontos de atrito na home atual.",
      },
      {
        numero: "02",
        titulo: "Definição",
        descricao: "Criação de personas, priorização dos problemas com matriz de impacto e definição das decisões de design com base em dados comportamentais.",
      },
      {
        numero: "03",
        titulo: "Prototipagem",
        descricao: "Wireframes, exploração de layouts e prototipagem de alta fidelidade no Figma com handoff completo para o time de engenharia.",
      },
    ],
    solucao: "Reestruturação completa da arquitetura de informação da home: CTA de recarga acima do fold, seção de benefícios com destaque visual, FAQ integrado para reduzir tickets de suporte e fluxo de compra do Bilhete Digital simplificado em 4 passos.",
    imagens: [
      "/cases/autopass-01.png",
      "/cases/autopass-02.png",
      "/cases/autopass-03.png",
    ],
    metricas: [
      { valor: "25%", descricao: "Redução de retrabalho nas entregas" },
      { valor: "90%", descricao: "Taxa de resolução nos testes de usabilidade" },
      { valor: "12+", descricao: "Melhorias implementadas na home" },
    ],
    aprendizados: [
      {
        titulo: "Dado qualitativo é tão poderoso quanto o quantitativo.",
        descricao: "Foram as falas dos usuários que justificaram cada decisão de layout. Apresentar o porquê rastreado em pesquisa tornou as decisões inegociáveis.",
      },
      {
        titulo: "Clareza de acesso é mais importante que completude de funcionalidade.",
        descricao: "A solução ideal seria recarga integrada na Home. A solução certa foi tornar o caminho óbvio, resolvendo a dor sem depender de integração técnica complexa.",
      },
      {
        titulo: "Site institucional e ferramenta de serviço são produtos diferentes.",
        descricao: "Redesenhar a Home foi, antes de tudo, redefinir o papel do canal. Essa mudança de perspectiva guiou todas as decisões de arquitetura.",
      },
    ],
  },
  {
    slug: "forcecoffe",
    title: "Redesign Estratégico do E-commerce Force Coffee.",
    subtitle: "Redesign completo de um e-commerce de bebida energética premium para elevar conversão e comunicar naturalidade.",
    empresa: "Force Coffee",
    ano: "2025",
    role: "Designer UX/UI",
    ferramentas: ["Figma", "Tray E-commerce"],
    tags: ["UX Research", "UI Design", "E-commerce", "Benchmark"],
    cover: "/cases/forcecoffe-cover.png",
    contexto: "A Force Coffee é uma bebida energética premium com 11 super ingredientes naturais. O e-commerce existente acumulava problemas de clareza na comunicação do produto e uma experiência de compra confusa — com paleta escura e institucional que contradiz diretamente o posicionamento '100% natural' da marca.",
    problema: "O site antigo não respondia às perguntas fundamentais do usuário: o que é esse produto, quais são seus benefícios e por que comprá-lo. A identidade visual pesada e a arquitetura de informação fraca geravam abandono antes mesmo do usuário chegar à página de produto ou ao checkout.",
    processo: [
      {
        numero: "01",
        titulo: "Análise Heurística",
        descricao: "Mapeamento dos principais problemas de usabilidade e comunicação no site existente, identificando barreiras à conversão e pontos críticos da jornada de compra.",
      },
      {
        numero: "02",
        titulo: "Benchmark Competitivo",
        descricao: "Pesquisa com concorrentes de lifestyle e health food que apontou a necessidade urgente de abandonar a paleta escura e adotar uma identidade mais leve, orgânica e alinhada ao produto.",
      },
      {
        numero: "03",
        titulo: "Redesign & Entrega",
        descricao: "Reestruturação completa de Home, Catálogo e Produto com nova paleta orgânica, copy orientado a benefícios, prova social em destaque e CTA otimizado para conversão.",
      },
    ],
    solucao: "Redesign completo das páginas Home, Catálogo e Produto com foco em conversão: nova paleta orgânica (bege, off-white e tons de terra) alinhada ao posicionamento '100% natural', arquitetura da informação que comunica os 11 super ingredientes e benefícios de performance de forma imediata, seção de prova social e time de embaixadores, e jornada de compra simplificada até o checkout.",
    imagens: [
      "/cases/forcecoffe-01.png",
      "/cases/forcecoffe-02.png",
      "/cases/forcecoffe-03.png",
    ],
    metricas: [
      { valor: "3", descricao: "Páginas redesenhadas (Home, Catálogo e Produto)" },
      { valor: "11", descricao: "Super ingredientes comunicados na nova arquitetura" },
      { valor: "100%", descricao: "Alinhamento visual com o posicionamento natural da marca" },
    ],
    aprendizados: [
      {
        titulo: "Paleta de cores é posicionamento, não estética.",
        descricao: "A troca do fundo escuro para tons orgânicos não foi apenas visual — foi o alinhamento da interface com a promessa '100% natural' da marca. Design e estratégia precisam falar a mesma língua.",
      },
      {
        titulo: "O usuário decide em segundos: clareza é conversão.",
        descricao: "A nova Home foi desenhada para responder imediatamente: o que é o produto, quais são os benefícios e por que comprar. Arquitetura de informação bem feita reduz fricção sem precisar de mais conteúdo.",
      },
      {
        titulo: "Benchmark não é cópia — é calibração de expectativas.",
        descricao: "Analisar concorrentes de lifestyle e health food ajudou a entender o padrão visual que o público já espera. A pesquisa justificou cada decisão de redesign perante o cliente.",
      },
    ],
  },
  {
    slug: "marcon",
    title: "Portal do Representante Marcon.",
    subtitle: "Criação de um portal exclusivo que transformou representantes dependentes em autônomos, do zero ao resultado em produção.",
    empresa: "Marcon Indústria",
    ano: "2023",
    role: "Product Designer",
    ferramentas: ["Figma", "FigJam", "Miro", "Notion", "Maze"],
    tags: ["UX Research", "UI Design", "B2B", "Plataforma Web"],
    cover: "/cases/marcon-cover.png",
    contexto: "A Marcon Indústria contava com mais de 1.300 representantes comerciais espalhados pelo Brasil que dependiam inteiramente do time interno para fazer pedidos, consultar estoque e personalizar materiais. Isso gerava gargalo, erros e insatisfação dos dois lados.",
    problema: "Representantes sem autonomia precisavam ligar ou enviar e-mail para cada pedido. O processo manual gerava erros frequentes, atrasos e uma carga operacional enorme para o time de vendas interno — além de 5.000+ produtos sem visibilidade em tempo real.",
    processo: [
      {
        numero: "01",
        titulo: "Pesquisa",
        descricao: "Entrevistas com representantes e time interno para mapear dores, fluxos existentes e oportunidades de automação.",
      },
      {
        numero: "02",
        titulo: "Arquitetura",
        descricao: "Definição da estrutura do portal: módulos de pedido, personalização de arte, dashboard analítico e gestão de clientes inativos.",
      },
      {
        numero: "03",
        titulo: "Design e Validação",
        descricao: "Prototipagem de alta fidelidade, testes com representantes reais e iteração até aprovação para handoff com o time de desenvolvimento.",
      },
    ],
    solucao: "Portal exclusivo para representantes com: tela de entrada personalizada, fluxo de pedido autônomo em 4 passos, ferramenta de personalização de arte, dashboard analítico completo e visibilidade de clientes inativos — tudo sem precisar acionar o time interno.",
    imagens: [
      "/cases/marcon-01.png",
      "/cases/marcon-02.png",
      "/cases/marcon-03.png",
    ],
    metricas: [
      { valor: "100%", descricao: "Dos pedidos migrados para o portal" },
      { valor: "Zero", descricao: "Tickets de suporte após o lançamento" },
      { valor: "5★", descricao: "Avaliação média dos representantes" },
    ],
    aprendizados: [
      {
        titulo: "Autonomia bem desenhada é melhor que um time de suporte maior.",
        descricao: "Quando o usuário consegue resolver sozinho, o time ganha capacidade e o produto ganha credibilidade. O design foi a ferramenta de escala.",
      },
      {
        titulo: "1.300 representantes com perfis diferentes exigem flexibilidade sem confusão.",
        descricao: "A solução foi criar hierarquias claras e progressão de complexidade, sem sobrecarregar o usuário desde o primeiro acesso.",
      },
      {
        titulo: "Scaffolding é subestimado no design de produto.",
        descricao: "Guiar o usuário no primeiro uso define se ele volta ou abandona. Onboarding não é feature — é parte do produto.",
      },
    ],
  },
]
