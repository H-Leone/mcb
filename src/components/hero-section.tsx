import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MoveRight } from "lucide-react";
import SobreNos from "../../public/sobre-nos-landing.jpeg";
import Button from "./button";

export default function HeroSection() {
    return (
        <section className="pt-44 pb-24 relative w-full flex items-center bg-slate-900 overflow-hidden">

            <div className="absolute inset-0 z-0">
                <Image
                    src={SobreNos}
                    alt="Background Industrial"
                    fill
                    priority
                    className="object-cover opacity-30 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40 z-10"></div>
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-3xl space-y-8">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-blue-300 text-xs font-medium animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Nova linha de Vernizes PU High-Gloss
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white tracking-tight">
                        A proteção que sua <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            produção exige.
                        </span>
                    </h1>

                    <p className="text-md text-slate-300 leading-relaxed max-w-xl font-light">
                        Soluções químicas avançadas para indústrias que não podem parar. Durabilidade extrema e suporte técnico especializado.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button>
                            Falar com especialista
                        </Button>
                        <Button variant="secondary">
                            Ver Catálogo
                            <MoveRight size={15} />
                        </Button>
                    </div>

                    <div className="pt-8 flex items-center gap-6 text-xs text-slate-400 font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-emerald-500" size={15} /> Entrega em 24h
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-emerald-500" size={15} /> ISO 9001
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-emerald-500" size={15} /> Laudo Técnico
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}