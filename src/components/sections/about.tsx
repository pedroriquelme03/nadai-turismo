import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { images } from "@/lib/content";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="quem-somos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src={images.about}
              alt="Visitantes observando as Cataratas do Iguaçu"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-lg sm:left-auto sm:right-[-1.5rem] sm:max-w-xs">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-terra text-terra-foreground">
              <GraduationCap className="size-5" strokeWidth={1.6} />
            </span>
            <p className="text-sm leading-snug">
              <strong className="font-semibold">Guia de Turismo</strong>
              <br />
              <span className="text-muted-foreground">
                Formação profissional do fundador
              </span>
            </p>
          </div>
        </div>

        <div className="mt-6 lg:col-span-6 lg:col-start-7 lg:mt-0">
          <SectionHeading
            eyebrow="Quem somos"
            title="Uma história de família, uma nova geração."
          />
          <div className="mt-6 flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              A Nadai Turismo nasceu de um sonho que começou cedo. Aos 22 anos,{" "}
              {site.founder} decidiu transformar a paixão pelo turismo e a
              vontade de empreender no próprio negócio.
            </p>
            <p>
              Crescendo em uma família sempre ligada ao turismo, ele teve
              contato desde cedo com o universo das viagens, da hospitalidade
              e, principalmente, com a arte de receber bem. Foi dessa história
              que nasceu a Nadai, em Foz do Iguaçu.
            </p>
            <p>
              Somos uma agência de turismo receptivo jovem, que está escrevendo
              seus primeiros capítulos com dedicação, proximidade e vontade de
              crescer.
            </p>
          </div>
          <blockquote className="mt-8 border-l-2 border-terra pl-5 font-serif text-xl font-medium leading-snug tracking-tight sm:text-2xl">
            Raízes no turismo, identidade familiar e muitos destinos pela
            frente.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
