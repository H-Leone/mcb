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

    if (!product) return <div className="min-h-screen bg-slate-100 flex items-center justify-center font-bold">Produto não encontrado</div>;

    const category = categories.find(c => c.tag === product.tag);

    return (
        <main className="bg-slate-100 pt-24 md:pt-40 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                
                {/* Back Navigation */}
                <Link href="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                    <ChevronLeft size={16} /> Voltar ao Catálogo
                </Link>

                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 md:mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        
                        {/* Imagem do Produto (Fundo Acetinado) */}
                        <div className="p-8 md:p-16 bg-slate-50 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100 relative">
                            <div className="absolute top-8 left-8">
                                <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                    <Palette size={12} /> {category?.name}
                                </span>
                            </div>
                            <div className="relative w-full max-w-[320px] md:max-w-[450px] aspect-square transition-transform duration-700 hover:scale-105">
                                <Image src={product.image} alt={product.name} fill className="object-contain p-4" />
                            </div>
                        </div>

                        {/* Informações Principais */}
                        <div className="p-8 md:p-16 flex flex-col justify-center space-y-8 md:space-y-12">
                            <div className="space-y-4">
                                <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">SKU: {product.id}</p>
                                <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.95]">
                                    {product.name}
                                </h1>
                            </div>

                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light italic border-l-4 border-blue-600 pl-6 py-2">
                                {product.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link 
                                href={`https://wa.me/5511995427107?text=Olá! Gostaria de solicitar uma cotação para o produto: ${product.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-fit"
                            >
                                <Button className="w-full px-12 py-5 shadow-xl shadow-blue-200 text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-95">
                                    Falar com especialista
                                </Button>
                            </Link>
                                <Button variant="transparent" className="w-full sm:w-fit px-10 py-5 border-slate-200 text-sm font-bold flex items-center justify-center gap-2">
                                    <FileText size={18} /> TDS / Ficha Técnica
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Especificações Técnicas (Contrastes Industrial) */}
                    <div className="flex flex-col md:grid md:grid-cols-2 border-t border-slate-100">
                        
                        {/* Características (Lado Cinza Suave) */}
                        <div className="p-8 md:p-12 space-y-8 bg-slate-50 md:border-r border-slate-100">
                            <h2 className="flex items-center gap-3 text-xl font-black text-slate-800 uppercase tracking-tight text-sm">
                                <ShieldCheck className="text-blue-600" />
                                Especificações de Performance
                            </h2>
                            <ul className="grid grid-cols-1 gap-3">
                                {product.details.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm text-slate-700 text-sm font-semibold hover:border-blue-200 transition-colors">
                                        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Aplicações (Lado Escuro) */}
                        <div className="p-8 md:p-12 space-y-8 bg-slate-950 text-white">
                            <h2 className="flex items-center gap-3 text-xl font-black text-white uppercase tracking-tight text-sm">
                                <Factory className="text-blue-400" />
                                Aplicações Recomendadas
                            </h2>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {product.applications.map((item, index) => (
                                    <span key={index} className="px-5 py-3 bg-white/5 rounded-xl text-xs font-bold border border-white/10 uppercase tracking-widest hover:bg-white/10 transition-all cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-8 p-6 bg-slate-900 rounded-2xl border border-slate-800/50 flex items-start gap-4">
                                <Info size={24} className="text-blue-400 shrink-0" />
                                <p className="text-[11px] text-slate-400 italic leading-relaxed">
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