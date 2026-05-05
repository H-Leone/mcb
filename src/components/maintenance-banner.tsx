"use client";

import { useState } from "react";
import { Wrench } from "lucide-react";

export default function MaintenanceBanner() {
    const [open, setOpen] = useState(true);

    return (
        <div className="fixed top-1/2 -translate-y-1/2 right-0 z-50">
            
            <div
                onClick={() => setOpen(!open)}
                className={`cursor-pointer transition-all duration-300 shadow-2xl flex items-center ${
                    open ? "w-64" : "w-12"
                }`}
            >
                {/* Ícone sempre visível */}
                <div className="bg-amber-600 text-white w-12 h-12 flex items-center justify-center rounded-l-xl">
                    <Wrench size={18} />
                </div>

                {/* Conteúdo */}
                <div
                    className={`bg-amber-500 text-white overflow-hidden transition-all duration-300 ${
                        open ? "w-52 p-4 opacity-100" : "w-0 p-0 opacity-0"
                    }`}
                >
                    <p className="text-xs font-bold mb-1">
                        Em manutenção
                    </p>

                    <p className="text-[11px] leading-relaxed">
                        Estamos realizando melhorias no site. Algumas funcionalidades podem não funcionar corretamente.
                    </p>
                </div>
            </div>
        </div>
    );
}