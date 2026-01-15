import Footer from "@/components/footer";
import Header from "@/components/header";
import PageTransition from "@/components/page-transition";

interface PublicLayoutProps {
    children: React.ReactNode;
}

function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <div className="pt-32">
            <Header />

            <PageTransition>
                {children}
            </PageTransition>

            <Footer />
        </div>
    );
}

export default PublicLayout;