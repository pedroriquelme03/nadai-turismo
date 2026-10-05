import {
  BadgeCheck,
  CalendarClock,
  CarFront,
  Clock,
  Compass,
  Handshake,
  HeartHandshake,
  Landmark,
  type LucideIcon,
  MapPinned,
  MessageCircle,
  MessagesSquare,
  Route,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
  Waves,
  Zap,
} from "lucide-react";

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=2400`;

/**
 * Fotos provisórias (Unsplash). Trocar pelas fotos oficiais da Nadai quando chegarem:
 * basta colocar o arquivo em /public/fotos e apontar o caminho aqui, ex.: "/fotos/hero.jpg".
 */
export const images = {
  hero: unsplash("photo-1671615224828-fc4e75d88f72"),
  cataratasBrasil: unsplash("photo-1648510399328-b8981e9fc1bb"),
  cataratasArgentina: unsplash("photo-1753104964019-109d09959e06"),
  about: unsplash("photo-1541686826972-068336f11d45"),
};

export type Service = { icon: LucideIcon; title: string; body: string };

export const services: Service[] = [
  {
    icon: CarFront,
    title: "Transfers privativos",
    body: "Aeroporto, hotel, atrativos e fronteiras em veículo exclusivo para você e quem viaja com você, no horário combinado.",
  },
  {
    icon: Handshake,
    title: "Receptivo turístico",
    body: "Quem conhece o destino recebe você na chegada e acompanha sua estadia, com orientação e suporte do começo ao fim.",
  },
  {
    icon: Compass,
    title: "Passeios",
    body: "Cataratas, Itaipu, Marco das Três Fronteiras, Argentina e Paraguai, organizados para você aproveitar sem pressa.",
  },
  {
    icon: Route,
    title: "Roteiros personalizados",
    body: "Um roteiro pensado para o seu perfil, seu tempo e suas expectativas, sem pacote engessado.",
  },
];

export const audiences = [
  "Casais",
  "Famílias",
  "Grupos de amigos",
  "Viajantes individuais",
  "Empresas e agências",
];

export type Destination = {
  title: string;
  country: string;
  body: string;
  /** Sem foto, o destino aparece como bloco tipográfico. */
  image?: string;
  icon: LucideIcon;
  /** HSL sem "hsl()", usado no degradê e no brilho do card com foto. */
  themeColor?: string;
};

export const destinations: Destination[] = [
  {
    title: "Cataratas do Iguaçu",
    country: "Brasil",
    body: "A vista panorâmica das quedas, pelas passarelas do lado brasileiro.",
    image: images.cataratasBrasil,
    icon: Waves,
    themeColor: "156 42% 13%",
  },
  {
    title: "Cataratas, lado argentino",
    country: "Argentina",
    body: "Trilhas e passarelas que levam você para perto das quedas.",
    image: images.cataratasArgentina,
    icon: Waves,
    themeColor: "196 48% 14%",
  },
  {
    title: "Itaipu Binacional",
    country: "Brasil · Paraguai",
    body: "A usina que une dois países, vista de perto.",
    icon: Zap,
  },
  {
    title: "Marco das Três Fronteiras",
    country: "Brasil",
    body: "O ponto onde Brasil, Argentina e Paraguai se encontram.",
    icon: Landmark,
  },
  {
    title: "Paraguai",
    country: "Paraguai",
    body: "Travessia e compras em Ciudad del Este, com quem conhece o caminho.",
    icon: ShoppingBag,
  },
  {
    title: "Gastronomia e compras",
    country: "Tríplice Fronteira",
    body: "Sabores e endereços dos três países para encaixar no seu roteiro.",
    icon: UtensilsCrossed,
  },
];

export type Reason = { icon: LucideIcon; title: string; body: string };

export const reasons: Reason[] = [
  {
    icon: HeartHandshake,
    title: "Atendimento próximo e humano",
    body: "Você não é só mais uma reserva. Queremos conhecer seu roteiro e ajudar a tornar sua passagem por Foz mais especial.",
  },
  {
    icon: Sparkles,
    title: "Personalização de verdade",
    body: "Cada viagem tem expectativas e momentos diferentes. Adaptamos a experiência ao seu perfil, sem atendimento engessado.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    body: "Horário combinado é horário cumprido, para você não perder tempo de viagem esperando.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e transparência",
    body: "Serviços, datas, horários, condições e valores confirmados com clareza antes de você fechar.",
  },
  {
    icon: MessagesSquare,
    title: "Suporte antes e durante",
    body: "Nosso atendimento não termina na contratação: seguimos presentes com orientação e atenção durante a estadia.",
  },
  {
    icon: MapPinned,
    title: "Quem conhece o destino",
    body: "Uma empresa familiar com raízes no turismo de Foz, fundada por quem tem formação profissional como Guia de Turismo.",
  },
];

export type Step = { icon: LucideIcon; title: string; body: string };

export const steps: Step[] = [
  {
    icon: MessageCircle,
    title: "Você chama no WhatsApp",
    body: "Conte o período da viagem, quantas pessoas vêm e o que você procura.",
  },
  {
    icon: Compass,
    title: "Entendemos sua viagem",
    body: "Tiramos dúvidas e sugerimos passeios, transfers e a melhor organização do roteiro.",
  },
  {
    icon: Route,
    title: "Você recebe a proposta",
    body: "Apresentamos as opções disponíveis e os valores de cada uma.",
  },
  {
    icon: CalendarClock,
    title: "Escolha e confirmação",
    body: "Confirmamos serviços, datas, horários, condições e forma de pagamento. Reserva finalizada.",
  },
  {
    icon: BadgeCheck,
    title: "Você aproveita o destino",
    body: "No dia combinado, a gente cuida do caminho. Você cuida de aproveitar.",
  },
  {
    icon: HeartHandshake,
    title: "Seguimos por perto",
    body: "O suporte continua antes e durante a estadia, até o encerramento da viagem.",
  },
];

export const itineraryOptions = {
  party: ["Casal", "Família", "Amigos", "Sozinho(a)", "Grupo ou empresa"],
  experiences: [
    "Cataratas (lado brasileiro)",
    "Cataratas (lado argentino)",
    "Itaipu",
    "Marco das Três Fronteiras",
    "Paraguai e compras",
    "Gastronomia",
    "Transfer do aeroporto",
  ],
};
