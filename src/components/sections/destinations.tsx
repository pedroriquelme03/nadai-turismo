import { ArrowUpRight } from "lucide-react";
import { DestinationCard } from "@/components/ui/destination-card";
import { Reveal, RevealItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { destinations } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

const messageFor = (title: string) =>
  `Olá, Nadai Turismo! Quero incluir "${title}" no meu roteiro em Foz do Iguaçu.`;

export function Destinations() {
  const featured = destinations.filter((d) => d.image);
  const others = destinations.filter((d) => !d.image);

  return (
    <section id="destinos" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="Destinos e atrativos"
          title="Três países, um roteiro só seu."
        >
          Brasil, Argentina e Paraguai cabem na mesma viagem. Escolha o que
          quer viver e a gente organiza os deslocamentos.
        </SectionHeading>

        <Reveal className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {featured.map((d) => (
            <RevealItem key={d.title} className="h-[420px] sm:h-[500px]">
              <DestinationCard
                imageUrl={d.image!}
                location={d.title}
                country={d.country}
                description={d.body}
                href={whatsappLink(messageFor(d.title))}
                themeColor={d.themeColor ?? "156 42% 13%"}
              />
            </RevealItem>
          ))}
        </Reveal>

        <Reveal className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map(({ icon: Icon, title, country, body }) => (
            <RevealItem key={title}>
              <a
                href={whatsappLink(messageFor(title))}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-8 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              >
                <div className="flex items-start justify-between">
                  <Icon className="size-6 text-terra" strokeWidth={1.6} />
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {country}
                  </p>
                  <h3 className="mt-1.5 font-serif text-xl font-medium tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </a>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
