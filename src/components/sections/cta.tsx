import { Building2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { site, whatsappLink } from "@/lib/site";

export function Cta() {
  return (
    <section id="contato" className="bg-background pb-20 sm:pb-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 sm:px-10 lg:grid-cols-3">
        <div className="flex flex-col gap-6 rounded-3xl bg-terra p-8 text-terra-foreground sm:p-12 lg:col-span-2">
          <h2
            className="max-w-xl text-balance font-display font-normal tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.2vw, 3.1rem)", lineHeight: 1.06 }}
          >
            Fale com a Nadai e comece a planejar sua viagem.
          </h2>
          <p className="max-w-lg text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
            Conte quando você vem e o que quer conhecer. A resposta chega com
            orientação e opções para o seu roteiro.
          </p>
          <Button
            asChild
            size="lg"
            className="self-start bg-card text-foreground hover:bg-card/90"
          >
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              Chamar no WhatsApp
            </a>
          </Button>
        </div>

        <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-8">
          <Building2 className="size-6 text-terra" strokeWidth={1.6} />
          <div>
            <h3 className="font-display text-2xl font-normal tracking-tight">
              Agências e empresas
            </h3>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
              Precisa de receptivo e apoio local em Foz do Iguaçu para seus
              clientes ou sua equipe? Vamos conversar.
            </p>
          </div>
          <Button asChild variant="outline" className="mt-auto self-start">
            <a href={`mailto:${site.email}?subject=Parceria%20Nadai%20Turismo`}>
              <Mail className="size-4" />
              Enviar e-mail
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
