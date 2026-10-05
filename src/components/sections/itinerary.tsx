"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { itineraryOptions } from "@/lib/content";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const MIN_DAYS = 1;
const MAX_DAYS = 15;

function Chip({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        "min-h-11 rounded-full border px-4 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
        selected
          ? "border-primary bg-primary text-primary-foreground"
          : "border-input bg-transparent hover:bg-accent",
      )}
    >
      {children}
    </button>
  );
}

function buildMessage(days: number, party: string | null, picks: string[]) {
  const lines = [
    "Olá, Nadai Turismo! Quero ajuda para montar meu roteiro em Foz do Iguaçu.",
    "",
    `• Dias na região: ${days}`,
  ];
  if (party) lines.push(`• Viajo com: ${party}`);
  if (picks.length) lines.push(`• Quero viver: ${picks.join(", ")}`);
  return lines.join("\n");
}

export function Itinerary() {
  const [days, setDays] = React.useState(3);
  const [party, setParty] = React.useState<string | null>(null);
  const [picks, setPicks] = React.useState<string[]>([]);

  const toggle = (item: string) =>
    setPicks((current) =>
      current.includes(item)
        ? current.filter((i) => i !== item)
        : [...current, item],
    );

  const message = buildMessage(days, party, picks);

  return (
    <section id="roteiro" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Monte seu roteiro" title="Quantos dias? Com quem? O que você quer viver?">
            Não sabe quantos dias reservar ou como encaixar Brasil, Argentina e
            Paraguai? Conte o básico e a gente ajuda a organizar um roteiro para
            o seu perfil e o seu tempo.
          </SectionHeading>

          <div className="mt-8 hidden rounded-3xl border border-dashed border-input p-6 lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Sua mensagem
            </p>
            <p
              aria-live="polite"
              className="mt-3 whitespace-pre-line text-sm leading-relaxed"
            >
              {message}
            </p>
          </div>
        </div>

        <form
          className="flex flex-col gap-8 rounded-3xl border border-border bg-card p-6 sm:p-8 lg:col-span-7"
          onSubmit={(e) => e.preventDefault()}
        >
          <fieldset>
            <legend className="font-semibold">
              Quantos dias você fica na região?
            </legend>
            <div className="mt-4 flex items-center gap-4">
              <Button
                type="button"
                size="icon"
                variant="outline"
                className="size-11"
                onClick={() => setDays((d) => Math.max(MIN_DAYS, d - 1))}
                disabled={days <= MIN_DAYS}
                aria-label="Diminuir dias"
              >
                <Minus className="size-4" />
              </Button>
              <output
                aria-live="polite"
                className="min-w-24 text-center font-serif text-4xl font-medium tabular-nums"
              >
                {days}
                <span className="ml-2 font-sans text-base font-normal text-muted-foreground">
                  {days === 1 ? "dia" : "dias"}
                </span>
              </output>
              <Button
                type="button"
                size="icon"
                variant="outline"
                className="size-11"
                onClick={() => setDays((d) => Math.min(MAX_DAYS, d + 1))}
                disabled={days >= MAX_DAYS}
                aria-label="Aumentar dias"
              >
                <Plus className="size-4" />
              </Button>
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-semibold">Com quem você viaja?</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {itineraryOptions.party.map((option) => (
                <Chip
                  key={option}
                  selected={party === option}
                  onClick={() => setParty(party === option ? null : option)}
                >
                  {option}
                </Chip>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-semibold">
              O que não pode faltar?
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                Escolha quantos quiser
              </span>
            </legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {itineraryOptions.experiences.map((option) => (
                <Chip
                  key={option}
                  selected={picks.includes(option)}
                  onClick={() => toggle(option)}
                >
                  {option}
                </Chip>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Abre o WhatsApp com suas escolhas já escritas.
            </p>
            <Button asChild variant="terra" size="lg">
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-5" />
                Enviar pelo WhatsApp
              </a>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
