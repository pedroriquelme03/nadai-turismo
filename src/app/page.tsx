import { FloatingHeader } from "@/components/ui/floating-header";
import { About } from "@/components/sections/about";
import { Cta } from "@/components/sections/cta";
import { Destinations } from "@/components/sections/destinations";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Itinerary } from "@/components/sections/itinerary";
import { Journey } from "@/components/sections/journey";
import { Services } from "@/components/sections/services";
import { Why } from "@/components/sections/why";
import { instagramLink, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  taxID: site.cnpj,
  founder: { "@type": "Person", name: site.founder },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    addressCountry: "BR",
  },
  areaServed: ["Foz do Iguaçu", "Puerto Iguazú", "Ciudad del Este"],
  ...(site.whatsapp && { telephone: `+${site.whatsapp}` }),
  ...(instagramLink && { sameAs: [instagramLink] }),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <FloatingHeader />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <Why />
        <Itinerary />
        <Journey />
        <About />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
