import type { Metadata, Viewport } from "next";
import { Jost, Poppins } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const body = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Geométrica próxima da tipografia da logo: assinatura e títulos de destaque.
const brand = Jost({
  variable: "--font-brand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Receptivo, transfers e passeios em Foz do Iguaçu`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "turismo em Foz do Iguaçu",
    "transfer Foz do Iguaçu",
    "receptivo Foz do Iguaçu",
    "passeios Cataratas do Iguaçu",
    "roteiro Tríplice Fronteira",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#102a20",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${body.variable} ${brand.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
