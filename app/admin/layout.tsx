import HeaderAdmin from "@/components/admin/header-admin";
import FooterAdmin from "@/components/admin/footer-admin";
import Navbar from "@/components/admin/navbar/navbar";
import SessionAuthProvider from "@/context/SessionAuthProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Admin'
};

export default function LayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionAuthProvider>
      <HeaderAdmin />
      <main className="flex">
        <Navbar />
        {children}
      </main>

      <FooterAdmin />
    </SessionAuthProvider>
  );
}