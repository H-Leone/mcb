import { Baby, Boxes, Building, CalendarPlus, Car, Footprints, Gavel, HandPlatter, Quote, Smartphone, Tractor, TrendingUp } from "lucide-react";

function SegmentsSection() {
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

    return (
        <section className="px-16 space-y-8 pt-14 pb-36">
            <p className="text-3xl font-semibold text-center">Segmentos Atendidos</p>

            <p className="w-xl text-center mx-auto mb-12">Soluções aplicadas a diferentes segmentos industriais,
                respeitando as exigências técnicas de cada processo produtivo.</p>

            <div className="grid grid-cols-4 gap-6">
                {segments.map((segment, index) => {
                    const col = index % 4
                    const row = Math.floor(index / 4)
                    const isDark = (row + col) % 2 === 0

                    return (
                        <div
                            key={segment.name}
                            className={`flex flex-col items-center text-center p-8 rounded-xl space-y-8 ${isDark ? "bg-blue/40" : "bg-blue/20"
                                }`}
                        >
                            {segment.icon}
                            <p className="text-xl font-medium">{segment.name}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default SegmentsSection;