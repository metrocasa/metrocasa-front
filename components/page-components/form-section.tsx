import React from 'react';
import { MainForm } from '../Forms/main-form';

interface IProps {
  title: string;
  subtitle?: string;
}

// TODO: Melhorar estilos

export const FormSection = ({ title, subtitle }: IProps) => {
  return (
    <section className="md:flex-row px-[15px]  py-14 md:py-24 bg-white-bg bg-cover bg-no-repeat">
      <div className="w-full max-w-[1216px] mx-auto flex gap-14 items-center">
        <div className="w-full max-w-[700px] flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl w-full font-bold text-center md:text-left">
            {title}
          </h2>
          <span className="text-main-red text-3xl">{subtitle}</span>
        </div>
        <MainForm className="flex-col" variant={'primary'} />
      </div>
    </section>
  );
};
