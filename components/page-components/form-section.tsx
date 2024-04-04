import React from 'react';
import { MainForm } from '../Forms/main-form';

export const FormSection = () => {
  return (
    <section className="flex flex-col md:flex-row px-[15px] gap-24 items-center justify-between max-w-[1216px] mx-auto py-14 md:py-24">
      <div className="w-full max-w-[650px]">
        <h2 className="text-3xl md:text-4xl w-full font-bold text-center md:text-left">
          Aqui na Metrocasa, você realiza o sonho do seu apartamento próprio com
          descontos incríveis e as melhores condições de pagamento.
          <br />
          <br />
          <span className="text-main-red">
            Venha participar do nosso Feirão de Imóveis e aproveite ofertas
            imperdíveis!
          </span>
        </h2>
      </div>
      <MainForm className="flex-col w-full" variant={'primary'} />
    </section>
  );
};
