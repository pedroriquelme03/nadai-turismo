import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  location: string;
  country: string;
  description: string;
  href: string;
  cta?: string;
  themeColor: string; // ex.: "150 50% 25%" para um verde profundo
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  (
    {
      className,
      imageUrl,
      location,
      country,
      description,
      href,
      cta = "Incluir no meu roteiro",
      themeColor,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        style={{ "--theme-color": themeColor } as React.CSSProperties}
        className={cn("group h-full w-full", className)}
        {...props}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-full w-full overflow-hidden rounded-3xl shadow-lg transition-shadow duration-500 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background group-hover:shadow-[0_0_60px_-15px_hsl(var(--theme-color)/0.6)]"
          aria-label={`${cta}: ${location}`}
        >
          <Image
            src={imageUrl}
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />

          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, hsl(var(--theme-color) / 0.95), hsl(var(--theme-color) / 0.65) 35%, transparent 65%)`,
            }}
          />

          <div className="relative flex h-full flex-col justify-end p-6 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              {country}
            </p>
            <h3 className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              {location}
            </h3>
            <p className="mt-2 max-w-sm text-sm text-white/85 sm:text-base">
              {description}
            </p>

            <div className="mt-6 flex items-center justify-between rounded-full border border-white/25 bg-white/10 px-5 py-3 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/20">
              <span className="text-sm font-semibold tracking-wide">{cta}</span>
              <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </a>
      </div>
    );
  },
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
