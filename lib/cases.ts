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
  metricas: Metrica[]
  aprendizados: string[]
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
    metricas: [
      { valor: "25%", descricao: "Redução de retrabalho nas entregas" },
      { valor: "90%", descricao: "Taxa de resolução nos testes de usabilidade" },
      { valor: "12+", descricao: "Melhorias implementadas na home" },
    ],
    aprendizados: [
      "Decisões de design sem dado são apostas. Hotjar e entrevistas transformaram suposições em evidências.",
      "CTA acima do fold não é clichê — é respeito pelo tempo do usuário.",
      "Suporte ao cliente é um canal de pesquisa disfarçado. Cada ticket é uma falha de UX esperando ser resolvida.",
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
    metricas: [
      { valor: "100%", descricao: "Dos pedidos migrados para o portal" },
      { valor: "Zero", descricao: "Tickets de suporte após o lançamento" },
      { valor: "5★", descricao: "Avaliação média dos representantes" },
    ],
    aprendizados: [
      "Autonomia bem desenhada é melhor que um time de suporte maior.",
      "1.300 representantes com perfis diferentes exigem uma plataforma que seja flexível sem ser confusa.",
      "Scaffolding é subestimado: guiar o usuário no primeiro uso define se ele volta ou abandona.",
    ],
  },
]
