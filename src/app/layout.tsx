import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces, Jost } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

// Geométrica próxima da tipografia da logo, usada só na assinatura.
const logo = Jost({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: "400",
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
      className={`${body.variable} ${display.variable} ${logo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
