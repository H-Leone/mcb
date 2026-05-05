// categories
export const categories = [
    { name: "Todos os produtos", tag: null },
    { name: "Acrílico", tag: "acrilico" },
    { name: "Alquídico / Sintético", tag: "alquidico-sintetico" },
    { name: "Alta Temperatura", tag: "alta-temperatura" },
    { name: "Antipichação", tag: "antipichacao" },
    { name: "Demarcação de Tráfego", tag: "demarcacao-de-trafego" },
    { name: "Epóxi Mastic", tag: "epoxi-mastic" },
    { name: "Nitrocelulose", tag: "nitrocelulose" },
    { name: "Poliuretano", tag: "poliuretano" },
    { name: "Solvente / Diluente", tag: "solvente-diluente" }
];

// 🔥 função para gerar imagem automaticamente
const getImage = (index: number) => `/produto${index}.png`;

// dados reutilizáveis
const description =
    "A Tinta de Demarcação de Tráfego Acrílica MARCOBI é um revestimento desenvolvido para sinalização horizontal viária, indicado para aplicação em pavimentos asfálticos e de concreto. Sua formulação acrílica proporciona secagem rápida, boa aderência ao substrato e visibilidade adequada da sinalização. O produto é indicado para uso em áreas de tráfego urbano, industrial e logístico, contribuindo para a organização e segurança da circulação de veículos e pedestres.";

const details = [
    "Base acrílica",
    "Secagem rápida",
    "Boa aderência ao pavimento",
    "Boa visibilidade",
    "Aplicação em sinalização horizontal"
];

const applications = [
    "Vias urbanas",
    "Estacionamentos",
    "Pátios industriais",
    "Áreas de circulação interna",
    "Sinalização horizontal em geral"
];

// 🔥 lista base (sem repetição de campos grandes)
const baseProducts = [
    // Acrílico
    { name: "Acrílico Premium Branco", tag: "acrilico" },
    { name: "Acrílico Fosco Externo", tag: "acrilico" },
    { name: "Acrílico Semi Brilho", tag: "acrilico" },
    { name: "Acrílico Econômico", tag: "acrilico" },
    { name: "Acrílico Profissional", tag: "acrilico" },

    // Alquídico / Sintético
    { name: "Sintético Brilhante Azul", tag: "alquidico-sintetico" },
    { name: "Sintético Fosco Preto", tag: "alquidico-sintetico" },
    { name: "Esmalte Sintético Industrial", tag: "alquidico-sintetico" },
    { name: "Sintético Anticorrosivo", tag: "alquidico-sintetico" },
    { name: "Sintético Secagem Rápida", tag: "alquidico-sintetico" },

    // Alta temperatura
    { name: "Tinta Alta Temperatura 300°C", tag: "alta-temperatura" },
    { name: "Tinta Alta Temperatura 600°C", tag: "alta-temperatura" },
    { name: "Revestimento Térmico Industrial", tag: "alta-temperatura" },
    { name: "Esmalte Alta Temperatura Preto", tag: "alta-temperatura" },
    { name: "Proteção Térmica Metálica", tag: "alta-temperatura" },

    // Antipichação
    { name: "Antipichação Base Água", tag: "antipichacao" },
    { name: "Antipichação Base Solvente", tag: "antipichacao" },
    { name: "Verniz Antipichação Fosco", tag: "antipichacao" },
    { name: "Antipichação Permanente", tag: "antipichacao" },
    { name: "Antipichação Removível", tag: "antipichacao" },

    // Demarcação
    { name: "Tinta Viária Amarela", tag: "demarcacao-de-trafego" },
    { name: "Tinta Viária Branca", tag: "demarcacao-de-trafego" },
    { name: "Demarcação Acrílica Viária", tag: "demarcacao-de-trafego" },
    { name: "Demarcação Base Solvente", tag: "demarcacao-de-trafego" },
    { name: "Sinalização Horizontal Premium", tag: "demarcacao-de-trafego" },

    { name: "Tinta Viária Amarela", tag: "demarcacao-de-trafego" },
    { name: "Tinta Viária Branca", tag: "demarcacao-de-trafego" },
    { name: "Demarcação Acrílica Viária", tag: "demarcacao-de-trafego" },
    { name: "Demarcação Base Solvente", tag: "demarcacao-de-trafego" },
    { name: "Sinalização Horizontal Premium", tag: "demarcacao-de-trafego" },

    { name: "Tinta Viária Amarela", tag: "demarcacao-de-trafego" },
    { name: "Tinta Viária Branca", tag: "demarcacao-de-trafego" },
    { name: "Demarcação Acrílica Viária", tag: "demarcacao-de-trafego" },
    { name: "Demarcação Base Solvente", tag: "demarcacao-de-trafego" },
    { name: "Sinalização Horizontal Premium", tag: "demarcacao-de-trafego" },

    { name: "Tinta Viária Amarela", tag: "demarcacao-de-trafego" },
    { name: "Tinta Viária Branca", tag: "demarcacao-de-trafego" },
    { name: "Demarcação Acrílica Viária", tag: "demarcacao-de-trafego" },
];

export const products = baseProducts.map((product, index) => ({
    id: (665 + index + 1).toString(),
    name: product.name,
    tag: product.tag,
    image: getImage(index + 1),
    description,
    details,
    applications
}));