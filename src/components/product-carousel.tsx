import Image from "next/image";
import { PaintBucket, ShieldCheck, SprayCan, ArrowRight } from "lucide-react";
import SobreNos from "../../public/sobre-nos-landing.jpeg";

export default function ProductCarousel() {
    const originalProducts = [
        { id: 1, name: "Esmaltes Sintéticos", desc: "Secagem rápida e alto brilho para acabamento premium.", icon: <PaintBucket className="w-6 h-6 text-white"/>, color: "bg-blue-600" },
        { id: 2, name: "Vernizes PU", desc: "Alta resistência química e proteção UV duradoura.", icon: <SprayCan className="w-6 h-6 text-white"/>, color: "bg-indigo-600" },
        { id: 3, name: "Primers Epóxi", desc: "Aderência superior e proteção anticorrosiva.", icon: <ShieldCheck className="w-6 h-6 text-white"/>, color: "bg-slate-700" },
    ];

    const products = [...originalProducts, ...originalProducts, ...originalProducts, ...originalProducts];

    return (
        <div className="w-full overflow-hidden py-10 relative group">
            
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max animate-scroll group-hover:pause gap-8 pl-8">
                {products.map((prod, index) => (
                    <div 
                        key={`${prod.id}-${index}`} 
                        className="relative w-[350px] h-[450px] bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                    >
                        <div className="h-3/5 relative">
                             <Image 
                                src={SobreNos}
                                alt={prod.name}
                                fill
                                className="object-cover"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                             
                             <div className={`absolute top-4 right-4 ${prod.color} p-3 rounded-xl shadow-lg`}>
                                {prod.icon}
                             </div>

                             <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-xs font-bold uppercase tracking-wider opacity-80">Linha Industrial</p>
                                <h3 className="text-2xl font-bold">{prod.name}</h3>
                             </div>
                        </div>
                        
                        <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                            <p className="text-slate-600 leading-relaxed">
                                {prod.desc}
                            </p>
                            
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                                <span className="text-xs font-semibold text-slate-400">Disponível em 18L e 200L</span>
                                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}