import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import IsAbleToShow from "@/components/is-able-to-show";

const poppins = Poppins({
  variable: "--poppins-font",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marcobi.com.br"),
  title: {
    default: "Marcobi | Tintas, Vernizes e Soluções para Pintura",
    template: "%s | Marcobi",
  },
  description:
    "A Marcobi oferece tintas, vernizes, esmaltes, seladores, impermeabilizantes e acessórios para pintura com qualidade e ótimo custo-benefício.",
  keywords: [
    "Marcobi",
    "tintas",
    "vernizes",
    "loja de tintas",
    "tinta para parede",
    "tinta esmalte",
    "tinta acrílica",
    "verniz para madeira",
    "selador",
    "impermeabilizante",
    "acessórios para pintura",
    "materiais de pintura",
    "tintas residenciais",
    "tintas comerciais",
    "produtos para pintura",
  ],
  applicationName: "Marcobi",
  authors: [{ name: "Marcobi" }],
  creator: "Marcobi",
  publisher: "Marcobi",
  category: "shopping",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Marcobi | Tintas, Vernizes e Soluções para Pintura",
    description:
      "Encontre tintas, vernizes, esmaltes, seladores, impermeabilizantes e acessórios para pintura na Marcobi.",
    url: "https://marcobi.com.br",
    siteName: "Marcobi",
    type: "website",
    locale: "pt_BR",
    images: [],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased bg-background`}>
        <IsAbleToShow>
          <div>{children}</div>
        </IsAbleToShow>
      </body>
    </html>
  );
}