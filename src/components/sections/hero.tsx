import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { Reveal, RevealItem } from "@/components/reveal";
import { images } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

const highlights = [
  "Transfers privativos",
  "Passeios e receptivo",
  "Roteiros sob medida",
];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-forest text-white"
    >
      <Image
        src={images.hero}
        alt="Cataratas do Iguaçu cercadas pela mata"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-forest via-forest/55 to-forest/20"
      />

      <Reveal className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-10 pt-40 sm:px-10 sm:pb-14">
        <RevealItem>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist sm:text-sm">
            Turismo receptivo · Foz do Iguaçu e Tríplice Fronteira
          </p>
        </RevealItem>
        <RevealItem>
          <h1
            className="max-w-4xl text-balance font-display font-normal tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.25rem)", lineHeight: 1 }}
          >
            Sua experiência em Foz começa com a gente.
          </h1>
        </RevealItem>
        <RevealItem>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
            Você aproveita o destino. A Nadai cuida do caminho: transfers,
            passeios e um roteiro pensado para o seu tempo, com atendimento
            próximo do primeiro contato ao fim da viagem.
          </p>
        </RevealItem>
        <RevealItem className="flex flex-wrap items-center gap-3">
          <Button asChild variant="terra" size="lg">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              Planejar minha viagem
            </a>
          </Button>
          <Button asChild variant="glass" size="lg">
            <a href="#roteiro">
              Montar meu roteiro
              <ArrowDown className="size-4" />
            </a>
          </Button>
        </RevealItem>
        <RevealItem>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/20 pt-6 text-sm font-medium text-white/85">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2.5">
                <span aria-hidden className="size-1.5 rounded-full bg-terra" />
                {h}
              </li>
            ))}
          </ul>
        </RevealItem>
      </Reveal>
    </section>
  );
}
