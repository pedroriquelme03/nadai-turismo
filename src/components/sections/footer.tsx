import { Mail, MapPin } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { LogoFull } from "@/components/logo";
import { instagramLink, nav, site, whatsappLink } from "@/lib/site";

const linkClass =
  "rounded-sm text-white/75 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mist";

export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 sm:px-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <LogoFull tone="white" />
          <p className="mt-6 max-w-xs font-display text-xl leading-snug text-white/85">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Rodapé" className="md:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
            Navegue
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {nav.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
            Contato
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} inline-flex items-center gap-2.5`}
              >
                <WhatsAppIcon className="size-4" />
                {site.whatsappDisplay}
              </a>
            </li>
            {instagramLink && (
              <li>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-flex items-center gap-2.5`}
                >
                  <InstagramIcon className="size-4" />@{site.instagram}
                </a>
              </li>
            )}
            <li>
              <a
                href={`mailto:${site.email}`}
                className={`${linkClass} inline-flex items-center gap-2.5`}
              >
                <Mail className="size-4" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-white/75">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <address className="not-italic">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state}
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-6 text-xs text-white/60 sm:flex-row sm:justify-between sm:px-10">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <p>CNPJ {site.cnpj}</p>
        </div>
      </div>
    </footer>
  );
}
