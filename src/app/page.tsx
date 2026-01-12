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
                <p className="text-3xl font-medium text-center">Para cada momento, um Nubank diferente</p>

                <div className="flex justify-center items-center gap-6">
                    {[1, 2, 3].map(item => (
                        <div key={item} className="border w-48 h-72">
                            <p>Produto {item}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-slate-300 w-full mx-auto my-24 p-20 space-y-10">
                <p className="w-3/4 text-lg text-center mx-auto">Atendemos as principais empresas que concentram 47,8% do mercado brasileiro de cosméticos, com um faturamento de cerca de R$34,7 bilhões ao ano.</p>

                <ul className="grid grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="border h-72">
                            Parceiro {item}
                        </div>
                    ))}
                </ul>
            </section>

            <section className="px-16 space-y-8">
                <p className="text-3xl font-semibold text-center">Segmentos Atendidos</p>

                <p className="w-xl text-center mx-auto mb-12">Soluções aplicadas a diferentes segmentos industriais,
                    respeitando as exigências técnicas de cada processo produtivo.</p>

                <div className="grid grid-cols-4 gap-6">
                    {segments.map(segment => (
                        <div key={segment.name} className="flex flex-col items-center bg-blue/40 text-center p-8 rounded-xl space-y-8">
                            {segment.icon}
                            <p className="text-xl font-medium">{segment.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-12 py-20">
                <p className="text-3xl font-semibold text-center">O que os clientes dizem</p>

                <p className="w-xl text-center mx-auto mt-4 mb-12">A confiança de empresas que utilizam as soluções Marcobi em seus processos produtivos.</p>

                <ul className="w-2/3 mx-auto grid grid-cols-2 gap-6">
                    {[1,2].map(diniz => (
                        <div key={diniz} className="border">
                            Pessoa {diniz}
                        </div>
                    ))}
                </ul>
            </section>

            <Footer />
        </div>
    );
}

export default HomePage;