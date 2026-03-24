import Button from "@/components/button";
import Input, { InputEntry } from "@/components/input";
import { categories, products } from "@/helpers";
import { CircleQuestionMark, MoveRight, Search, Filter, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface ProductsPageProps {
    searchParams: Promise<{
        q: string;
        category: string;
        page?: string;
    }>;
}

async function ProductsPage({ searchParams }: ProductsPageProps) {
    const { category, page, q } = await searchParams;

    const pageSize = 6;
    const currentPage = Number(page ?? 1);
    const search = q?.toLowerCase() ?? "";

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

    async function filterAction(formData: FormData) {
        "use server";
        const category = formData.get("category") as string;
        redirect(category ? `/products?category=${category}` : "/products");
    }

    async function filterProduct({ value }: InputEntry) {
        "use server";
        const q = value as string | null;
        const params = new URLSearchParams();
        if (q) params.set("q", q);
        if (category) params.set("category", category);
        redirect(`/products?${params.toString()}`);
    }

    const buildPageHref = (pageNumber: number) => {
        const params = new URLSearchParams();
        params.set("page", String(pageNumber));
        if (category) params.set("category", category);
        if (q) params.set("q", q);
        return `/products?${params.toString()}`;
    };

    return (
        <main className="min-h-screen bg-slate-100 pt-24 md:pt-40 pb-16 md:pb-20 overflow-x-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="mb-8 mt-6 md:mt-0 md:mb-12 w-[calc(100%-35px)] md:w-full mx-auto p-5 sm:p-6 md:p-10 bg-slate-900 rounded-2xl md:rounded-3xl text-white shadow-2xl flex flex-col md:flex-row items-center md:items-center justify-between gap-4 md:gap-6 text-center md:text-left">
                    <div className="space-y-2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter uppercase">
                            Catálogo
                        </h1>
                        <p className="text-slate-400 text-sm md:text-lg font-light">
                            Alta performance em revestimentos industriais.
                        </p>
                    </div>

                    <Palette size={40} className="text-blue-500 opacity-50 hidden md:block" />
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 md:gap-8">
                    <aside className="lg:col-span-1 space-y-6 flex justify-center lg:block">
                        <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl border border-slate-200/60 w-[calc(100%-35px)] lg:w-full">
                            <div className="flex items-center gap-2 mb-5 md:mb-6 text-slate-800 font-bold uppercase text-[10px] tracking-[0.2em]">
                                <Filter size={14} className="text-blue-600" />
                                Filtros
                            </div>

                            <div className="space-y-5 md:space-y-6">
                                <div>
                                    <div className="relative">
                                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                        <Input
                                            initialValue={q}
                                            onChange={filterProduct}
                                            className="pl-10 bg-white border-slate-200 focus:border-blue-500 h-11 text-sm rounded-xl"
                                            placeholder="Buscar produto..."
                                        />
                                    </div>
                                </div>

                                <hr className="border-slate-200" />

                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                                        Linhas de Atuação
                                    </p>

                                    <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                        {categories.map(c => (
                                            <form key={c.tag} action={filterAction} className="shrink-0 lg:w-full">
                                                <input type="hidden" name="category" value={c.tag || ""} />
                                                <button
                                                    type="submit"
                                                    className={`cursor-pointer px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap lg:w-full lg:text-left ${(category ?? null) === c.tag
                                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                                        : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                                                        }`}
                                                >
                                                    {c.name}
                                                </button>
                                            </form>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <div className="lg:col-span-3">
                        {paginatedProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-4 sm:gap-6 justify-items-center sm:justify-items-stretch">
                                {paginatedProducts.map(p => (
                                    <Link
                                        key={p.id}
                                        href={`/products/${p.id}`}
                                        className="group bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col w-[calc(100%-35px)] sm:w-full"
                                    >
                                        <div className="relative aspect-square w-full rounded-xl bg-slate-100 flex items-center justify-center p-6 sm:p-8 mb-4 sm:mb-5 border border-slate-200/50">
                                            <Image
                                                src={p.image}
                                                alt={p.name}
                                                width={160}
                                                height={160}
                                                className="object-contain transition-transform duration-500 group-hover:scale-110 w-auto h-auto max-w-full max-h-full"
                                            />
                                            <div className="absolute top-3 left-3 px-2 py-1 bg-white/80 backdrop-blur-sm rounded text-[9px] font-black uppercase tracking-tighter text-slate-500 border border-slate-200">
                                                {p.tag}
                                            </div>
                                        </div>

                                        <h3 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-2 min-h-[3.5rem] group-hover:text-blue-600 transition-colors">
                                            {p.name}
                                        </h3>

                                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-200/60">
                                            <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.15em] flex items-center gap-2 group-hover:gap-4 transition-all">
                                                Ver Detalhes <MoveRight size={14} />
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col items-center text-center space-y-6 border-2 border-dashed border-slate-300 w-[calc(100%-35px)] mx-auto sm:w-full">
                                <CircleQuestionMark size={52} className="text-slate-300" />
                                <p className="text-slate-500 font-medium">
                                    Nenhum produto encontrado com esses critérios.
                                </p>
                                <Button redirect="/products" className="w-full sm:w-fit">
                                    Limpar Filtros
                                </Button>
                            </div>
                        )}

                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-10 md:mt-12 mb-6 md:mb-10 flex-wrap">
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <Link
                                        key={i + 1}
                                        href={buildPageHref(i + 1)}
                                        className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${currentPage === i + 1
                                            ? "bg-blue-600 text-white shadow-lg"
                                            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                                            }`}
                                    >
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

export default ProductsPage;