import Image from "next/image";
import Button from "@/components/button";
import HeroSection from "@/components/hero-section";
import ProductCarousel from "@/components/product-carousel";
import PartnersSection from "@/components/partner-section";

import SobreNos from "../../../public/sobre-nos-landing.jpeg";
import { Baby, Boxes, Building, CalendarPlus, Car, Footprints, Gavel, HandPlatter, Quote, Smartphone, Tractor, TrendingUp } from "lucide-react";
import SegmentsSection from "@/components/segments-section";

function HomePage() {
    const infos = [
        { title: "+ de 30", subtitle: "Anos de experiência", description: "Atuação no fornecimento de tintas e revestimentos industriais.", icon: <CalendarPlus size={45} /> },
        { title: "100+", subtitle: "Produtos no portfólio", description: "Portfólio completo de tintas, vernizes, primers, fundos e diluentes.", icon: <TrendingUp size={45} /> },
        { title: "+ 10", subtitle: "Segmentos atendidos", description: "Soluções aplicadas em diferentes segmentos industriais.", icon: <Boxes size={45} /> },
    ];

    const testimonials = [
        {
            name: "Fernanda Lopes",
            role: "Gerente de Compras",
            company: "Indústria Plasteel",
            avatar: "/testimonials/fernanda.jpg",
            rating: 5,
            text: "Trabalhar com a Marcobi facilita muito nossa rotina. Além da qualidade dos produtos, o suporte técnico e o cumprimento de prazos fazem toda a diferença."
        },
        {
            name: "Rafael Monteiro",
            role: "Coord. Desenvolvimento",
            company: "TecnoParts",
            avatar: "/testimonials/rafael.jpg",
            rating: 5,
            text: "A performance dos revestimentos e a flexibilidade técnica para atender necessidades específicas são pontos fortes da empresa."
        }
    ];

    return (
        <main className="w-full overflow-x-hidden text-slate-800">
            <HeroSection />

            <section className="container mx-auto px-6 py-20 md:py-40">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2 space-y-8 text-center md:text-left">
                        <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Quem somos</span>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight pt-3">
                            Soluções técnicas em tintas e vernizes industriais
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Desenvolvemos soluções personalizadas para diferentes aplicações e segmentos, com foco inegociável em desempenho, qualidade e confiabilidade.
                        </p>
                        <div className="pt-4 flex justify-center md:justify-start">
                            <Button redirect="/enterprise">
                                Nossa história
                            </Button>
                        </div>
                    </div>

                    <div className="md:w-5/12 relative">
                        <div className="absolute -inset-4 bg-blue-100 rounded-xl -z-10 rotate-3"></div>
                        <Image
                            src={SobreNos}
                            alt="Fábrica de tintas e vernizes"
                            width={500}
                            height={400}
                            className="rounded-xl shadow-lg w-full object-cover h-[350px]"
                        />
                    </div>
                </div>
            </section>

            {/* <section className="py-12">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {infos.map((info) => (
                        <div key={info.title} className="flex flex-col items-center text-center space-y-4 p-6 transition-all rounded-lg">
                            <span className="text-blue-600 bg-blue-50 p-4 rounded-full">
                                {info.icon}
                            </span>
                            <h3 className="text-blue-900 text-4xl font-bold">{info.title}</h3>
                            <p className="text-xl font-semibold text-slate-700">{info.subtitle}</p>
                            <p className="text-gray-600 leading-relaxed">{info.description}</p>
                        </div>
                    ))}
                </div>
            </section> */}

            <section className="py-12 space-y-12 container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-3xl font-bold">Linha de Produtos</h2>
                    <p className="text-gray-600 text-lg">Para cada necessidade industrial, uma solução técnica específica.</p>
                </div>

                <ProductCarousel />
            </section>

            <section className="relative overflow-hidden bg-blue/30 w-full mx-auto my-12 py-50">
                <svg
                    className="absolute top-0 left-0 w-full"
                    viewBox="0 0 1440 140"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#D2E1EB"
                        d="M0,90 C240,130 480,50 720,50 960,50 1200,130 1440,90 L1440,0 L0,0 Z"
                    />
                </svg>

                <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#D2E1EB"
                        d="M0,110 
                            C180,140 360,80 540,95 
                            C720,110 900,150 1080,120 
                            C1260,95 1350,70 1440,85 
                            L1440,160 
                            L0,160 Z"
                    />
                </svg>

                <div className="relative z-10 px-20">
                    <h2 className="text-3xl font-bold text-center">Nossos Parceiros</h2>

                    <p className="w-3/5 text-md font-medium text-center mx-auto mt-6 mb-16">
                        Atendemos as principais empresas que concentram 47,8% do mercado brasileiro de cosméticos, com um faturamento de cerca de R$34,7 bilhões ao ano.
                    </p>

                    <ul className="grid grid-cols-3 gap-6">
                        {[1, 2, 3].map(item => (
                            <div
                                key={item}
                                className="bg-white rounded-xl h-72 flex items-center justify-center shadow-sm"
                            >
                                Parceiro {item}
                            </div>
                        ))}
                    </ul>
                </div>
            </section>

            <SegmentsSection />

            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">O que dizem nossos clientes</h2>
                        <p className="text-slate-400 mt-4">Confiança construída entrega após entrega.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {testimonials.map((t, index) => (
                            <div key={index} className="bg-slate-800 p-8 rounded-2xl relative">
                                <Quote className="absolute top-8 right-8 text-slate-700 w-12 h-12 rotate-180" />
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-full bg-slate-600 overflow-hidden relative">
                                        <Image
                                            src={t.avatar}
                                            alt={t.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">{t.name}</p>
                                        <p className="text-sm text-slate-400">{t.role}</p>
                                        <p className="text-xs text-blue-400 uppercase tracking-wide mt-1">{t.company}</p>
                                    </div>
                                </div>
                                <p className="text-slate-300 leading-relaxed italic">"{t.text}"</p>
                                <div className="flex text-yellow-500 gap-1 mt-4 text-sm">
                                    {"★".repeat(t.rating)}
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