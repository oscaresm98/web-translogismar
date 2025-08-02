import Footer from "@/components/footer";
import Header from "@/components/header";
import PageTransition from "@/components/transitions/page-transition";

export default function LayoutFrontend({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <PageTransition>
                {children}
            </PageTransition>
            <Footer />
        </>
    );
}
