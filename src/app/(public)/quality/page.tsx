import React from 'react';
import Button from "@/components/button";
import {
    Microscope, ShieldCheck, ClipboardCheck,
    FlaskConical, Activity, Factory, Fingerprint,
    Zap, Beaker
} from "lucide-react";

const QUALITY_STATS = [
    { value: "0.01%", label: "Desvio de Refugo", detail: "Média Global" },
    { value: "ΔE < 0.5", label: "Precisão de Cor", detail: "Delta E Control" },
    { value: "ISO 9001", label: "Gestão", detail: "Certificada" },
    { value: "100%", label: "Rastreabilidade", detail: "Por Lote" },
];

const PROCESS_STEPS = [
    {
        id: "IQC",
        title: "DNA de Matéria-Prima",
        desc: "Nenhuma substância entra sem o 'visto' do espectrômetro. Analisamos a pureza molecular para evitar contaminação em cascata.",
        icon: <Fingerprint size={28} className="text-emerald-500" />,
        metric: "99.9% Pureza"
    },
    {
        id: "HGM",
        title: "Moagem Nano-Controlada",
        desc: "A granulometria Hegman é monitorada via laser. Isso garante que a tinta flua sem entupir bicos e com cobertura total na primeira demão.",
        icon: <Factory size={28} className="text-emerald-500" />,
        metric: "< 5 Microns"
    },
    {
        id: "LAB",
        title: "Ajuste de Cor Digital",
        desc: "A cor que você aprova no tablet é a cor que sai da lata. Nosso Delta E é imperceptível ao olho humano, garantindo padronização total.",
        icon: <Microscope size={28} className="text-emerald-500" />,
        metric: "ΔE < 0.5"
    },
    {
        id: "OQC",
        title: "Certificação de Saída",
        desc: "Cada lote gera um QR Code único. Se você tiver um problema daqui a 2 anos, sabemos exatamente qual químico fez a mistura.",
        icon: <ClipboardCheck size={28} className="text-emerald-500" />,
        metric: "Laudo Automático"
    },
];

function QualityPageImproved() {
    return (
        <main className="w-full overflow-x-hidden text-slate-800 bg-white">
            <section className="relative w-full pt-32 md:pt-48 pb-20 md:pb-32 flex flex-col items-center justify-center text-center bg-white">
                <div className="container mx-auto px-4 sm:px-6 z-10">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-700 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] mb-6 md:mb-8 max-w-full">
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="truncate sm:whitespace-normal">Standard de Qualidade Marcobi</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-6 md:mb-8 max-w-5xl mx-auto leading-tight">
                        Onde a química encontra <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
                            a precisão absoluta.
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed mb-8 md:mb-12 px-2 sm:px-0">
                        Não fabricamos apenas pigmentos. Projetamos superfícies resilientes através de rigor estatístico e controle molecular.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-slate-400 sm:border-r sm:pr-4 border-slate-200">
                            <Activity size={14} /> LIVE LAB DATA
                        </div>
                        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-slate-400">
                            <ShieldCheck size={14} /> MIL-SPEC COMPLIANT
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:28px_28px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>
            </section>

            <section className="w-full bg-slate-900 py-10 md:py-12">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {QUALITY_STATS.map((stat, i) => (
                            <div key={i} className="relative group text-center md:text-left">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-mono tracking-tight mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-[9px] sm:text-[10px] text-emerald-400 uppercase tracking-widest font-bold">
                                    {stat.label}
                                </div>
                                <div className="text-[9px] text-slate-500 uppercase mt-2">
                                    {stat.detail}
                                </div>
                                <div className="hidden md:block absolute -left-4 top-0 h-full w-[1px] bg-slate-800 group-hover:bg-emerald-500 transition-colors"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mb-12 md:mb-24 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                            O Ciclo de Tolerância Zero
                        </h2>
                        <p className="text-slate-500 mt-4 text-base md:text-lg">
                            Nossa linha de produção é um laboratório em escala industrial.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                        {PROCESS_STEPS.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white border border-slate-200 p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl hover:border-emerald-500 transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-5 md:p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                    {step.icon}
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-emerald-400 flex items-center justify-center font-mono font-bold mx-auto sm:mx-0">
                                        {step.id}
                                    </div>
                                    <div className="hidden sm:block h-px flex-1 bg-slate-100"></div>
                                    <span className="text-[10px] font-mono font-bold text-slate-400 px-3 py-1 bg-slate-50 rounded-full border border-slate-100 w-fit mx-auto sm:mx-0">
                                        {step.metric}
                                    </span>
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 text-center sm:text-left">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm md:text-base text-center sm:text-left">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 md:p-16 relative overflow-hidden shadow-2xl">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                            <div className="max-w-xl text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-3 text-emerald-400 mb-5 md:mb-6">
                                    <Beaker size={24} />
                                    <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">
                                        Acesso ao Laboratório
                                    </span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                                    Precisa de um ensaio técnico específico para seu projeto?
                                </h2>

                                <p className="text-slate-400 text-base md:text-lg mb-6 md:mb-8">
                                    Disponibilizamos nossa estrutura de Salt Spray e UV para parceiros e projetos especiais.
                                </p>

                                <Button className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-8 md:px-10 py-4 w-full sm:w-auto">
                                    <p className="mx-auto">Solicitar Laudo Técnico</p>
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full md:w-auto md:min-w-[320px]">
                                {[
                                    { icon: <Zap size={20} />, text: "Aderência" },
                                    { icon: <Activity size={20} />, text: "Elasticidade" },
                                    { icon: <ShieldCheck size={20} />, text: "Anticorrosão" },
                                    { icon: <FlaskConical size={20} />, text: "Químicos" },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-5 md:p-6 rounded-2xl flex flex-col items-center justify-center text-white gap-3 min-h-[110px]"
                                    >
                                        <div className="text-emerald-400">{item.icon}</div>
                                        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-tight text-center">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/10 blur-[100px] rounded-full"></div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default QualityPageImproved;