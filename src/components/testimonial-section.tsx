"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Com o laudo TK eu consegui negociar com segurança. Sabia exatamente o que precisava de atenção no carro e isso me ajudou a fechar um bom negócio.",
        name: "Carlos M.",
        role: "Comprador particular",
    },
    {
        quote: "Ajudou a evitar uma compra ruim. O vistoriador encontrou sinais de repintura que eu não teria visto sozinho.",
        name: "Ana P.",
        role: "Compradora particular",
    },
    {
        quote: "O relatório veio claro, objetivo e muito útil na negociação. Me deu confiança para decidir com mais tranquilidade.",
        name: "Ricardo S.",
        role: "Comprador particular",
    },
    {
        quote: "Gostei muito da rapidez. O processo foi simples, o agendamento foi fácil e o laudo chegou bem organizado.",
        name: "Marina L.",
        role: "Compradora particular",
    },
    {
        quote: "A vistoria trouxe transparência para a compra. Consegui entender melhor o estado do carro antes de fechar negócio.",
        name: "Felipe A.",
        role: "Comprador particular",
    },
    {
        quote: "Padronizado e profissional. O laudo deixou claro os pontos de atenção e ajudou bastante na decisão final.",
        name: "Juliana R.",
        role: "Compradora particular",
    },
];

function TestimonialSection() {
    return (
        <section className="px-8 py-24 bg-blue-background">
            <div className="mx-auto w-11/12">
                <div className="text-center mb-16 space-y-2">
                    <p className="text-slate-400 uppercase font-semibold text-sm tracking-[0.2em]">
                        Depoimentos
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-blue-500">
                        Quem já usou recomenda
                    </h2>
                </div>

                <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.45 }}
                            viewport={{ once: true }}
                            className="break-inside-avoid mb-8 rounded-3xl border border-white/10 bg-[#151f3a] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <div className="text-cyan-400">
                                    <Quote size={22} />
                                </div>

                                <div className="flex items-center gap-0.5 text-yellow-400">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <span key={starIndex} className="text-sm">
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="text-left text-md leading-relaxed text-slate-200">
                                {item.quote}
                            </p>

                            <div className="mt-8 border-t border-white/10 pt-6 flex items-center justify-between gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">
                                    {item.name.charAt(0)}
                                </div>

                                <div className="text-right">
                                    <p className="text-sm font-semibold text-white">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;