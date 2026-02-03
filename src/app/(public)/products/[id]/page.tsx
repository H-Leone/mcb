import SegmentsSection from "@/components/segments-section";
import { products, categories } from "@/helpers";
import Image from "next/image";

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;

    const product = products.find(p => p.id === id);

    if (!product) {
        return <div className="p-8">Produto não encontrado</div>;
    }

    const category = categories.find(c => c.tag === product.tag);

    return (
        <div className="px-18 pt-40">
            <div className="space-y-12 mb-32">
                <div className="grid grid-cols-2 gap-12">
                    <div className="bg-white rounded-lg p-8 flex items-center justify-center">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="space-y-6">
                        {!!category?.name && (
                            <span className="text-sm text-slate-500">
                                Tag: {category?.name}
                            </span>
                        )}
                        <h1 className="text-3xl font-semibold">
                            {product.name}
                        </h1>
                        <p className="text-slate-700 leading-relaxed">
                            {product.description}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-xl font-medium mb-4">
                            Principais características
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            {product.details.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-medium mb-4">
                            Aplicações
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-slate-700">
                            {product.applications.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <SegmentsSection />
        </div>
    );
}

export default ProductPage;
