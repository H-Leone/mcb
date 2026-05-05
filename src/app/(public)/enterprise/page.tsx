import Image from "next/image";
import SobreNos from "../../../../public/sobre-nos-landing.jpeg";
import Logo from "../../../../public/logo.png"
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
        title: "Fundação",
        description: "Início das operações com foco em tintas técnicas, acompanhando a evolução da indústria nacional.",
    },
    {
        year: "2000",
        title: "Expansão Industrial",
        description: "Implantação da planta fabril e consolidação no setor metal-mecânico e revestimentos industriais.",
    },
    {
        year: "2005",
        title: "Certificação",
        description: "Adequação a padrões de qualidade e processos, ampliando atuação com clientes de grande porte.",
    },
    {
        year: "2018",
        title: "Modernização",
        description: "Investimentos em laboratório e controle de qualidade, com foco em padronização e desempenho.",
    },
];

export default function EmpresaPage() {
    return (
        <main className="w-full bg-white text-slate-900 overflow-x-hidden">

            {/* HERO */}
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
                        <div className="inline-flex items-center justify-center gap-2 md:gap-3 px-4 md:px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-blue-400 text-[10px] sm:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">
                            <Globe2 size={14} />
                            <span>Indústria Brasileira</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] max-w-5xl">
                            Soluções em revestimentos industriais com
                            <span className="text-blue-500"> confiabilidade e desempenho.</span>
                        </h1>

                        <p className="text-base md:text-xl text-slate-400 max-w-2xl font-light">
                            Há mais de 30 anos desenvolvendo tintas e vernizes para aplicações industriais,
                            com foco em durabilidade, padronização e eficiência produtiva.
                        </p>
                    </div>
                </div>
            </section>

            {/* QUEM SOMOS */}
            <section className="py-20 md:py-32 container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
                    
                    <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
                        <div>
                            <span className="text-blue-600 font-mono text-xs font-bold tracking-widest">
                                01. QUEM SOMOS
                            </span>

                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
                                Especialistas em tintas industriais
                                <br />
                                <span className="text-slate-400">com foco em performance.</span>
                            </h2>
                        </div>

                        <div className="space-y-5 text-base md:text-lg text-slate-600 font-light">
                            <p>
                                A Marcobi atua no desenvolvimento e fornecimento de
                                <span className="text-slate-900 font-medium"> tintas e vernizes industriais</span>,
                                atendendo diferentes segmentos com soluções técnicas confiáveis.
                            </p>

                            <p>
                                Nosso compromisso é garantir desempenho em campo, estabilidade de processo
                                e padronização, contribuindo diretamente para a produtividade dos nossos clientes.
                            </p>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-8 border-t pt-8">
                            <div>
                                <p className="text-3xl font-bold text-slate-900">30+</p>
                                <p className="text-xs uppercase text-slate-400 font-bold">
                                    Anos de Mercado
                                </p>
                            </div>

                            <div className="w-px h-10 bg-slate-100"></div>

                            <div>
                                <p className="text-3xl font-bold text-slate-900">100+</p>
                                <p className="text-xs uppercase text-slate-400 font-bold">
                                    Produtos Desenvolvidos
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative">
                        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src={SobreNos}
                                alt="Equipe Marcobi"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-10 right-10 bg-blue-600 text-white p-8 rounded-2xl shadow-2xl max-w-[260px]">
                            <BarChart3 className="w-8 h-8 mb-4 text-blue-200" />
                            <p className="text-lg font-medium">
                                Qualidade e consistência em cada lote produzido.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section className="py-20 md:py-32 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
                        Nossa trajetória
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {TIMELINE_EVENTS.map((item, index) => (
                            <div key={index} className="bg-white p-6 border rounded-3xl">
                                <span className="text-4xl font-black text-slate-200">
                                    {item.year}
                                </span>

                                <h3 className="text-xl font-bold mt-4 mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-slate-500 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MISSÃO VISÃO VALORES */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                        {[
                            {
                                label: "Missão",
                                title: "Qualidade e Desempenho",
                                desc: "Fornecer soluções em revestimentos industriais com alto padrão de qualidade e confiabilidade.",
                                icon: <ShieldCheck />
                            },
                            {
                                label: "Visão",
                                title: "Crescimento Sustentável",
                                desc: "Expandir atuação mantendo excelência técnica e proximidade com o cliente.",
                                icon: <Target />
                            },
                            {
                                label: "Valores",
                                title: "Compromisso e Ética",
                                desc: "Atuar com responsabilidade, transparência e foco no resultado do cliente.",
                                icon: <Users />
                            },
                        ].map((item, i) => (
                            <div key={i} className="space-y-4">
                                <div className="w-12 h-12 text-blue-600">{item.icon}</div>
                                <span className="text-xs text-blue-500 font-bold uppercase">
                                    {item.label}
                                </span>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="pb-20 container mx-auto px-4 sm:px-6">
                <div className="bg-slate-900 rounded-3xl overflow-hidden flex flex-col lg:flex-row">
                    
                    <div className="p-10 lg:w-1/2 space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-white">
                            Conheça nossa estrutura industrial
                        </h2>

                        <p className="text-slate-400">
                            Entre em contato para agendar uma visita técnica ou entender
                            como nossas soluções podem atender sua operação.
                        </p>

                        <Link
                            href="https://wa.me/5511995427107?text=Olá! Gostaria de agendar uma visita técnica."
                            target="_blank"
                        >
                            <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold flex items-center gap-3 mx-auto lg:mx-0">
                                Agendar Visita
                                <ArrowRight size={18} />
                            </button>
                        </Link>
                    </div>

                    <div className="lg:w-1/2 min-h-[300px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.70425785072!2d-46.9056346246736!3d-23.435056778887413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf026fdaa94a37%3A0x116e1e3343fd52e3!2sR.%20Santa%20Catarina%2C%201%20-%20Jardim%20da%20V%C3%A1rzea%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006530-070!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}