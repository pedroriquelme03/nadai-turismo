import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = { className?: string; tone?: "dark" | "white" };

/** Símbolo + nome, para espaços horizontais como o cabeçalho. */
export function Logo({ className, tone = "dark" }: Props) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={`/logo-mark-${tone}.png`}
        alt=""
        width={162}
        height={240}
        className="h-9 w-auto"
      />
      <span className="font-logo text-[0.95rem] font-normal uppercase leading-none tracking-[0.14em]">
        Nadai Turismo
      </span>
    </span>
  );
}

/** Logo completa (símbolo sobre o nome), como no arquivo original. */
export function LogoFull({ className, tone = "dark" }: Props) {
  return (
    <Image
      src={`/logo-full-${tone}.png`}
      alt="Nadai Turismo, turismo receptivo"
      width={908}
      height={520}
      className={cn("h-28 w-auto", className)}
    />
  );
}
