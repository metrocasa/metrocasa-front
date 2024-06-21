import { Button } from "@/components/ui/button";
import { Imovel } from "@/types/global";
import axios from "axios";

import { DownloadIcon, Loader2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";

export const Card = ({ imovel }: { imovel: Imovel }) => {
  const [imovelInfo, setImovelInfo] = useState<Imovel | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImovel = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/imoveis/${imovel.id}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_GENERAL_TOKEN}`,
            },
          }
        );
        const data = await response.data;
        setImovelInfo(data);
      } catch (error) {
        console.error("Erro ao buscar imóvel:", error);
        // Lógica de tratamento de erro (opcional)
      } finally {
        setIsLoading(false);
      }
    };
    fetchImovel();
  }, [imovel]);

  // TODO: is Loading and error handling
  if (isLoading) {
    return (
      <div className="text-white/30  h-[400px] w-full rounded-lg flex items-center justify-center">
        <Image
          src={`${"/placeholder.jpg"}`}
          alt={"Fachada"}
          className={`object-cover transition h-[400px] w-full rounded-lg`}
          width={900}
          height={900}
          priority
        />

        <Loader2Icon className="animate-spin w-8 h-8 text-white/50 absolute" />
      </div>
    ); // Exibir um indicador de carregamento
  }

  if (!imovel) {
    return <div className="text-white">Erro ao carregar imóvel.</div>; // Exibir mensagem de erro
  }

  return (
    <div className={"relative w-full"}>
      <div key={imovel.id}>
        <Image
          src={`${
            imovel.attributes.fachada.data.attributes.url ||
            "/public/placeholder.jpg"
          }`}
          alt={"Fachada"}
          className={`object-cover transition h-[400px] w-full rounded-lg`}
          width={900}
          height={900}
          priority
        />

        <div
          className={`w-full absolute top-0 left-0 h-full bg-gradient-bg rounded-lg`}
        />

        <div className="w-full absolute bottom-0 p-5 flex flex-col gap-2">
          <h2 className="text-white font-bold text-3xl mb-4">
            {imovel.attributes.title}
          </h2>

          {/* RI  E BOOK*/}
          <div className="flex gap-2 w-full">
            {/* RI */}
            {imovel.attributes.materiais?.is_active &&
              imovel.attributes.materiais?.ri.data?.attributes.url && (
                <a
                  href={
                    imovel.attributes.materiais?.ri.data?.attributes.url || ""
                  }
                  target="_blank"
                  className="w-full"
                >
                  <Button
                    variant={"primary"}
                    size={"sm"}
                    className="flex items-center gap-3 w-full"
                  >
                    <DownloadIcon className="h-4" />
                    R.I
                  </Button>
                </a>
              )}

            {/* BOOK A3 */}
            {imovel.attributes.materiais?.is_active &&
              imovel.attributes.materiais?.a3.data && (
                <a
                  href={
                    imovel.attributes.materiais?.a3.data.attributes.url || ""
                  }
                  target="_blank"
                  className="w-full"
                >
                  <Button
                    variant={"primary"}
                    size={"sm"}
                    className="flex items-center gap-3 w-full"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    A3
                  </Button>
                </a>
              )}
          </div>

          {/* DOWNLOAD BUTTONS */}
          <div className="flex w-full gap-2">
            {/* BOOK FASE 1 */}
            {imovel.attributes.materiais?.is_active &&
              imovel.attributes.materiais?.fase_1.data && (
                <a
                  href={
                    imovel.attributes.materiais?.fase_1.data.attributes.url ||
                    ""
                  }
                  target="_blank"
                  className="w-full"
                >
                  <Button
                    variant={"primary"}
                    size={"sm"}
                    className="flex items-center gap-3 w-full"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    {!imovel.attributes.materiais?.fase_2 &&
                    !imovel.attributes.materiais?.fase_3
                      ? "FASE 1"
                      : "BOOK"}
                  </Button>
                </a>
              )}

            {/* BOOK FASE 2 */}
            {imovel.attributes.materiais?.is_active &&
              imovel.attributes.materiais?.fase_2.data && (
                <a
                  href={
                    imovel.attributes.materiais?.fase_2.data.attributes.url ||
                    ""
                  }
                  target="_blank"
                  className="w-full"
                >
                  <Button
                    variant={"primary"}
                    size={"sm"}
                    className="flex items-center gap-3 w-full"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    FASE 2
                  </Button>
                </a>
              )}

            {/* BOOK FASE 3 */}
            {imovel.attributes.materiais?.is_active &&
              imovel.attributes.materiais?.fase_3.data && (
                <a
                  href={
                    imovel.attributes.materiais?.fase_3.data.attributes.url ||
                    ""
                  }
                  target="_blank"
                  className="w-full"
                >
                  <Button
                    variant={"primary"}
                    size={"sm"}
                    className="flex items-center gap-3 w-full"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    FASE 3
                  </Button>
                </a>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
