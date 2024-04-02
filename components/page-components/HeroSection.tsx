'use client';

import React from 'react';

export const HeroSection = ({ title }: { title: string }) => {
  return (
    <div className="bg-main-red h-[350px] flex justify-center items-center">
      <h1 className="text-slate-50">{title}</h1>
      <img src={'./public/bg-hero.jpg'} alt="" />
    </div>
  );
};
