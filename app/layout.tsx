import FloatingSubscribeButton from "@/components/floating-subscribe-button";
import FooterSection from "@/components/footer-section";
import NavbarSection from "@/components/navbar-section";
import { Toaster } from "@/components/ui/sonner";
import { ReactLenis } from "lenis/react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import type React from "react";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Sonhando Alto",
  description:
    "Transforme seus sonhos em realidade através da educação superior.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <ReactLenis root>
        <body className={`${poppins.className} max-w-[3840px]`}>
          <NavbarSection />
          {children}
          <FloatingSubscribeButton />
          <FooterSection />
          <Toaster position="top-center" richColors />
        </body>
      </ReactLenis>
    </html>
  );
}