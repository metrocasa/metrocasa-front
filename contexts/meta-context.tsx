"use client";

import { createContext, useContext, useState } from "react";
import { Imovel } from "@/types/global";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

type MetaContextProps = {
  meta: any;
  setMeta: (meta: any) => void;
  currentPageSize: number;
  setCurrentPageSize: (pageSize: number) => void;
};

// Criando o contexto
const MetaContext = createContext<MetaContextProps>({
  meta: null,
  setMeta: (meta: any) => {},
  currentPageSize: 8,
  setCurrentPageSize: () => {},
});

// Componente de provedor de contexto
export const MetaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [meta, setMeta] = useState<number>();
  const [currentPageSize, setCurrentPageSize] = useState<number>(12);

  return (
    <MetaContext.Provider
      value={{
        meta,
        setMeta,
        currentPageSize,
        setCurrentPageSize,
      }}
    >
      {children}
    </MetaContext.Provider>
  );
};

// Hook para consumir o contexto
export const useMetaContext = () => useContext(MetaContext);
