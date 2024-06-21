"use client";

import { Building2Icon, HandshakeIcon, HardHat, StarIcon } from "lucide-react";
import React from "react";

const data = [
  {
    number: " 80",
    label: " Empreendimentos na Capital Paulista",
    icon: <Building2Icon className="h-[40px] w-[40px] text-main-red" />,
  },
  {
    number: " 30",
    label: "Empreendimentos em Obras",
    icon: <HardHat className="h-[40px] w-[40px] text-main-red" />,
  },
  {
    number: " 2.000",
    label: "Unidades entregues",
    icon: <HandshakeIcon className="h-[40px] w-[40px] text-main-red" />,
  },
  {
    number: " 11.000",
    label: "Sonhos realizados",
    icon: <StarIcon className="h-[40px] w-[40px] text-main-red" />,
  },
];

export const OurNumbers = () => {
  return (
    <div className="pt-24 flex flex-col items-center md:flex-row justify-center gap-14 ">
      {data.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-5 border-b pb-6 md:border-r md:border-b-0 md:border-main-red/20 last:border-r-0 md:pr-14 w-full max-w-[250px]"
        >
          {item.icon}
          <div className="flex flex-col items-center">
            <h5 className="font-extrabold text-3xl ">
              <span>+ DE </span>
              {item.number}
            </h5>
            <span className="text-normal uppercase text-center">
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
