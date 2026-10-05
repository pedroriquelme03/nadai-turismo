/**
 * Dados institucionais da Nadai Turismo.
 * Tudo que aparece em mais de um lugar do site (contato, redes, CNPJ) sai daqui.
 */
export const site = {
  name: "Nadai Turismo",
  tagline: "Sua experiência começa com a gente.",
  description:
    "Agência de turismo receptivo em Foz do Iguaçu e na Tríplice Fronteira: transfers privativos, passeios e roteiros personalizados, com atendimento próximo e familiar.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nadaiturismo.com.br",
  cnpj: "65.107.697/0001-40",
  email: "nadaiturismo@outlook.com",
  address: {
    street: "Rua Albride Maria Rossato, 678",
    city: "Foz do Iguaçu",
    state: "PR",
  },
  // Só dígitos, com DDI + DDD.
  whatsapp: "5545991468522",
  whatsappDisplay: "(45) 99146-8522",
  // Usuário do Instagram, sem "@".
  instagram: "nadaiturismo",
  founder: "Matheus de Nadai de Almeida",
};

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Destinos", href: "#destinos" },
  { label: "Monte seu roteiro", href: "#roteiro" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Quem somos", href: "#quem-somos" },
];

export const defaultMessage =
  "Olá, Nadai Turismo! Vou visitar Foz do Iguaçu e gostaria de ajuda para planejar minha viagem.";

export function whatsappLink(message: string = defaultMessage) {
  const text = encodeURIComponent(message);
  return site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export const instagramLink = site.instagram
  ? `https://www.instagram.com/${site.instagram}/`
  : null;
