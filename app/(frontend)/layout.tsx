import Footer from "@/components/footer";
import Header from "@/components/header";
import { getServicesPrisma } from "@/data/prismaServicios";
import { getEnterprisesPrisma } from "@/data/prismaNosotros";

// Función para precargar (prefetch) datos críticos
export async function generateMetadata() {
    // Precargar datos en paralelo usando Promise.all
    await Promise.all([
        getServicesPrisma(),
        getEnterprisesPrisma()
    ]);

    return {};
}

export default function LayoutFrontend({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
