import { Baby, Building, Car, Footprints, Gavel, HandPlatter, Smartphone, Tractor } from "lucide-react";

function SegmentsSection() {
    const segments = [
        { name: "Metal-Mecânico", icon: <Gavel size={40} className="md:w-12 md:h-12" /> },
        { name: "Automotivo", icon: <Car size={40} className="md:w-12 md:h-12" /> },
        { name: "Agrícola", icon: <Tractor size={40} className="md:w-12 md:h-12" /> },
        { name: "Eletrônicos", icon: <Smartphone size={40} className="md:w-12 md:h-12" /> },
        { name: "Moveleiro", icon: <HandPlatter size={40} className="md:w-12 md:h-12" /> },
        { name: "Calçadista", icon: <Footprints size={40} className="md:w-12 md:h-12" /> },
        { name: "Cosméticos", icon: <Baby size={40} className="md:w-12 md:h-12" /> },
        { name: "Construção", icon: <Building size={40} className="md:w-12 md:h-12" /> },
    ];

    return (
        <section className="px-4 sm:px-6 md:px-16 space-y-6 md:space-y-8 pt-14 pb-24 md:pb-36">
            <p className="text-2xl md:text-3xl font-semibold text-center">Segmentos Atendidos</p>

            <p className="max-w-xl text-sm md:text-base text-center mx-auto mb-10 md:mb-12">
                Soluções aplicadas a diferentes segmentos industriais, respeitando as exigências técnicas de cada processo produtivo.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {segments.map((segment, index) => {
                    const col = index % 4
                    const row = Math.floor(index / 4)
                    const isDark = (row + col) % 2 === 0

                    return (
                        <div
                            key={segment.name}
                            className={`flex flex-col items-center justify-center text-center p-5 sm:p-6 md:p-8 rounded-xl space-y-4 md:space-y-8 min-h-[150px] md:min-h-0 ${
                                isDark ? "bg-blue/40" : "bg-blue/20"
                            }`}
                        >
                            {segment.icon}
                            <p className="text-base md:text-xl font-medium">{segment.name}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default SegmentsSection;