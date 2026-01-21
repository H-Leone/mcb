import Image from "next/image";
import Button from "@/components/button";
import PartnersSection from "@/components/partner-section";

import PlaceholderImg from "../../../../public/sobre-nos-landing.jpeg";

import { 
    Microscope, ShieldCheck, ClipboardCheck, 
    Award, FlaskConical, FileCheck, 
    CheckCircle2, Factory, Scale, Fingerprint, Layers 
} from "lucide-react";


const QUALITY_STATS = [
    { value: "0.01%", label: "Índice de Refugo" },
    { value: "ISO 9001", label: "Certificação Global" },
    { value: "24 Meses", label: "Rastreabilidade" },
    { value: "100%", label: "Lotes Testados" },
];

const PROCESS_STEPS = [
    { 
        id: 1, 
        title: "Controle de Entrada (IQC)", 
        desc: "Nenhuma matéria-prima entra na fábrica sem passar pelo espectrômetro. Analisamos pureza, densidade e viscosidade antes do descarregamento.",
        icon: <Fingerprint size={32} className="text-emerald-500"/>
    },
    { 
        id: 2, 
        title: "Processo de Dispersão", 
        desc: "Moagem controlada digitalmente para garantir a granulometria exata (Hegman). Isso define o brilho e a cobertura final da tinta.",
        icon: <Factory size={32} className="text-emerald-500"/>
    },
    { 
        id: 3, 
        title: "Correção Colorimétrica", 
        desc: "Ajuste fino de cor com Delta E < 0.5. O que você aprova no laboratório é exatamente o que chega na sua linha de pintura.",
        icon: <Microscope size={32} className="text-emerald-500"/>
    },
    { 
        id: 4, 
        title: "Liberação Final (OQC)", 
        desc: "Emissão automática de laudo técnico e arquivamento de contra-prova líquida e aplicada por 2 anos.",
        icon: <ClipboardCheck size={32} className="text-emerald-500"/>
    },
];

const CERTIFICATIONS = [
    { name: "ISO 9001:2015", icon: <Award size={40} /> },
    { name: "Norma ASTM B117", icon: <FlaskConical size={40} /> },
    { name: "Compliance Ambiental", icon: <CheckCircle2 size={40} /> },
    { name: "Laudos ABNT", icon: <FileCheck size={40} /> },
];


function QualityPage() {
    return (
        <main className="w-full overflow-x-hidden text-slate-800 bg-white">
            
            <section className="relative w-full py-32 flex flex-col items-center justify-center text-center bg-white pattern-grid-lg">
                <div className="container mx-auto px-6 z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-slate-200 bg-slate-50 text-slate-500 text-xs font-mono uppercase tracking-widest mb-6">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        Engineering Dept.
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-6 max-w-4xl mx-auto">
                        A qualidade não é um ato,<br/> 
                        <span className="text-slate-400">é um hábito.</span>
                    </h1>
                    
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Nos bastidores de cada lata de tinta existe um rigoroso processo de engenharia química, testes físicos e controle estatístico.
                    </p>
                </div>
                
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
            </section>

            <section className="w-full bg-slate-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 divide-x divide-slate-700/50">
                        {QUALITY_STATS.map((stat, i) => (
                            <div key={i} className="flex-1 text-center min-w-[150px] px-4">
                                <p className="text-4xl font-bold text-emerald-400 font-mono tracking-tight">{stat.value}</p>
                                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-32 container mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-3xl font-bold text-slate-900">O Ciclo de Precisão</h2>
                    <p className="text-slate-500 mt-2">Como garantimos a repetibilidade do lote.</p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-24">
                        {PROCESS_STEPS.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={step.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                    
                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-emerald-500 rounded-full hidden md:block z-10"></div>

                                    <div className="w-full md:w-1/2 flex justify-center">
                                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 w-full max-w-md relative group hover:border-emerald-200 transition-colors">
                                            <div className="absolute top-4 right-4 text-slate-200 text-6xl font-bold opacity-50 select-none">
                                                0{step.id}
                                            </div>
                                            <div className="mb-4 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm">
                                                {step.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/2 md:text-left text-center">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 md:hidden">{step.title}</h3>
                                        <p className="text-lg text-slate-600 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3 space-y-6">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-blue-600/20">
                            <ShieldCheck size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Compliance & Normas</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Não vendemos apenas tinta, entregamos segurança jurídica e técnica. Nossos processos seguem rigorosamente normas nacionais e internacionais.
                        </p>
                        <Button redirect="/certificacoes" >
                            Visualizar Certificados (PDF)
                        </Button>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {CERTIFICATIONS.map((cert, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 flex items-center gap-4 hover:border-blue-400 transition-colors cursor-default">
                                <div className="text-slate-400">{cert.icon}</div>
                                <span className="font-semibold text-slate-700">{cert.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative w-full h-[500px] md:h-[600px] bg-fixed bg-center bg-cover my-0" style={{ backgroundImage: "url('/sobre-nos-landing.jpeg')" }}> {/* Usando style inline para simular bg-fixed com a imagem placeholder, idealmente use o componente Image com position absolute e fixed se preferir, mas bg-fixed css dá um efeito parallax legal aqui */}
               <div className="absolute inset-0 bg-slate-900/80"></div>
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <Microscope className="text-emerald-400 w-16 h-16 mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Laboratório de Ponta</h2>
                    <p className="text-slate-300 max-w-2xl text-lg mb-8">
                        Realizamos testes de Salt Spray, Câmara Úmida e Intemperismo Artificial (UV) internamente.
                    </p>
                    <div className="flex gap-4">
                        <button className="px-8 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-all">
                            Conhecer Equipamentos
                        </button>
                    </div>
               </div>
            </section>
            
            <section className="py-24 bg-white text-center container mx-auto px-6">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl font-bold text-slate-900">Pronto para auditar nossa qualidade?</h2>
                    <p className="text-slate-600">
                        Nossas portas estão abertas para visitas técnicas e homologação de fornecedores.
                    </p>
                    <div className="flex justify-center gap-4">
                         <Button redirect="/contato">Falar com Qualidade</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default QualityPage;