import { Building2Icon, HandshakeIcon, StarIcon } from 'lucide-react';
import React from 'react';

const data = [
  {
    number: '400',
    label: 'Happy Customers',
    icon: <Building2Icon className="h-[40px] w-[40px] text-main-red" />,
  },
  {
    number: '+3400',
    label: 'Acordos Fechados',
    icon: <HandshakeIcon className="h-[40px] w-[40px] text-main-red" />,
  },
  {
    number: '400',
    label: 'Happy Customers',
    icon: <StarIcon className="h-[40px] w-[40px] text-main-red" />,
  },
  {
    number: 'TOP 10',
    label: 'Reclame Aqui',
    icon: <Building2Icon className="h-[40px] w-[40px] text-main-red" />,
  },
];

export const OurNumbers = () => {
  return (
    <div className="py-24 flex w-full justify-center">
      {data.map((item) => (
        <div className="flex flex-col items-center gap-5 border-r border-main-red/40 last:border-r-0 p-4 w-full">
          {item.icon}
          <div className="flex flex-col items-center">
            <h4 className="font-extrabold text-3xl">{item.number}</h4>
            <span className="text-normal uppercase">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
