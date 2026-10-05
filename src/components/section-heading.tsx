import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  className,
  tone = "light",
}: Props) {
  return (
    <div className={cn("flex max-w-2xl flex-col gap-4", className)}>
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.2em]",
          tone === "light" ? "text-terra" : "text-mist",
        )}
      >
        {eyebrow}
      </span>
      <h2
        className="text-balance font-serif font-medium tracking-tight"
        style={{ fontSize: "clamp(2rem, 4.2vw, 3.1rem)", lineHeight: 1.06 }}
      >
        {title}
      </h2>
      {children && (
        <p
          className={cn(
            "text-pretty text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-muted-foreground" : "text-white/75",
          )}
        >
          {children}
        </p>
      )}
    </div>
  );
}
