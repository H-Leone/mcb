import Header from "@/components/header";
import SobreNos from "../../public/sobre-nos-landing.jpeg";
import Image from "next/image";
import Button from "@/components/button";
import { Baby, Boxes, Building, CalendarPlus, Car, Footprints, Gavel, HandPlatter, Smartphone, Tractor, TrendingUp } from "lucide-react";
import Footer from "@/components/footer";

function HomePage() {
    const infos = [
        { title: "+ de 30", subtitle: "Anos de experiência", description: "Atuação consolidada no  fornecimento de tintas e revestimentos industriais para diferentes aplicações e níveis de exigência.", icon: <CalendarPlus size={45} /> },
        { title: "100+", subtitle: "Produtos no portifólio", description: "Portfólio completo de tintas, vernizes, primers, fundos, diluentes e soluções técnicas desenvolvidas para uso industrial.", icon: <TrendingUp size={45} /> },
        { title: "+ 10", subtitle: "Segmentos atendidos", description: "Soluções aplicadas em diferentes segmentos industriais, atendendo demandas específicas de cada processo produtivo.", icon: <Boxes size={45} /> },
    ];

    const segments = [
        { name: "Metal-Mecânico", icon: <Gavel size={60} /> },
        { name: "Automotivo", icon: <Car size={60} /> },
        { name: "Implementos Agrícolas", icon: <Tractor size={60} /> },
        { name: "Eletroeletrônicos", icon: <Smartphone size={60} /> },
        { name: "Moveleiro", icon: <HandPlatter size={60} /> },
        { name: "Calçadista", icon: <Footprints size={60} /> },
        { name: "Cosméticos", icon: <Baby size={60} /> },
        { name: "Imobiliário/Construção", icon: <Building size={60} /> },
    ];

    const testimonials = [
        {
            name: "Fernanda Lopes",
            role: "Gerente de Compras",
            company: "Indústria Plasteel",
            avatar: "/testimonials/fernanda.jpg",
            rating: 5,
            text: "Trabalhar com a Marcobi facilita muito nossa rotina. Além da qualidade dos produtos, o suporte técnico e o cumprimento de prazos fazem toda a diferença no relacionamento comercial."
        },
        {
            name: "Rafael Monteiro",
            role: "Coordenador de Desenvolvimento",
            company: "TecnoParts",
            avatar: "/testimonials/rafael.jpg",
            rating: 5,
            text: "Utilizamos soluções da Marcobi em diferentes aplicações industriais. A performance dos revestimentos e a flexibilidade técnica para atender necessidades específicas são pontos fortes da empresa."
        }
    ]

    return (
        <div className="h-[2000px] pt-32">
            <Header />

            <section className="flex justify-around w-11/12 mx-auto mt-12 mb-24 px-12">
                <div className="space-y-10">
                    <p className="text-4xl font-semibold">Sobre Nós</p>
                    <p className="text-xl w-3/4">Desenvolvemos soluções técnicas para diferentes aplicações e segmentos industriais, com foco em desempenho, qualidade e confiabilidade</p>

                    <Button redirect="/empresa">
                        Nossa história
                    </Button>
                </div>

                <Image
                    src={SobreNos}
                    alt="Sobre Nós Imagem"
                    width={400}
                    height={70}
                    className="rounded-xl"
                />
            </section>

            <section className="grid grid-cols-3 gap-6 mx-8 py-16">
                {infos.map((info) => (
                    <div key={info.title} className="space-y-4 text-center flex flex-col items-center">
                        <span className="text-green">
                            {info.icon}
                        </span>
                        <p className="text-green text-3xl font-semibold">{info.title}</p>
                        <p className="text-xl text-green">{info.subtitle}</p>
                        <p className="w-10/12 mx-auto mt-4">{info.description}</p>
                    </div>
                ))}
            </section>

            <section className="my-24 space-y-16">
                <p className="text-3xl font-medium text-center">Para cada necessidade, um produto diferente</p>

                <div className="flex justify-center items-center gap-6">
                    {[1, 2, 3].map(item => (
                        <div key={item} className="border w-48 h-72">
                            <p>Produto {item}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="relative overflow-hidden bg-slate-300 w-full mx-auto my-24 py-50">
                <svg
                    className="absolute top-0 left-0 w-full"
                    viewBox="0 0 1440 140"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#F9F8F6"
                        d="M0,90 C240,130 480,50 720,50 960,50 1200,130 1440,90 L1440,0 L0,0 Z"
                    />
                </svg>

                <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#F9F8F6"
                        d="M0,110 
                            C180,140 360,80 540,95 
                            C720,110 900,150 1080,120 
                            C1260,95 1350,70 1440,85 
                            L1440,160 
                            L0,160 Z"
                    />
                </svg>

                <div className="relative z-10 px-20 space-y-10">
                    <p className="w-3/4 text-lg text-center mx-auto">
                        Atendemos as principais empresas que concentram 47,8% do mercado brasileiro de cosméticos, com um faturamento de cerca de R$34,7 bilhões ao ano.
                    </p>

                    <ul className="grid grid-cols-3 gap-6">
                        {[1, 2, 3].map(item => (
                            <div
                                key={item}
                                className="bg-white rounded-xl h-72 flex items-center justify-center shadow-sm"
                            >
                                Parceiro {item}
                            </div>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="px-16 space-y-8">
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

            <section className="px-12 py-32">
                <p className="text-3xl font-semibold text-center">
                    O que os clientes dizem
                </p>

                <p className="w-xl text-center mx-auto mt-4 mb-12">
                    A confiança de empresas que utilizam as soluções Marcobi em seus processos produtivos.
                </p>

                <ul className="w-4/5 mx-auto grid grid-cols-2 gap-8">
                    {testimonials.map((t, index) => (
                        <li
                            key={index}
                            className="bg-blue/20 rounded-2xl p-8 space-y-6"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={t.avatar}
                                        alt={t.name}
                                        width={56}
                                        height={56}
                                        className="rounded-full object-cover"
                                    />

                                    <div>
                                        <p className="font-semibold text-blue-900">
                                            {t.name}
                                        </p>

                                        <div className="flex items-center gap-1 text-orange-400">
                                            {"★".repeat(t.rating)}
                                        </div>

                                        <p className="text-sm text-gray-500">
                                            {t.role} • {t.company}
                                        </p>
                                    </div>
                                </div>

                                <span className="text-4xl font-bold text-blue-500">
                                    G
                                </span>
                            </div>

                            <div className="border-t pt-6 text-gray-700 leading-relaxed">
                                {t.text}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <Footer />
        </div>
    );
}

export default HomePage;