import Image from "next/image";
import Button from "@/components/button";
import HeroSection from "@/components/hero-section"; 
import ProductCarousel from "@/components/product-carousel";
import PartnersSection from "@/components/partner-section";

import SobreNos from "../../../public/sobre-nos-landing.jpeg";
import { Baby, Boxes, Building, CalendarPlus, Car, Footprints, Gavel, HandPlatter, Quote, Smartphone, Tractor, TrendingUp } from "lucide-react";

function HomePage() {
    const infos = [
        { title: "+ de 30", subtitle: "Anos de experiência", description: "Atuação consolidada no fornecimento de tintas e revestimentos industriais para diferentes aplicações.", icon: <CalendarPlus size={45} /> },
        { title: "100+", subtitle: "Produtos no portfólio", description: "Portfólio completo de tintas, vernizes, primers, fundos e diluentes.", icon: <TrendingUp size={45} /> },
        { title: "+ 10", subtitle: "Segmentos atendidos", description: "Soluções aplicadas em diferentes segmentos industriais.", icon: <Boxes size={45} /> },
    ];

    const segments = [
        { name: "Metal-Mecânico", icon: <Gavel size={48} /> },
        { name: "Automotivo", icon: <Car size={48} /> },
        { name: "Agrícola", icon: <Tractor size={48} /> },
        { name: "Eletrônicos", icon: <Smartphone size={48} /> },
        { name: "Moveleiro", icon: <HandPlatter size={48} /> },
        { name: "Calçadista", icon: <Footprints size={48} /> },
        { name: "Cosméticos", icon: <Baby size={48} /> },
        { name: "Construção", icon: <Building size={48} /> },
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

            <section className="container mx-auto px-6 py-20 md:py-32">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2 space-y-8 text-center md:text-left">
                        <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Quem somos</span>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            Soluções técnicas em tintas e vernizes industriais
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Desenvolvemos soluções personalizadas para diferentes aplicações e segmentos, com foco inegociável em desempenho, qualidade e confiabilidade.
                        </p>
                        <div className="pt-4 flex justify-center md:justify-start">
                            <Button redirect="/empresa">
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

            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {infos.map((info) => (
                        <div key={info.title} className="flex flex-col items-center text-center space-y-4 p-6 hover:bg-white hover:shadow-md transition-all rounded-lg">
                            <span className="text-blue-600 bg-blue-50 p-4 rounded-full">
                                {info.icon}
                            </span>
                            <h3 className="text-blue-900 text-4xl font-bold">{info.title}</h3>
                            <p className="text-xl font-semibold text-slate-700">{info.subtitle}</p>
                            <p className="text-gray-600 leading-relaxed">{info.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 space-y-12 container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Linha de Produtos</h2>
                    <p className="text-gray-600 text-lg">Para cada necessidade industrial, uma solução técnica específica.</p>
                </div>
                
                <ProductCarousel />
            </section>

            <section className="relative w-full py-32 bg-blue-50/50">
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
                    </svg>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                            Parceria com quem movimenta o mercado
                        </h2>
                        <p className="text-gray-600">
                            Atendemos empresas que concentram grande parte do mercado brasileiro, fornecendo insumos críticos para suas linhas de produção.
                        </p>
                    </div>
                    <PartnersSection />
                </div>

                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                     <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
                    </svg>
                </div>
            </section>

            <section className="container mx-auto px-6 py-24">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold">Segmentos Atendidos</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Tecnologia aplicada respeitando as exigências técnicas de cada processo produtivo.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {segments.map((segment, index) => {
                        const isPrimary = index % 2 === 0;
                        return (
                            <div
                                key={segment.name}
                                className={`flex flex-col items-center justify-center text-center p-8 rounded-xl space-y-4 transition-transform hover:-translate-y-1 hover:shadow-lg border ${
                                    isPrimary ? "bg-white border-blue-100" : "bg-blue-50/50 border-blue-50"
                                }`}
                            >
                                <div className="text-blue-600">{segment.icon}</div>
                                <p className="text-lg font-medium text-slate-700">{segment.name}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

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
            
            <section className="py-20 text-center container mx-auto px-6">
                <div className="bg-blue-600 rounded-3xl p-12 md:p-20 text-white shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para elevar a qualidade do seu acabamento?</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Solicite uma consultoria técnica gratuita e descubra o produto ideal para o seu processo.</p>
                    <div className="flex justify-center gap-4 flex-col md:flex-row">
                        <Button redirect="/contato">Falar com Consultor</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;