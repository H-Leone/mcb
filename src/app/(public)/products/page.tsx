import Button from "@/components/button";
import Input, { InputEntry } from "@/components/input";
import { categories, products } from "@/helpers";
import { CircleQuestionMark, MoveRight, Search } from "lucide-react";
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

    const pageSize = 8;
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

        if (category) {
            redirect(`/products?category=${category}`);
        } else {
            redirect("/products");
        }
    }

    async function filterProduct({ value }: InputEntry) {
        "use server";

        const q = value as string | null;

        const params = new URLSearchParams();

        if (q) params.set("q", q);
        if (category) params.set("category", category);

        redirect(`/products?${params.toString()}`);
    }

    return (
        <div className="pt-40">
            <div className="grid grid-cols-4 px-12 gap-8">
                <div className="bg-white rounded-lg p-6 h-fit">
                    <p className="text-xl font-medium">Produtos</p>

                    <div className="relative mt-1.5">
                        <Search size={17.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-border/65" />
                        <Input initialValue={q} onChange={filterProduct} className="my-3 pl-11" delay={300} placeholder="Buscar..." />
                    </div>

                    <hr className="my-6 w-10/12 mx-auto bg-slate-300 border-slate-300" />

                    <p className="text-lg font-medium mb-4">Categorias</p>

                    <div className="flex flex-col gap-2">
                        {categories.map(c => (
                            <form key={c.tag} action={filterAction}>
                                <input type="hidden" name="category" value={c.tag || ""} />
                                <Button type="submit" variant="transparent" selected={category === c.tag}>
                                    {c.name}
                                </Button>
                            </form>
                        ))}
                    </div>
                </div>

                {!!paginatedProducts.length ? (
                    <div className="w-full col-span-3 grid grid-cols-4 gap-6">
                        {paginatedProducts.map(p => (
                            <div
                                key={p.name}
                                className="bg-white rounded-lg p-6 flex flex-col"
                            >
                                <Image
                                    src={p.image}
                                    alt={p.name}
                                    width={125}
                                    height={125}
                                    className="mx-auto"
                                />
                                <p className="w-11/12 mx-auto h-13 text-center text-xl line-clamp-2 mt-6">
                                    {p.name}
                                </p>
                                <Link href={`/products/${p.id}`}>
                                    <span className="text-green text-sm flex items-center gap-2 mt-auto pt-6">
                                        <p>Saiba mais</p>
                                        <MoveRight size={12.5} />
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) :
                    (
                        <div className="col-span-3 mx-auto space-y-4 mt-8">
                            <CircleQuestionMark size={90} className="mx-auto" />
                            <p className="text-lg">Nenhum produto encontrado!</p>
                            <Button redirect="/products" className="mx-auto">
                                <p>Resetar filtros</p>
                            </Button>
                        </div>
                    )}
            </div>

            <div className="col-span-3 flex justify-center gap-2 mt-8 mb-20">
                {Array.from({ length: totalPages }).map((_, i) => {
                    const pageNumber = i + 1;
                    const query = new URLSearchParams();

                    if (category) query.set("category", category);
                    query.set("page", String(pageNumber));

                    return (
                        <Link
                            key={pageNumber}
                            href={`/products?${query.toString()}`}
                            className={`px-3 py-1 rounded-md text-sm border ${pageNumber === currentPage
                                ? "bg-green text-white border-green"
                                : "bg-white border-slate-300 hover:bg-slate-100"
                                }`}
                        >
                            {pageNumber}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default ProductsPage;