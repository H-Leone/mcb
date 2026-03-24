import Image from "next/image";
import SobreNos from "../../../../public/sobre-nos-landing.jpeg";
import {
    Target,
    Users,
    ArrowRight,
    ShieldCheck,
    BarChart3,
    Globe2
} from "lucide-react";
import Link from "next/link";

const TIMELINE_EVENTS = [
    {
        year: "1991",
        title: "A Gênese",
        description: "Fundação com foco em tintas imobiliárias, identificando rapidamente a demanda por alta performance industrial.",
    },
    {
        year: "2000",
        title: "Salto Fabril",
        description: "Inauguração da planta atual. Especialização no setor metal-mecânico e revestimentos anticorrosivos.",
    },
    {
        year: "2005",
        title: "Padrão Internacional",
        description: "Conquista da ISO 9001, consolidando a Marcobi como fornecedora homologada para multinacionais.",
    },
    {
        year: "2018",
        title: "Indústria 4.0",
        description: "Automação da linha de dispersão e laboratório de colorimetria digital Delta-E.",
    },
];

export default function EmpresaPage() {
    return (
        <main className="w-full bg-white text-slate-900 overflow-x-hidden">
            <section className="relative min-h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={SobreNos}
                        alt="Fachada Indústria Marcobi"
                        fill
                        priority
                        className="object-cover object-center opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
                        <div className="inline-flex items-center justify-center gap-2 md:gap-3 px-4 md:px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-blue-400 text-[10px] sm:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase max-w-full">
                            <Globe2 size={14} />
                            <span>Tradição em Movimento</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] max-w-5xl">
                            Protegendo o <span className="text-blue-500">futuro</span> da indústria desde 1991.
                        </h1>

                        <p className="text-base md:text-xl text-slate-400 max-w-2xl font-light px-2 sm:px-0">
                            Combinamos química de precisão com três décadas de experiência para entregar o que há de mais avançado em revestimentos industriais.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                    <div className="w-px h-10 md:h-12 bg-gradient-to-b from-transparent to-white"></div>
                </div>
            </section>

            <section className="py-20 md:py-32 container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
                    <div className="lg:col-span-6 space-y-8 md:space-y-10 text-center lg:text-left">
                        <div className="space-y-4">
                            <span className="text-blue-600 font-mono text-xs md:text-sm font-bold tracking-widest">
                                01. QUEM SOMOS
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                                Mais que fabricantes,
                                <br />
                                <span className="text-slate-400">somos estrategistas térmicos e químicos.</span>
                            </h2>
                        </div>

                        <div className="space-y-5 md:space-y-6 text-base md:text-lg text-slate-600 font-light">
                            <p>
                                A Marcobi nasceu para suprir uma lacuna crítica: a falta de <span className="text-slate-900 font-medium">inteligência técnica</span> no fornecimento de tintas. Não entregamos apenas latas; entregamos a garantia de que sua linha de produção não pare por falhas de revestimento.
                            </p>
                            <p>
                                Nossa sede própria abriga um dos laboratórios mais modernos do país, onde cada cor é tratada como um projeto de engenharia único.
                            </p>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-8 border-t border-slate-100 pt-8 md:pt-10">
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tighter">30+</p>
                                <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 font-bold mt-1">
                                    Anos de Mercado
                                </p>
                            </div>
                            <div className="w-px h-10 md:h-12 bg-slate-100"></div>
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tighter">15k+</p>
                                <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 font-bold mt-1">
                                    Fórmulas Desenvolvidas
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative">
                        <div className="relative aspect-[4/5] rounded-[1.75rem] md:rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src={SobreNos}
                                alt="Engenheiro Marcobi"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="relative md:absolute mt-4 md:mt-0 md:-bottom-10 md:-right-6 lg:right-10 bg-blue-600 text-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl max-w-full md:max-w-[280px] mx-auto md:mx-0">
                            <BarChart3 className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-6 text-blue-200" />
                            <p className="text-base md:text-lg font-medium leading-snug">
                                "Evoluímos para que sua estrutura seja eterna."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-20 gap-6 text-center md:text-left">
                        <div className="max-w-xl">
                            <span className="text-blue-600 font-mono text-xs md:text-sm font-bold tracking-widest">
                                02. LEGADO
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
                                Nossa linha do tempo não é feita de anos, mas de marcos tecnológicos.
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {TIMELINE_EVENTS.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 md:p-8 border border-slate-200 rounded-3xl group hover:bg-slate-900 transition-all duration-500 text-center sm:text-left"
                            >
                                <span className="text-4xl font-black text-slate-100 group-hover:text-white/10 transition-colors">
                                    {item.year}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-400 mt-4 mb-3 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed transition-colors">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center md:text-left">
                        {[
                            { label: "Missão", title: "Excelência em Proteção", desc: "Criar revestimentos que desafiam o tempo e a corrosão.", icon: <ShieldCheck /> },
                            { label: "Visão", title: "Liderança Técnica", desc: "Ser o benchmark em soluções químicas para o setor industrial.", icon: <Target /> },
                            { label: "Valores", title: "Ética Molecular", desc: "Integridade absoluta em cada grama de pigmento produzido.", icon: <Users /> },
                        ].map((item, i) => (
                            <div key={i} className="space-y-6 flex flex-col items-center md:items-start">
                                <div className="w-12 h-12 text-blue-600">{item.icon}</div>
                                <div className="space-y-2">
                                    <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.2em]">
                                        {item.label}
                                    </span>
                                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                                </div>
                                <p className="text-slate-500 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-20 md:pb-32 container mx-auto px-4 sm:px-6">
                <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
                    <div className="p-6 sm:p-8 md:p-12 lg:p-20 lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Infraestrutura que inspira confiança.
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                            Nossa fábrica é aberta para auditorias de qualidade e visitas técnicas. Conheça o rigor por trás da marca Marcobi.
                        </p>
                        <Link 
                            href="https://wa.me/5511995427107?text=Olá! Gostaria de agendar uma visita técnica para avaliar um projeto industrial."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full sm:w-fit"
                        >
                            <button className="px-8 md:px-12 py-5 bg-white text-slate-950 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs inline-flex items-center justify-center gap-4 hover:bg-blue-600 hover:text-white hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 w-full sm:w-auto border-2 border-transparent hover:border-blue-400 group">
                                Agendar Visita Técnica 
                                <ArrowRight 
                                    size={18} 
                                    className="group-hover:translate-x-2 transition-transform duration-300" 
                                />
                            </button>
                        </Link>
                    </div>

                    <div className="lg:w-1/2 min-h-[280px] sm:min-h-[360px] lg:min-h-[400px] grayscale hover:grayscale-0 transition-all duration-700 opacity-60 hover:opacity-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=..."
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
}