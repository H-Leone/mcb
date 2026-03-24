import SegmentsSection from "@/components/segments-section";
import Button from "@/components/button";
import { products, categories } from "@/helpers";
import { CheckCircle2, ChevronLeft, Factory, Info, ShieldCheck, Palette, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductPageProps {
    params: Promise<{ id: string; }>;
}

async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen bg-slate-100 flex items-center justify-center font-bold">
                Produto não encontrado
            </div>
        );
    }

    const category = categories.find(c => c.tag === product.tag);

    return (
        <main className="pt-24 md:pt-40 pb-12 md:pb-16 bg-slate-100 overflow-x-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-[10px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8 mt-6"
                >
                    <ChevronLeft size={16} />
                    Voltar ao Catálogo
                </Link>

                <div className="mb-12 md:mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white">
                        <div className="relative p-5 sm:p-8 md:p-14 lg:p-16 flex items-center justify-center min-h-[320px] sm:min-h-[420px] bg-gradient-to-br from-slate-50 via-white to-slate-100">
                            <div className="absolute top-5 left-5 md:top-8 md:left-8 max-w-[calc(100%-40px)]">
                                <span className="px-3 py-1.5 bg-blue text-white rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 w-fit shadow-sm">
                                    <Palette size={12} />
                                    {category?.name}
                                </span>
                            </div>

                            <div className="relative w-full max-w-[220px] sm:max-w-[300px] md:max-w-[430px] aspect-square transition-transform duration-500 hover:scale-[1.03]">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-2 md:p-4"
                                />
                            </div>
                        </div>

                        <div className="p-6 sm:p-8 md:p-14 lg:p-16 flex flex-col justify-center space-y-6 md:space-y-10 text-center lg:text-left">
                            <div className="space-y-3 md:space-y-4">
                                <p className="text-slate-400 font-mono text-[10px] md:text-xs uppercase tracking-widest">
                                    SKU: {product.id}
                                </p>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[0.95]">
                                    {product.name}
                                </h1>
                            </div>

                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed font-light italic max-w-2xl mx-auto lg:mx-0  border-l-0 lg:border-l-4 border-blue-600 pl-4">
                                {product.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <Button className="w-full sm:w-fit px-6 md:px-8 py-3 text-sm tracking-widest">
                                    Solicitar Cotação
                                </Button>

                                <Button
                                    variant="transparent"
                                    className="w-full sm:w-fit px-6 md:px-8 py-3 border-slate-200 text-sm font-bold flex items-center justify-center gap-2"
                                >
                                    <FileText size={18} />
                                    TDS / Ficha Técnica
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-200">
                        <div className="p-5 sm:p-6 md:p-10 lg:p-12 space-y-6 md:space-y-8 bg-slate-50 md:border-r border-slate-200">
                            <h2 className="flex items-center justify-center md:justify-start gap-3 font-black text-slate-800 uppercase tracking-tight text-sm text-center md:text-left">
                                <ShieldCheck className="text-blue-600" />
                                Especificações de Performance
                            </h2>

                            <ul className="grid grid-cols-1 gap-3">
                                {product.details.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-4 p-4 md:p-5 rounded-2xl border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:border-blue-200 transition-colors"
                                    >
                                        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-5 sm:p-6 md:p-10 lg:p-12 bg-slate-950 text-white flex flex-col gap-6 md:gap-8">
                            <h2 className="flex items-center justify-center md:justify-start gap-3 font-black text-white uppercase tracking-tight text-sm text-center md:text-left">
                                <Factory className="text-blue-400" />
                                Aplicações Recomendadas
                            </h2>

                            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
                                {product.applications.map((item, index) => (
                                    <span
                                        key={index}
                                        className="px-4 md:px-5 py-3 bg-white/5 rounded-xl text-[10px] md:text-xs font-bold border border-white/10 uppercase tracking-widest hover:bg-white/10 transition-all cursor-default text-center"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-2 md:mt-auto p-4 md:p-5 bg-white/5 rounded-2xl border border-white/10 flex items-start gap-3 md:gap-4">
                                <Info size={18} className="text-blue-400 shrink-0 mt-0.5" />
                                <p className="text-[11px] md:text-xs text-slate-300 leading-relaxed">
                                    Consulte nosso departamento técnico para validação de processos e substratos específicos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SegmentsSection />
        </main>
    );
}

export default ProductPage;