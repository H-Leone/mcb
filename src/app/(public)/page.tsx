import Image from "next/image";
import Button from "@/components/button";
import HeroSection from "@/components/hero-section";
import ProductCarousel from "@/components/product-carousel";
import SegmentsSection from "@/components/segments-section";
import {
    CalendarPlus, Microscope, Factory
} from "lucide-react";
import Extintor from "../../../public/home-extintor.png";
import Parceiro1 from "../../../public/parceiro-1.png"
import Parceiro2 from "../../../public/parceiro-2.png"
import Parceiro3 from "../../../public/parceiro-3.png"

import TestimonialSection from "@/components/testimonial-section";

function HomePage() {
    const stats = [
        { title: "+30", subtitle: "Anos de Atuação", icon: <CalendarPlus size={24} />, desc: "Experiência no desenvolvimento de revestimentos industriais." },
        { title: "100+", subtitle: "Produtos Desenvolvidos", icon: <Microscope size={24} />, desc: "Portfólio técnico para diversas aplicações." },
        { title: "10+", subtitle: "Segmentos Atendidos", icon: <Factory size={24} />, desc: "Soluções para diferentes setores industriais." },
    ];

    const cards = [
        { id: 1, img: Parceiro1 },
        { id: 2, img: Parceiro2 },
        { id: 3, img: Parceiro3 },
    ];

    return (
        <main className="w-full bg-white overflow-x-hidden text-slate-900">
            <HeroSection />

            {/* QUEM SOMOS */}
            <section className="container mx-auto px-4 sm:px-6 py-16 md:py-40">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">
                    
                    <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
                        <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">
                            Quem somos
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold leading-tight pt-2 md:pt-3">
                            Tecnologia em tintas e vernizes para aplicações industriais
                        </h2>

                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            A Marcobi atua no desenvolvimento e fabricação de tintas e vernizes industriais, 
                            oferecendo soluções técnicas para proteção, acabamento e desempenho de superfícies 
                            em diversos segmentos.
                        </p>

                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            Com foco em qualidade e consistência, trabalhamos para atender às exigências 
                            específicas de cada aplicação, garantindo confiabilidade nos processos e resultados.
                        </p>

                        <div className="pt-2 md:pt-4 flex justify-center md:justify-start">
                            <Button redirect="/enterprise">
                                Conheça a empresa
                            </Button>
                        </div>
                    </div>

                    <div className="w-full md:w-5/12 relative">
                        <div className="absolute -inset-3 md:-inset-4 bg-blue-100 rounded-xl -z-10 rotate-3"></div>
                        <Image
                            src={Extintor}
                            alt="Processo industrial de tintas Marcobi"
                            width={500}
                            height={400}
                            className="rounded-xl shadow-lg w-11/12 object-cover h-[240px] sm:h-[320px] md:h-[350px] mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* PRODUTOS */}
            <section className="py-12 space-y-12 container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    
                    <h2 className="text-3xl font-bold">
                        Portfólio de Produtos
                    </h2>

                    <p className="text-gray-600 text-base sm:text-lg">
                        Linhas desenvolvidas para atender diferentes necessidades de proteção e acabamento industrial.
                    </p>
                </div>

                <ProductCarousel />

                <Button className="mx-auto -mb-10" redirect="/products">
                    Acessar catálogo completo
                </Button>
            </section>

            {/* PARCEIROS */}
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
                    
                    <h2 className="text-3xl font-bold text-center">
                        Empresas Atendidas
                    </h2>

                    <p className="w-full md:w-3/5 text-sm sm:text-base md:text-md font-medium text-center mx-auto mt-6 mb-10 md:mb-16">
                        Atuamos junto a empresas de diversos segmentos industriais, 
                        fornecendo soluções em revestimentos com foco em desempenho e durabilidade.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        {cards.map((item) => (
                            <li
                                key={item.id}
                                className="bg-white rounded-xl min-h-[180px] sm:h-56 md:h-72 overflow-hidden shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={item.img}
                                        alt={`Cliente Marcobi ${item.id}`}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
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