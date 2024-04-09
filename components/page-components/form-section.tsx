import React from 'react';
import { MainForm } from '../Forms/main-form';

interface IProps {
  title: string;
  subtitle?: string;
}

// TODO: Melhorar estilos

export const FormSection = ({ title, subtitle }: IProps) => {
  return (
    <section className="flex flex-col md:flex-row px-[15px] gap-24 items-center justify-between max-w-[1216px] mx-auto py-14 md:py-24 bg-white-bg bg-cover bg-no-repeat">
      <div className="w-full max-w-[650px]">
        <h2 className="text-3xl md:text-4xl w-full font-bold text-center md:text-left">
          {title}
          <br />
          <br />
          <span className="text-main-red">{subtitle}</span>
        </h2>
      </div>
      <MainForm className="flex-col w-full" variant={'primary'} />
    </section>
  );
};
