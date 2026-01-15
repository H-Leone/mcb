export const categories = [
    { name: "Todas as categorias", tag: null },
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

const image = "https://marcobi.com.br/prova/wp-content/uploads/2025/12/8_MARCOBI_Produto_POLI.png";

const descricaoTecnica =
    "A Tinta de Demarcação de Tráfego Acrílica MARCOBI é um revestimento desenvolvido para sinalização horizontal viária, indicado para aplicação em pavimentos asfálticos e de concreto. Sua formulação acrílica proporciona secagem rápida, boa aderência ao substrato e visibilidade adequada da sinalização. O produto é indicado para uso em áreas de tráfego urbano, industrial e logístico, contribuindo para a organização e segurança da circulação de veículos e pedestres.";

const principaisCaracteristicas = [
    "Base acrílica",
    "Secagem rápida",
    "Boa aderência ao pavimento",
    "Boa visibilidade",
    "Aplicação em sinalização horizontal"
];

const aplicacoes = [
    "Vias urbanas",
    "Estacionamentos",
    "Pátios industriais",
    "Áreas de circulação interna",
    "Sinalização horizontal em geral"
];

export const products = [
    { id: "665f1a0e9b1a4c001a000001", name: "Acrílico Premium Branco", tag: "acrilico", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000002", name: "Acrílico Fosco Externo", tag: "acrilico", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000003", name: "Acrílico Semi Brilho", tag: "acrilico", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000004", name: "Acrílico Econômico", tag: "acrilico", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000005", name: "Acrílico Profissional", tag: "acrilico", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },

    { id: "665f1a0e9b1a4c001a000006", name: "Sintético Brilhante Azul", tag: "alquidico-sintetico", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000007", name: "Sintético Fosco Preto", tag: "alquidico-sintetico", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000008", name: "Esmalte Sintético Industrial", tag: "alquidico-sintetico", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000009", name: "Sintético Anticorrosivo", tag: "alquidico-sintetico", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000010", name: "Sintético Secagem Rápida", tag: "alquidico-sintetico", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },

    { id: "665f1a0e9b1a4c001a000011", name: "Tinta Alta Temperatura 300°C", tag: "alta-temperatura", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000012", name: "Tinta Alta Temperatura 600°C", tag: "alta-temperatura", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000013", name: "Revestimento Térmico Industrial", tag: "alta-temperatura", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000014", name: "Esmalte Alta Temperatura Preto", tag: "alta-temperatura", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000015", name: "Proteção Térmica Metálica", tag: "alta-temperatura", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },

    { id: "665f1a0e9b1a4c001a000016", name: "Antipichação Base Água", tag: "antipichacao", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000017", name: "Antipichação Base Solvente", tag: "antipichacao", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000018", name: "Verniz Antipichação Fosco", tag: "antipichacao", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000019", name: "Antipichação Permanente", tag: "antipichacao", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000020", name: "Antipichação Removível", tag: "antipichacao", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },

    { id: "665f1a0e9b1a4c001a000021", name: "Tinta Viária Amarela", tag: "demarcacao-de-trafego", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000022", name: "Tinta Viária Branca", tag: "demarcacao-de-trafego", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000023", name: "Demarcação Acrílica Viária", tag: "demarcacao-de-trafego", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000024", name: "Demarcação Base Solvente", tag: "demarcacao-de-trafego", image, descricaoTecnica, principaisCaracteristicas, aplicacoes },
    { id: "665f1a0e9b1a4c001a000025", name: "Sinalização Horizontal Premium", tag: "demarcacao-de-trafego", image, descricaoTecnica, principaisCaracteristicas, aplicacoes }
];
