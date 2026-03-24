import Image from "next/image";
import { CheckCircle2, MoveRight } from "lucide-react";
import SobreNos from "../../public/sobre-nos-landing.jpeg";
import Button from "./button";

export default function HeroSection() {
    return (
        <section className="pt-32 md:pt-44 pb-24 md:pb-40 relative w-full flex items-center bg-slate-900 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src={SobreNos}
                    alt="Background Industrial"
                    fill
                    priority
                    className="object-cover object-center opacity-30 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40 z-10"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-20">
                <div className="max-w-3xl space-y-6 md:space-y-8 text-center md:text-left mx-auto md:mx-0">
                    <div className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-blue-300 text-[11px] sm:text-xs font-medium animate-fade-in-up max-w-full mx-auto md:mx-0">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0"></span>
                        <span className="truncate sm:whitespace-normal">
                            Nova linha de Vernizes PU High-Gloss
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white tracking-tight">
                        A proteção que sua <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            produção exige.
                        </span>
                    </h1>

                    <p className="text-sm sm:text-md text-slate-300 leading-relaxed max-w-xl font-light mx-auto md:mx-0">
                        Soluções químicas avançadas para indústrias que não podem parar. Durabilidade extrema e suporte técnico especializado.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 md:pt-4 w-full sm:w-auto justify-center md:justify-start">
                        <Button className="w-fit mx-auto md:mx-0">
                            <p className="mx-auto">Falar com especialista</p>
                        </Button>
                        <Button variant="secondary" className="w-fit mx-auto md:mx-0">
                            Ver Catálogo
                            <MoveRight size={15} />
                        </Button>
                    </div>

                    <div className="pt-6 md:pt-8 flex flex-col sm:flex-row sm:flex-wrap items-center md:items-center justify-center md:justify-start gap-3 sm:gap-6 text-xs text-slate-400 font-medium text-center md:text-left">
                        <div className="flex items-center justify-center gap-2">
                            <CheckCircle2 className="text-emerald-500 shrink-0" size={15} />
                            <span>Entrega em 24h</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <CheckCircle2 className="text-emerald-500 shrink-0" size={15} />
                            <span>ISO 9001</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <CheckCircle2 className="text-emerald-500 shrink-0" size={15} />
                            <span>Laudo Técnico</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}