"use client"; // Transformar em Client Component

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Suspense } from "react"; // Necessário para usar useSearchParams com static export
import { categories, products } from "@/helpers";
import { CircleQuestionMark, MoveRight, Search, Filter, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";
import Input from "@/components/input";

// Componente Interno para isolar o uso de SearchParams
function ProductsContent() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const category = searchParams.get("category") || "";
    const page = searchParams.get("page") || "1";
    const q = searchParams.get("q") || "";

    const pageSize = 6;
    const currentPage = Number(page);
    const search = q.toLowerCase();

    const filteredProducts = products.filter(p => {
        const matchCategory = category ? p.tag === category : true;
        const matchSearch = search ? p.name.toLowerCase().includes(search) : true;
        return matchCategory && matchSearch;
    });

    const totalPages = Math.ceil(filteredProducts.length / pageSize);
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    // Funções de filtro agora são puramente client-side
    function handleFilter(categoryTag: string | null) {
        const params = new URLSearchParams(searchParams);
        if (categoryTag) params.set("category", categoryTag);
        else params.delete("category");
        params.set("page", "1"); // Resetar página ao filtrar
        replace(`${pathname}?${params.toString()}`);
    }

    function handleSearch(value: string) {
        const params = new URLSearchParams(searchParams);
        if (value) params.set("q", value);
        else params.delete("q");
        params.set("page", "1");
        replace(`${pathname}?${params.toString()}`);
    }

    const buildPageHref = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", String(pageNumber));
        return `${pathname}?${params.toString()}`;
    };

    return (
        <main className="min-h-screen bg-slate-100 pt-24 md:pt-40 pb-16 md:pb-20 overflow-x-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header do Catálogo */}
                <div className="mb-8 mt-6 md:mt-0 md:mb-12 w-[calc(100%-35px)] md:w-full mx-auto p-5 sm:p-6 md:p-10 bg-slate-900 rounded-2xl md:rounded-3xl text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <div className="space-y-2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter uppercase">Catálogo</h1>
                        <p className="text-slate-400 text-sm md:text-lg font-light">Alta performance em revestimentos industriais.</p>
                    </div>
                    <Palette size={40} className="text-blue-500 opacity-50 hidden md:block" />
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 md:gap-8">
                    {/* Sidebar de Filtros */}
                    <aside className="lg:col-span-1 space-y-6">
                        <div className="bg-slate-50 rounded-2xl p-4 shadow-xl border border-slate-200/60">
                            <div className="flex items-center gap-2 mb-6 text-slate-800 font-bold uppercase text-[10px] tracking-widest">
                                <Filter size={14} className="text-blue-600" /> Filtros
                            </div>
                            
                            <div className="space-y-6">
                                <div className="relative">
                                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <Input 
                                        initialValue={q} 
                                        onChange={(e) => handleSearch(String(e.value))} 
                                        placeholder="Buscar produto..."
                                        className="pl-10"
                                    />
                                </div>
                                <hr />
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase mb-4">Linhas de Atuação</p>
                                    <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
                                        {categories.map(c => (
                                            <button
                                                key={c.tag}
                                                onClick={() => handleFilter(c.tag)}
                                                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap lg:text-left ${category === c.tag ? "bg-blue-600 text-white" : "bg-white text-slate-600 border"}`}
                                            >
                                                {c.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Listagem de Produtos */}
                    <div className="lg:col-span-3">
                        {paginatedProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {paginatedProducts.map(p => (
                                    <Link key={p.id} href={`/products/${p.id}`} className="group bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:shadow-2xl transition-all flex flex-col">
                                        <div className="relative aspect-square w-full rounded-xl bg-slate-100 flex items-center justify-center p-6 mb-4">
                                            <Image src={p.image} alt={p.name} width={160} height={160} className="object-contain group-hover:scale-110 transition-transform" unoptimized />
                                            <div className="absolute top-3 left-3 px-2 py-1 bg-white/80 rounded text-[9px] font-black text-slate-500">{p.tag}</div>
                                        </div>
                                        <h3 className="text-base font-bold text-slate-900 line-clamp-2 min-h-[3.5rem] group-hover:text-blue-600">{p.name}</h3>
                                        <div className="mt-auto pt-4 border-t flex items-center justify-between">
                                            <span className="text-blue-600 font-bold text-[10px] uppercase flex items-center gap-2">Ver Detalhes <MoveRight size={14} /></span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-slate-50 rounded-3xl p-12 flex flex-col items-center text-center space-y-6 border-2 border-dashed">
                                <CircleQuestionMark size={52} className="text-slate-300" />
                                <p className="text-slate-500">Nenhum produto encontrado.</p>
                                <Button click={() => handleFilter(null)}>Limpar Filtros</Button>
                            </div>
                        )}

                        {/* Paginação */}
                        {totalPages > 1 && (
                            <div className="flex justify-center gap-2 mt-12 flex-wrap">
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <Link key={i + 1} href={buildPageHref(i + 1)} className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white border"}`}>
                                        {i + 1}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

// Exportação principal com Suspense (obrigatório para useSearchParams no build estático)
export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="pt-40 text-center">Carregando catálogo...</div>}>
            <ProductsContent />
        </Suspense>
    );
}