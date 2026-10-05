import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { Reveal, RevealItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { steps } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

export function Journey() {
  return (
    <section id="como-funciona" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex flex-col gap-8 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Como funciona"
              title="Do primeiro oi ao fim da viagem."
            >
              Tudo acontece pelo WhatsApp, com uma pessoa de verdade do outro
              lado.
            </SectionHeading>
            <Button asChild size="lg" className="self-start">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-5" />
                Começar agora
              </a>
            </Button>
          </div>
        </div>

        <Reveal className="lg:col-span-7">
          <ol className="relative flex flex-col gap-5 border-l border-dashed border-input pl-10 sm:pl-12">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <RevealItem>
                  <span className="absolute -left-[3.65rem] top-4 grid size-9 place-items-center rounded-full border border-input bg-card text-xs font-semibold tabular-nums shadow-sm shadow-black/5 sm:-left-[4.15rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <s.icon className="size-5" strokeWidth={1.6} />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold tracking-tight">
                        {s.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
