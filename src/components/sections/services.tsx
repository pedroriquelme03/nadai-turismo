import { Reveal, RevealItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { audiences, services } from "@/lib/content";

export function Services() {
  return (
    <section id="servicos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="Nossos serviços"
          title="Cada detalhe da sua viagem, cuidado por quem conhece Foz."
        >
          Chegar a um destino novo traz sempre as mesmas dúvidas: como se
          locomover, o que visitar, como organizar o tempo e em quem confiar. A
          gente resolve isso com você.
        </SectionHeading>

        <Reveal className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, body }) => (
            <RevealItem key={title}>
              <div className="flex h-full flex-col gap-5 rounded-3xl border border-border bg-card p-6 sm:p-8">
                <div className="grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="size-5" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <p className="shrink-0 text-sm font-semibold">Atendemos</p>
          <ul className="flex flex-wrap gap-2">
            {audiences.map((a) => (
              <li
                key={a}
                className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
