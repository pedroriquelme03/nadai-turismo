"use client";

import React from "react";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { nav, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-4 top-4 z-40",
        "mx-auto max-w-5xl rounded-full border shadow-sm",
        "bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg",
      )}
    >
      <nav
        aria-label="Principal"
        className="flex items-center justify-between py-1.5 pl-5 pr-1.5"
      >
        <a
          href="#topo"
          aria-label="Nadai Turismo, voltar ao início"
          className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <Logo />
        </a>
        <div className="hidden items-center lg:flex">
          {nav.map((link) => (
            <a
              key={link.href}
              className={buttonVariants({ variant: "ghost", size: "sm" })}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <Button asChild size="sm" variant="terra" className="h-10">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-4" />
              <span className="max-sm:sr-only">Falar no WhatsApp</span>
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setOpen(!open)}
              className="lg:hidden"
              aria-label="Abrir menu"
            >
              <MenuIcon className="size-4" />
            </Button>
            <SheetContent className="bg-background">
              <SheetTitle className="px-6 pt-6">
                <Logo />
              </SheetTitle>
              <div className="grid gap-y-1 overflow-y-auto px-3 pb-5 pt-8">
                {nav.map((link) => (
                  <a
                    key={link.href}
                    className={buttonVariants({
                      variant: "ghost",
                      className: "h-12 justify-start text-base",
                    })}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <SheetFooter>
                <Button asChild variant="terra" size="lg">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="size-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
