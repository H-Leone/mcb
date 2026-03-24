"use client";

import React, { useState } from "react";
import {
    MapPin,
    Send,
    Beaker,
    HardHat,
    Truck,
    Clock,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import Link from "next/link";

const CONTACT_CHANNELS = [
    {
        title: "Suporte Técnico",
        desc: "Dúvidas sobre aplicação, solventes e diluição.",
        action: "Falar com Químico",
        icon: <Beaker className="text-emerald-500" size={24} />,
        link: "https://wa.me/5511995427107?text=Olá! Preciso de suporte técnico."
    },
    {
        title: "Vendas e Orçamentos",
        desc: "Cotações para grandes volumes e parcerias.",
        action: "Solicitar Cotação",
        icon: <Truck className="text-blue-500" size={24} />,
        link: "https://wa.me/5511995427107?text=Olá! Gostaria de um orçamento."
    },
    {
        title: "Especificação de Projetos",
        desc: "Desenvolvimento de cores e sistemas exclusivos.",
        action: "Agendar Reunião",
        icon: <HardHat className="text-amber-500" size={24} />,
        link: "https://wa.me/5511995427107?text=Olá! Quero agendar uma reunião técnica."
    }
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Substitua pela sua chave do Web3Forms (grátis em web3forms.com)
    const ACCESS_KEY = "bd924917-a884-4aa3-8e6a-08dce91cb0e1";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert("Erro ao enviar. Tente novamente ou use o WhatsApp.");
            }
        } catch (error) {
            alert("Erro de conexão.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="w-full bg-white text-slate-900 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative w-full pt-32 md:pt-48 pb-20 md:pb-28 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
                        Vamos colorir seu <br />
                        <span className="text-emerald-400">próximo desafio.</span>
                    </h1>
                    <p className="text-slate-400 max-w-xl text-sm md:text-lg font-light mx-auto md:mx-0">
                        Seja para uma linha de produção industrial ou um projeto arquitetônico complexo,
                        nossa engenharia química está à sua disposição em Santana de Parnaíba.
                    </p>
                </div>
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:32px_32px]"></div>
            </section>

            {/* Main Content Section */}
            <section className="container mx-auto px-4 sm:px-6 relative z-20 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    
                    {/* Sidebar: Canais e Horários */}
                    <div className="lg:col-span-1 space-y-4">
                        {CONTACT_CHANNELS.map((channel, i) => (
                            <div key={i} className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-50 rounded-xl shrink-0">{channel.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{channel.title}</h3>
                                        <p className="text-sm text-slate-500 mb-4">{channel.desc}</p>
                                        <a href={channel.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-700 flex items-center gap-2">
                                            {channel.action} <Send size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="p-6 md:p-8 bg-emerald-50 rounded-3xl border border-emerald-100 mt-6 md:mt-8">
                            <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                                <Clock size={18} /> Horário de Operação
                            </h4>
                            <p className="text-sm text-emerald-700 leading-relaxed">
                                Segunda a Quinta: 07:30 às 17:30<br />
                                Sexta-feira: 07:30 às 16:30<br />
                                <span className="block mt-2 font-semibold">Plantão Técnico via WhatsApp</span>
                            </p>
                        </div>
                    </div>

                    {/* Form Container */}
                    <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden self-start">
                        {submitted ? (
                            /* --- ANIMAÇÃO DE SUCESSO --- */
                            <div className="p-12 md:p-24 text-center flex flex-col items-center justify-center space-y-6 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                                    <CheckCircle2 size={40} className="animate-bounce" />
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Mensagem Enviada!</h2>
                                    <p className="text-slate-500 max-w-sm mx-auto">
                                        Sua solicitação foi entregue ao nosso laboratório. Em breve entraremos em contato.
                                    </p>
                                </div>
                                <button 
                                    onClick={() => setSubmitted(false)}
                                    className="text-emerald-600 font-bold text-xs uppercase tracking-widest hover:underline pt-4"
                                >
                                    Enviar outra mensagem
                                </button>
                            </div>
                        ) : (
                            /* --- SEU DESIGN ORIGINAL DO FORMULÁRIO --- */
                            <>
                                <div className="bg-slate-50 p-5 sm:p-6 md:p-8 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 text-center md:text-left">
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-slate-900">Diagnóstico Rápido</h2>
                                        <p className="text-slate-500 text-sm">Preencha e enviaremos o técnico ideal para sua necessidade.</p>
                                    </div>
                                    <div className="flex -space-x-2 justify-center md:justify-end">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Técnico" />
                                            </div>
                                        ))}
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                                            +8
                                        </div>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="p-5 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                    {/* Web3Forms Hidden Fields */}
                                    <input type="hidden" name="access_key" value={ACCESS_KEY} />
                                    <input type="hidden" name="from_name" value="Portal Marcobi" />
                                    <input type="hidden" name="subject" value="Novo Lead: Diagnóstico Técnico" />
                                    
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Nome Completo</label>
                                        <input required name="name" type="text" placeholder="Ex: João Marcobi" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">E-mail Corporativo</label>
                                        <input required name="email" type="email" placeholder="joao@empresa.com.br" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" />
                                    </div>

                                    <div className="md:col-span-2 space-y-4">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Qual o seu desafio hoje?</label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            {["Pintura Industrial", "Arquitetura", "Revenda", "Manutenção"].map((opt) => (
                                                <label key={opt} className="cursor-pointer group">
                                                    <input type="radio" name="desafio" value={opt} className="peer sr-only" defaultChecked={opt === "Pintura Industrial"} />
                                                    <div className="px-3 py-3 rounded-lg border border-slate-200 text-xs font-medium text-center peer-checked:bg-emerald-50 peer-checked:border-emerald-500 peer-checked:text-emerald-700 hover:bg-slate-50 transition-colors">
                                                        {opt}
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Conte-nos sobre o substrato ou superfície</label>
                                        <textarea required name="message" rows={4} placeholder="Ex: Preciso de uma tinta para aço galvanizado..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none"></textarea>
                                    </div>

                                    <div className="md:col-span-2">
                                        <button 
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 shadow-lg disabled:opacity-50"
                                        >
                                            {isSubmitting ? "Processando..." : "Enviar para Análise Técnica"} <Send size={18} />
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Localização Section */}
            <section className="py-16 md:py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                        <div className="md:w-1/2 space-y-6 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-mono mx-auto md:mx-0">
                                <MapPin size={14} className="text-emerald-500" /> Fábrica & Showroom
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold">Onde a química acontece.</h2>
                            <p className="text-slate-600">
                                Visite nossa unidade fabril em Santana de Parnaíba para ver amostras aplicadas e testar texturas em tempo real.
                            </p>
                            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm inline-block text-left">
                                <p className="text-slate-900 font-bold">Rua Santa Catarina, nº 1</p>
                                <p className="text-slate-500 text-sm">Jardim da Várzea</p>
                                <p className="text-slate-500 text-sm font-semibold">Santana de Parnaíba – SP</p>
                            </div>
                        </div>

                        {/* Mapa Atualizado para Santana de Parnaíba */}
                        <div className="md:w-1/2 w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.70425785072!2d-46.9056346246736!3d-23.435056778887413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf026fdaa94a37%3A0x116e1e3343fd52e3!2sR.%20Santa%20Catarina%2C%201%20-%20Jardim%20da%20V%C3%A1rzea%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006530-070!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}