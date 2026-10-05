import { Reveal, RevealItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { reasons } from "@/lib/content";

export function Why() {
  return (
    <section id="diferenciais" className="bg-forest py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading
          tone="dark"
          eyebrow="Por que a Nadai"
          title="Queremos que você se sinta acolhido no destino, não apenas transportado por ele."
        >
          Uma boa viagem começa com a tranquilidade de saber que você está em
          boas mãos.
        </SectionHeading>

        <Reveal className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, body }) => (
            <RevealItem key={title} className="bg-forest">
              <div className="flex h-full flex-col gap-5 p-6 sm:p-8">
                <Icon className="size-6 text-mist" strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-white/75">
                    {body}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
