import Image from "next/image";
import SobreNos from "../../public/sobre-nos-landing.jpeg";

export default function PartnersSection() {
    const partners = [1, 2, 3, 4, 5, 6];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((item) => (
                <div key={item} className="h-20 flex items-center justify-center bg-white rounded-lg p-2 shadow-sm border border-blue-100 opacity-60 hover:opacity-100 transition-opacity">
                    <div className="relative w-full h-full rounded overflow-hidden">
                        <Image 
                            src={SobreNos} 
                            alt={`Parceiro ${item}`} 
                            fill 
                            className="object-cover grayscale hover:grayscale-0 transition-all" 
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}