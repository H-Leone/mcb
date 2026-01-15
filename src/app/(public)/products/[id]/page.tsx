interface ProductPageProps {
    params: Promise<{
        id: string;
    }>
}

async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;

    return (
        <div>
            Produto {id}
        </div>
    );
}

export default ProductPage;