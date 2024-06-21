import React from "react";
import { Card } from "./etapa-card";
import { BookUserIcon, CoffeeIcon, SproutIcon, UsersIcon } from "lucide-react";

export const EtapaSection = () => {
  const cards = [
    {
      title: "Indepedência",
      icon: <CoffeeIcon className="w-11 h-11 text-secondary-dark" />,
      description:
        "Buscando seu primeiro lar? Os apartamentos da Construtora Metrocasa oferecem conforto e praticidade para quem deseja conquistar sua independência com estilo.",
    },
    {
      title: "Vou Casar",
      icon: <UsersIcon className="w-11 h-11 text-secondary-dark" />,
      description:
        "Vai casar e começar uma vida a dois? Nossos apartamentos são perfeitos para esse novo começo, combinando elegância e funcionalidade para criar memórias inesquecíveis.",
    },
    {
      title: "Familía",
      icon: <BookUserIcon className="w-11 h-11 text-secondary-dark" />,
      description:
        "Sua família está crescendo? Oferecemos apartamentos espaçosos e acolhedores, ideais para proporcionar segurança e conforto para todos os membros da sua família.",
    },
    {
      title: "Quero Investir",
      icon: <SproutIcon className="w-11 h-11 text-secondary-dark" />,
      description:
        "Quer investir em imóveis? Os apartamentos da Construtora Metrocasa são uma excelente opção, garantindo valorização constante e retorno significativo para o seu patrimônio.",
    },
  ];

  return (
    <section className="w-full bg-dark-bg bg-cover bg-no-repeat mx-auto h-auto py-14 px-[15px]">
      <div className="w-full max-w-[1216px] mx-auto flex justify-center flex-col gap-24 ">
        {/* TEXT TITLES */}
        <div className="text-white text-center flex flex-col gap-4 w-full ">
          <h1 className="text-2xl md:text-4xl font-bold mb-5">
            Em que etapa da vida você está?
          </h1>
          <p>
            <strong>
              Está prestes a dar um passo importante na vida, seja casando,
              mudando-se para viver sozinho, expandindo a sua família ou deseja
              ampliar sua carteira de investimentos?
            </strong>
            <br />
            Deixe-nos ajudar a tornar essa transição ainda mais especial com os
            apartamentos oferecidos pela Construtora Metrocasa!
            <br />
            <br />
            Com uma ampla variedade de opções em termos de tamanho e
            localização, encontrar o projeto perfeito é uma jornada fácil
            conosco. <br />
            <strong>
              Confira a seguir as melhores opções para o seu objetivo.
            </strong>
          </p>
        </div>

        {/* TEXT TITLES */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {cards.map((card, i) => (
            <Card
              key={i}
              title={card.title}
              icon={card.icon}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
