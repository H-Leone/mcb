import Image from "next/image";
import Button from "@/components/button";
import HeroSection from "@/components/hero-section";
import ProductCarousel from "@/components/product-carousel";
import SegmentsSection from "@/components/segments-section";
import {
    CalendarPlus, Microscope, Factory
} from "lucide-react";
import SobreNos from "../../../public/sobre-nos-landing.jpeg";
import TestimonialSection from "@/components/testimonial-section";

function HomePage() {
    const stats = [
        { title: "+30", subtitle: "Anos de Mercado", icon: <CalendarPlus size={24} />, desc: "Liderança em revestimentos." },
        { title: "100+", subtitle: "Fórmulas Ativas", icon: <Microscope size={24} />, desc: "Laboratório de ponta." },
        { title: "10+", subtitle: "Setores B2B", icon: <Factory size={24} />, desc: "Presença nacional." },
    ];

    return (
        <main className="w-full bg-white overflow-x-hidden text-slate-900">
            <HeroSection />
{/* 
            <section className="relative z-20 -mt-16 md:-mt-24 container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 bg-white">
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className={`p-6 sm:p-8 flex flex-col items-center text-center space-y-2 ${i !== 2 ? "border-b md:border-b-0 md:border-r border-slate-50" : ""}`}
                        >
                            <div className="text-blue-600 mb-1">{s.icon}</div>
                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{s.title}</h3>
                            <p className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em]">{s.subtitle}</p>
                            <p className="text-xs text-slate-400">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section> */}

            <section className="container mx-auto px-4 sm:px-6 py-16 md:py-40">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">
                    <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
                        <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Quem somos</span>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight pt-2 md:pt-3">
                            Soluções técnicas em tintas e vernizes industriais
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            Desenvolvemos soluções personalizadas para diferentes aplicações e segmentos, com foco inegociável em desempenho, qualidade e confiabilidade.
                        </p>
                        <div className="pt-2 md:pt-4 flex justify-center md:justify-start">
                            <Button redirect="/enterprise">
                                Nossa história
                            </Button>
                        </div>
                    </div>

                    <div className="w-full md:w-5/12 relative">
                        <div className="absolute -inset-3 md:-inset-4 bg-blue-100 rounded-xl -z-10 rotate-3"></div>
                        <Image
                            src={SobreNos}
                            alt="Fábrica de tintas e vernizes"
                            width={500}
                            height={400}
                            className="rounded-xl shadow-lg w-11/12 object-cover h-[240px] sm:h-[320px] md:h-[350px] mx-auto"
                        />
                    </div>
                </div>
            </section>

            <section className="py-12 space-y-12 container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-3xl font-bold">Linha de Produtos</h2>
                    <p className="text-gray-600 text-base sm:text-lg">
                        Para cada necessidade industrial, uma solução técnica específica.
                    </p>
                </div>

                <ProductCarousel />

                <Button className="mx-auto -mb-10" redirect="/products">
                    Ver catálogo 
                </Button>
            </section>

            <section className="relative overflow-hidden bg-blue/30 w-full mx-auto my-12 py-24 md:py-50">
                <svg
                    className="absolute top-0 left-0 w-full"
                    viewBox="0 0 1440 140"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#f8f8f8"
                        d="M0,90 C240,130 480,50 720,50 960,50 1200,130 1440,90 L1440,0 L0,0 Z"
                    />
                </svg>

                <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#f8f8f8"
                        d="M0,110 
                            C180,140 360,80 540,95 
                            C720,110 900,150 1080,120 
                            C1260,95 1350,70 1440,85 
                            L1440,160 
                            L0,160 Z"
                    />
                </svg>

                <div className="relative z-10 px-4 sm:px-6 md:px-20">
                    <h2 className="text-3xl font-bold text-center">Nossos Parceiros</h2>

                    <p className="w-full md:w-3/5 text-sm sm:text-base md:text-md font-medium text-center mx-auto mt-6 mb-10 md:mb-16">
                        Atendemos as principais empresas que concentram 47,8% do mercado brasileiro de cosméticos, com um faturamento de cerca de R$34,7 bilhões ao ano.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        {[1, 2, 3].map((item) => (
                            <li
                                key={item}
                                className="bg-white rounded-xl min-h-[180px] sm:h-56 md:h-72 flex items-center justify-center shadow-sm"
                            >
                                Parceiro {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <SegmentsSection />

            <TestimonialSection />
        </main>
    );
}

export default HomePage;