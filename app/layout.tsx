import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: 'Translogismar - %s',
    default: 'Translogismar - Inicio'
  },
  description: 'Translogismar S.A. - Empresa lider en el transporte de carga pesada. Con décadas de experiencia y una flota de vanguardia. Ofrecemos entregas seguras y eficientes en toda la región',
  keywords: ['Transporte', 'Transporte de carga pesada', 'Transporte terrestre de carga', 'Transporte Ecuador', 'Transporte de carga Ecuador'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} h-screen overflow-y-scroll`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
