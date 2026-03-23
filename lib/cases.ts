export type Aprendizado = {
  titulo: string
  descricao: string
}

export type MeuPapel = {
  intro: string
  atividades: string[]
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
  desafios: string[]
  meuPapel: MeuPapel
  abordagem: string
  processo: ProcessoItem[]
  solucao: string
  imagens?: string[]
  figmaEmbed?: string
  metricas: Metrica[]
  resultadosBullets: string[]
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
    title: "Autopass: home que comunica, guia e converte.",
    subtitle: "Redesign estratégico da home de uma fintech de transporte urbano para deixar o produto claro, reduzir suporte e facilitar a recarga.",
    empresa: "Autopass",
    ano: "2024",
    role: "Product Designer",
    ferramentas: ["Figma", "FigJam", "Hotjar", "Notion"],
    tags: ["UX Research", "UI Design", "Fintech", "Mobile"],
    cover: "/cases/autopass-cover.png",
    contexto: "A Autopass é uma plataforma de pagamento de transporte urbano que conecta o cartão TOP ao dia a dia de milhares de usuários em São Paulo. A home do produto evoluiu de forma fragmentada ao longo do tempo, acumulando seções informativas que não respondiam às perguntas essenciais de quem chegava sem contexto.\n\nO desafio era claro: redesenhar a home sem gerar ruptura para quem já usava o produto, reorganizando a arquitetura de forma que o produto fizesse sentido imediato para novos usuários e reduzisse a carga sobre o time de suporte.\n\nAssumi o projeto com foco em clareza, hierarquia e conversão: transformar uma home que confundia em uma que guiava.",
    desafios: [
      "Usuários chegavam na home e não entendiam o que o produto oferecia",
      "O CTA de recarga ficava abaixo do fold, fora do campo visual imediato",
      "Os benefícios do cartão TOP não estavam comunicados de forma clara",
      "Alto volume de tickets de suporte para dúvidas que a interface deveria resolver",
      "O fluxo de compra do Bilhete Digital tinha etapas desnecessárias que causavam abandono",
    ],
    meuPapel: {
      intro: "Atuei como Product Designer responsável pelo redesign completo da home, da descoberta ao handoff. Participei das decisões junto ao time de produto e negócio.",
      atividades: [
        "Conduzir análise heurística e mapeamento da jornada existente",
        "Aplicar entrevistas e testes de usabilidade com usuários reais",
        "Criar personas e priorizar problemas com matriz de impacto",
        "Desenvolver wireframes, protótipos de alta fidelidade e handoff para engenharia",
        "Atuar como referência de design nas decisões estruturais do produto",
      ],
    },
    abordagem: "O projeto foi conduzido com discovery contínuo: análise comportamental via Hotjar, entrevistas com usuários que chegavam ao site pela primeira vez e acompanhamento dos principais motivos de ticket no suporte. O contato direto com as dores reais de quem usava o produto foi o que direcionou cada decisão de priorização e tornou inegociável cada mudança proposta.",
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
    solucao: "Reestruturação completa da arquitetura de informação da home: CTA de recarga movido acima do fold, seção de benefícios com destaque visual imediato, FAQ integrado para absorver as dúvidas mais frequentes sem acionar o suporte e fluxo de compra do Bilhete Digital simplificado em 4 passos claros. Cada decisão foi validada com usuários reais antes do handoff.",
    imagens: [
      "/cases/autopass-01.png",
      "/cases/autopass-02.png",
      "/cases/autopass-03.png",
    ],
    metricas: [
      { valor: "25%", descricao: "Redução de retrabalho nas entregas" },
      { valor: "90%", descricao: "Taxa de resolução nos testes de usabilidade" },
      { valor: "12+", descricao: "Melhorias implementadas na arquitetura da home" },
    ],
    resultadosBullets: [
      "CTA de recarga acima do fold, visível logo no primeiro scroll",
      "Benefícios do cartão TOP comunicados de forma clara na jornada",
      "Redução de tickets de suporte para dúvidas respondíveis pela interface",
      "Fluxo de compra do Bilhete Digital simplificado e testado com usuários reais",
    ],
    aprendizados: [
      {
        titulo: "Dado qualitativo é tão poderoso quanto o quantitativo.",
        descricao: "Foram as falas dos usuários que justificaram cada decisão de layout. Apresentar o porquê rastreado em pesquisa tornou as decisões inegociáveis, inclusive com o time de negócio.",
      },
      {
        titulo: "Clareza de acesso é mais importante que completude de funcionalidade.",
        descricao: "A solução ideal seria recarga integrada direto na Home. A solução certa foi tornar o caminho óbvio, resolvendo a dor sem depender de integração técnica complexa.",
      },
      {
        titulo: "Site institucional e ferramenta de serviço são produtos diferentes.",
        descricao: "Redesenhar a Home foi, antes de tudo, redefinir o papel do canal. Essa mudança de perspectiva guiou todas as decisões de arquitetura e priorização.",
      },
    ],
  },
  {
    slug: "forcecoffe",
    title: "Force Coffee: redesign que alinha marca e converte.",
    subtitle: "Redesign completo do e-commerce de uma bebida energética premium para comunicar naturalidade, gerar confiança e facilitar a decisão de compra.",
    empresa: "Force Coffee",
    ano: "2025",
    role: "Designer UX/UI",
    ferramentas: ["Figma", "Tray E-commerce"],
    tags: ["UX Research", "UI Design", "E-commerce", "Benchmark"],
    cover: "/cases/forcecoffe-cover.png",
    contexto: "A Force Coffee é uma bebida energética com 11 super ingredientes naturais posicionada no mercado premium de saúde e performance. O e-commerce existente acumulava problemas que iam na contramão do posicionamento da marca: paleta escura e pesada, arquitetura confusa e uma comunicação que não respondia às dúvidas básicas de quem chegava pela primeira vez.\n\nO desafio era redesenhar a experiência de compra garantindo que qualquer pessoa entendesse o produto, confiasse nele e soubesse como comprá-lo, logo nos primeiros segundos de navegação.\n\nAssumi o projeto como Designer UX/UI responsável pelo redesign completo, da análise inicial à entrega das páginas prontas para implementação.",
    desafios: [
      "Paleta escura e institucional em conflito direto com o posicionamento '100% natural'",
      "Home sem hierarquia clara: o usuário não sabia o que o produto era nem por que comprá-lo",
      "Os 11 ingredientes naturais, maior diferencial da marca, não apareciam na jornada de compra",
      "Abandono precoce antes mesmo do usuário chegar à página de produto ou ao checkout",
      "Ausência de prova social e validação externa que gerasse confiança na marca",
    ],
    meuPapel: {
      intro: "Atuei como Designer UX/UI responsável pelo redesign completo do e-commerce, da análise ao handoff das páginas Home, Catálogo e Produto.",
      atividades: [
        "Conduzir análise heurística do site existente identificando barreiras à conversão",
        "Pesquisa de benchmark com concorrentes de lifestyle e health food",
        "Redefinir a paleta de cores e identidade visual alinhada ao posicionamento da marca",
        "Reestruturar a arquitetura de informação das páginas Home, Catálogo e Produto",
        "Criar protótipos de alta fidelidade com foco em conversão",
        "Entregar handoff completo para implementação na plataforma Tray",
      ],
    },
    abordagem: "A análise começou pelo benchmark: marcas de lifestyle e health food que já conquistaram a confiança visual do público-alvo. Ficou claro que o padrão esperado para esse segmento é completamente oposto ao que estava implementado: tons claros, fotografia limpa e copy orientado a benefícios. A partir disso, cada decisão de redesign foi justificada por dados de referência de mercado, tornando o processo mais objetivo e a aprovação do cliente mais rápida.",
    processo: [
      {
        numero: "01",
        titulo: "Análise Heurística",
        descricao: "Mapeamento dos principais problemas de usabilidade e comunicação no site existente, identificando barreiras à conversão e pontos críticos da jornada.",
      },
      {
        numero: "02",
        titulo: "Benchmark Competitivo",
        descricao: "Pesquisa com concorrentes de lifestyle e health food que apontou a necessidade de abandonar a paleta escura e adotar uma identidade mais leve e orgânica.",
      },
      {
        numero: "03",
        titulo: "Redesign & Entrega",
        descricao: "Reestruturação completa de Home, Catálogo e Produto com nova paleta orgânica, copy orientado a benefícios, prova social em destaque e CTA otimizado.",
      },
    ],
    solucao: "Redesign completo das páginas Home, Catálogo e Produto com foco em conversão: nova paleta orgânica (bege, off-white e tons de terra) alinhada ao posicionamento '100% natural', arquitetura que comunica os 11 super ingredientes e benefícios de performance de forma imediata, seção de prova social com embaixadores, e jornada de compra simplificada até o checkout com menos fricção.",
    imagens: [
      "/cases/forcecoffe-01.png",
      "/cases/forcecoffe-02.png",
      "/cases/forcecoffe-03.png",
    ],
    metricas: [
      { valor: "3", descricao: "Páginas redesenhadas (Home, Catálogo e Produto)" },
      { valor: "11", descricao: "Super ingredientes comunicados na jornada de compra" },
      { valor: "100%", descricao: "Alinhamento visual com o posicionamento da marca" },
    ],
    resultadosBullets: [
      "Nova identidade visual completamente alinhada ao posicionamento '100% natural'",
      "Os 11 ingredientes naturais agora aparecem com destaque na jornada de compra",
      "Prova social e embaixadores integrados à navegação para gerar confiança",
      "Jornada de compra simplificada do catálogo ao checkout com menos etapas",
    ],
    aprendizados: [
      {
        titulo: "Paleta de cores é posicionamento, não estética.",
        descricao: "A troca do fundo escuro para tons orgânicos não foi apenas visual. Foi o alinhamento da interface com a promessa '100% natural' da marca. Design e estratégia precisam falar a mesma língua.",
      },
      {
        titulo: "O usuário decide em segundos: clareza é conversão.",
        descricao: "A nova Home foi desenhada para responder imediatamente: o que é o produto, quais são os benefícios e por que comprar. Arquitetura de informação bem feita reduz fricção sem precisar de mais conteúdo.",
      },
      {
        titulo: "Benchmark não é cópia, é calibração de expectativas.",
        descricao: "Analisar concorrentes de lifestyle e health food ajudou a entender o padrão visual que o público já espera. A pesquisa justificou cada decisão de redesign perante o cliente.",
      },
    ],
  },
  {
    slug: "marcon",
    title: "Marcon: autonomia para 1.300 representantes.",
    subtitle: "Criação de um portal B2B do zero que eliminou a dependência do time interno e transformou representantes em usuários autônomos.",
    empresa: "Marcon Indústria",
    ano: "2023",
    role: "Product Designer",
    ferramentas: ["Figma", "FigJam", "Miro", "Notion", "Maze"],
    tags: ["UX Research", "UI Design", "B2B", "Plataforma Web"],
    cover: "/cases/marcon-cover.png",
    contexto: "A Marcon Indústria Metalúrgica conta com mais de 1.300 representantes comerciais espalhados pelo Brasil. Antes do portal, cada pedido, consulta de estoque ou personalização de material de vendas exigia contato direto com o time interno: via telefone ou e-mail.\n\nO processo era lento, sujeito a erros e gerava uma carga operacional crescente para o time de vendas. Com mais de 5.000 produtos no catálogo, a falta de visibilidade em tempo real tornava o trabalho dos representantes ainda mais dependente e ineficiente.\n\nO projeto foi construído do zero: sem referência de sistema anterior e com um público muito heterogêneo, de jovens digitalizados a representantes com décadas de experiência no segmento metalúrgico.",
    desafios: [
      "Representantes sem autonomia dependiam de ligações e e-mails para cada pedido",
      "Processo manual gerava erros frequentes, atrasos e retrabalho na operação",
      "5.000+ produtos sem visibilidade em tempo real para quem estava em campo",
      "Time de vendas interno sobrecarregado com demandas puramente operacionais",
      "Perfis de usuário muito diferentes: do representante analógico ao digital",
    ],
    meuPapel: {
      intro: "Atuei como Product Designer responsável por toda a experiência do portal, do mapeamento de dores à entrega para desenvolvimento, sem produto de referência anterior.",
      atividades: [
        "Conduzir entrevistas com representantes de diferentes regiões e perfis",
        "Mapear fluxos existentes e identificar oportunidades de automação",
        "Definir a arquitetura do portal e os módulos prioritários para o MVP",
        "Criar protótipos de alta fidelidade e conduzir testes com representantes reais",
        "Iterar até aprovação e realizar handoff completo para o time de desenvolvimento",
      ],
    },
    abordagem: "O trabalho começou com entrevistas presenciais e remotas com representantes de diferentes regiões. O mapeamento mostrou que o problema não era tecnológico: era de autonomia. O representante precisava de uma ferramenta que funcionasse como um assistente operacional no campo, não como mais um sistema para aprender. As soluções foram validadas de forma incremental com usuários reais antes de cada etapa de desenvolvimento, garantindo que nenhuma entrega gerasse ruptura na rotina já consolidada.",
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
    solucao: "Portal exclusivo para representantes com: tela de entrada personalizada por perfil, fluxo de pedido autônomo em 4 passos, ferramenta de personalização de material publicitário, dashboard analítico com visibilidade de clientes inativos, tudo sem precisar acionar o time interno. O sistema foi projetado para ser intuitivo mesmo para representantes com menor familiaridade digital.",
    imagens: [
      "/cases/marcon-01.png",
      "/cases/marcon-02.png",
      "/cases/marcon-03.png",
    ],
    metricas: [
      { valor: "100%", descricao: "Dos pedidos migrados para o portal" },
      { valor: "Zero", descricao: "Tickets de suporte operacional após o lançamento" },
      { valor: "5★", descricao: "Avaliação média dos representantes" },
    ],
    resultadosBullets: [
      "100% dos pedidos migraram do processo manual para o portal",
      "Zero tickets de suporte operacional registrados após o lançamento",
      "Representantes ganharam autonomia total, sem precisar acionar o time interno",
      "Time de vendas liberado das demandas operacionais para focar em estratégia",
    ],
    aprendizados: [
      {
        titulo: "Autonomia bem desenhada é melhor que um time de suporte maior.",
        descricao: "Quando o usuário consegue resolver sozinho, o time ganha capacidade e o produto ganha credibilidade. O design foi a ferramenta de escala, não a contratação.",
      },
      {
        titulo: "1.300 representantes com perfis diferentes exigem flexibilidade sem confusão.",
        descricao: "A solução foi criar hierarquias claras e progressão de complexidade, sem sobrecarregar o usuário desde o primeiro acesso. Cada módulo foi testado com perfis distintos.",
      },
      {
        titulo: "Onboarding não é feature, é parte do produto.",
        descricao: "Guiar o usuário no primeiro uso define se ele volta ou abandona. Scaffolding bem pensado foi o que garantiu adoção real por representantes com diferentes níveis de familiaridade digital.",
      },
    ],
  },
  {
    slug: "glamory",
    title: "Glamory: tema de moda premium criado para ser vendido.",
    subtitle: "Criação de um tema de e-commerce para o segmento de moda feminina, desenvolvido do zero para ser comercializado como produto, com identidade sofisticada e jornada de compra otimizada.",
    empresa: "Projeto próprio",
    ano: "2025",
    role: "UX/UI Designer",
    ferramentas: ["Figma", "VTEX IO", "FigJam"],
    tags: ["UX/UI Design", "E-commerce", "Tema", "Fashion"],
    cover: "/cases/glamory-cover.png",
    contexto: "Temas prontos para e-commerce são uma forma acessível de lojistas lançarem lojas com visual profissional sem contratar um designer. Funciona como um produto: o lojista compra o tema, instala na plataforma e já tem uma loja visualmente pronta para vender.\n\nO desafio foi diferente de um projeto para um cliente: criar algo que funcionasse para qualquer loja de moda feminina, com identidade suficientemente forte para se destacar no catálogo de temas, mas flexível o bastante para ser adaptado por quem comprasse.\n\nDesenvoli o Glamory do zero como produto próprio: da definição do posicionamento visual ao protótipo interativo, pensando cada decisão tanto pela ótica de quem compra o tema quanto de quem usa a loja.",
    desafios: [
      "Criar uma identidade visual forte sem amarrar a identidade de uma marca específica",
      "Equilibrar sofisticação estética com usabilidade para o usuário final",
      "Cobrir todas as páginas críticas de uma loja (home, PLP, PDP, checkout) com consistência",
      "Tornar o tema atraente o suficiente para se destacar no catálogo de temas concorrentes",
      "Projetar componentes flexíveis que funcionem para diferentes catálogos e estilos",
    ],
    meuPapel: {
      intro: "Responsável por todo o projeto: posicionamento, arquitetura de informação, design visual e prototipagem interativa do tema Glamory do zero.",
      atividades: [
        "Definição do posicionamento e público-alvo do tema",
        "Benchmark de temas e lojas de referência no segmento de moda premium",
        "Arquitetura de informação e fluxos de navegação para todas as páginas",
        "Design de alta fidelidade no Figma com sistema de componentes reutilizáveis",
        "Prototipagem interativa completa para apresentação e venda do tema",
      ],
    },
    abordagem: "O processo começou com análise de temas já vendidos no mercado e referências de lojas de moda premium, entendendo o que diferencia um tema com boa saída dos genéricos. A partir disso, defini um posicionamento visual claro para o Glamory: sofisticado, limpo e editorial. Cada página foi pensada como um produto autônomo, mas com consistência total de sistema.",
    processo: [
      {
        numero: "01",
        titulo: "Benchmark",
        descricao: "Análise de temas vendidos em plataformas como Loja Integrada e VTEX, identificando padrões de sucesso e espaços não explorados no segmento de moda.",
      },
      {
        numero: "02",
        titulo: "Posicionamento",
        descricao: "Definição da identidade visual do tema: paleta, tipografia, tom e referências estéticas que comunicassem premium sem perder flexibilidade para o lojista.",
      },
      {
        numero: "03",
        titulo: "Design de páginas",
        descricao: "Criação de todas as páginas do tema (home, vitrine, produto, carrinho) com componentes consistentes e adaptáveis a diferentes catálogos de moda.",
      },
      {
        numero: "04",
        titulo: "Protótipo",
        descricao: "Protótipo interativo de alta fidelidade no Figma, navegável do início ao fim, usado tanto para validação interna quanto para apresentação do produto.",
      },
    ],
    solucao: "Tema Glamory: um produto visual completo para e-commerces de moda feminina, com home editorial, vitrine com filtros, página de produto com foco em conversão e fluxo de checkout simplificado. Tudo projetado para funcionar como produto pronto, com identidade coesa e componentes flexíveis que se adaptam a diferentes estilos de loja.",
    figmaEmbed: "https://embed.figma.com/proto/D0Nrp6mlS3yeI9PQq3k6wD/GLAMORY---VTEX-IO--Copy-?page-id=0%3A1&node-id=3-2&m=draw&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A2&show-proto-sidebar=1&embed-host=share",
    metricas: [
      { valor: "100%", descricao: "criado do zero" },
      { valor: "4", descricao: "páginas principais projetadas" },
      { valor: "VTEX IO", descricao: "plataforma alvo" },
      { valor: "2025", descricao: "ano de entrega" },
    ],
    resultadosBullets: [
      "Tema com identidade visual coesa e posicionamento premium definido",
      "Todas as páginas críticas cobertas: home, vitrine, produto e checkout",
      "Sistema de componentes flexível para diferentes estilos de loja de moda",
      "Protótipo interativo completo pronto para apresentação e venda",
    ],
    aprendizados: [
      {
        titulo: "Projetar um produto é diferente de projetar para um cliente.",
        descricao: "Sem um cliente definindo o briefing, as decisões precisam ser sustentadas por benchmarks e pelo entendimento do mercado. A autonomia aumenta a responsabilidade sobre cada escolha.",
      },
      {
        titulo: "Flexibilidade e identidade não são opostos.",
        descricao: "Um tema precisa ser reconhecível o suficiente para ser vendido, mas neutro o suficiente para ser adotado. Encontrar esse equilíbrio foi o principal exercício de design do projeto.",
      },
      {
        titulo: "O protótipo é o produto.",
        descricao: "Para um tema ser vendido, ele precisa ser experimentado. Um protótipo navegável no Figma transforma uma ideia visual em algo tangível, reduzindo a distância entre apresentação e decisão de compra.",
      },
    ],
  },
]
