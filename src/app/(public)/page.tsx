import Image from "next/image";
import Button from "@/components/button";
import HeroSection from "@/components/hero-section";
import ProductCarousel from "@/components/product-carousel";
import SegmentsSection from "@/components/segments-section";
import { 
    CalendarPlus, CheckCircle2, ArrowRight,
    Factory, ShieldCheck, Microscope, Quote
} from "lucide-react";
import SobreNos from "../../../public/sobre-nos-landing.jpeg";

function HomePage() {
    const stats = [
        { title: "+30", subtitle: "Anos de Mercado", icon: <CalendarPlus size={24} />, desc: "Liderança em revestimentos." },
        { title: "100+", subtitle: "Fórmulas Ativas", icon: <Microscope size={24} />, desc: "Laboratório de ponta." },
        { title: "10+", subtitle: "Setores B2B", icon: <Factory size={24} />, desc: "Presença nacional." },
    ];

    const testimonials = [
        {
            name: "Fernanda Lopes",
            company: "Indústria Plasteel",
            avatar: "/testimonials/fernanda.jpg",
            text: "Trabalhar com a Marcobi facilita nossa rotina. A qualidade e o suporte técnico fazem toda a diferença."
        },
        {
            name: "Rafael Monteiro",
            company: "TecnoParts",
            avatar: "/testimonials/rafael.jpg",
            text: "A performance dos revestimentos e a flexibilidade técnica são pontos fortes da empresa."
        }
    ];

    return (
        <main className="w-full bg-white overflow-x-hidden text-slate-900">
            <HeroSection />

            <section className="relative z-20 -mt-16 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 bg-white">
                    {stats.map((s, i) => (
                        <div key={i} className={`p-8 flex flex-col items-center text-center space-y-2 ${i !== 2 ? 'border-b md:border-b-0 md:border-r border-slate-50' : ''}`}>
                            <div className="text-blue-600 mb-1">{s.icon}</div>
                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{s.title}</h3>
                            <p className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em]">{s.subtitle}</p>
                            <p className="text-xs text-slate-400">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-stretch gap-16">
                    <div className="lg:w-1/2 relative min-h-[400px]">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl"></div>
                        <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-xl">
                            <Image
                                src={SobreNos}
                                alt="Engenharia Marcobi"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                priority
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-slate-50 hidden md:block max-w-[180px]">
                            <ShieldCheck className="text-blue-600 w-8 h-8 mb-2" />
                            <p className="text-xs font-bold text-slate-800">Qualidade certificada em cada lote.</p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
                        <div className="space-y-3">
                            <span className="text-blue-600 font-mono text-xs font-bold tracking-[0.3em] uppercase">Excelência Química</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                                De revestimentos simples a <span className="text-blue-600">soluções de alta engenharia.</span>
                            </h2>
                        </div>
                        
                        <p className="text-base text-slate-500 leading-relaxed">
                            A Marcobi entrega proteção galvânica e durabilidade para indústrias que não podem parar. Nosso laboratório customiza fórmulas para o seu processo produtivo com precisão técnica.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {['Atendimento Consultivo', 'Logística Ágil', 'Repetibilidade Técnica'].map((item) => (
                                <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <CheckCircle2 size={16} className="text-blue-500 shrink-0" /> {item}
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Button redirect="/enterprise" className="px-8 py-3 text-sm">
                                Nossa história
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-slate-900">Destaques do Portfólio</h2>
                        <p className="text-slate-500 mt-2">Tecnologia em polímeros para máxima proteção.</p>
                    </div>
                    <Button redirect="/products" variant="transparent" className="group text-sm">
                        Ver catálogo <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
                <ProductCarousel />
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold text-center mb-12 text-slate-400 uppercase tracking-widest text-xs">Confiam na nossa tecnologia</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(item => (
                            <div key={item} className="h-24 bg-slate-50 rounded-2xl flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all border border-transparent hover:border-slate-100">
                                <span className="text-[10px] font-bold text-slate-400">LOGO {item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SegmentsSection />

            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-12">
                        <span className="text-blue-400 font-mono text-[10px] font-bold tracking-[0.3em] uppercase">Feedback</span>
                        <h2 className="text-3xl font-bold mt-2">O que dizem nossos clientes</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {testimonials.map((t, index) => (
                            <div key={index} className="bg-slate-800/50 border border-slate-700 p-8 rounded-[2rem] flex flex-col justify-between hover:bg-slate-800 transition-colors">
                                <Quote className="text-blue-500 w-8 h-8 opacity-30 mb-4" />
                                <p className="text-base text-slate-200 leading-relaxed italic mb-6">
                                    "{t.text}"
                                </p>
                                <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                                    <div className="w-10 h-10 rounded-full bg-slate-700 relative overflow-hidden">
                                        <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">{t.name}</p>
                                        <p className="text-[10px] text-blue-400 font-medium uppercase tracking-wider">{t.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;