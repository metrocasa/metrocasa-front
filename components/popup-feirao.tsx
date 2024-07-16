"use client";

import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import Image from "next/image";

import { InitialForm } from "./forms/initial";
import { useFeirao, useImoveis } from "@/utils/queries";
import { Loading } from "./loading";

// DIALOG
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FeiraoProps } from "@/types/global";
import { useFeiraoPopup } from "@/stores/feirao-store";

const PopupFeirao = () => {
  const { isOpen, onClose, onOpen } = useFeiraoPopup();

  const route = useRouter();

  const handleContinue = () => {
    Cookies.set("ft", "false", { expires: 1 });
    route.refresh();
  };

  // Get feirão Query
  const feirao = useFeirao();
  const imageUrl = feirao.data?.data?.attributes.imagem.data.attributes
    .url as string;

  const firstTime = Cookies.get("ft");

  return (
    <Dialog defaultOpen={!firstTime} onOpenChange={onClose} open={isOpen}>
      <DialogContent className="flex md:max-w-[80%] md:h-[80%] p-0 border-none ">
        {/* LEFT */}
        <div className="hidden lg:block h-full w-full md:w-[50%] ">
          <Image
            src={imageUrl ?? "/feirao/feirao-default.jpeg"}
            width={900}
            height={900}
            alt="Banner Feirão Metrocasa"
            className="w-full h-[100%] object-cover object-start rounded-md"
            priority
          />
        </div>

        {/* RIGHT */}
        <div className="h-full w-full lg:w-[50%] p-10 items-center justify-center flex flex-col gap-4">
          <Image
            src={"/logo-red.svg"}
            width={200}
            height={200}
            alt="Logo Metrocasa"
          />

          <h1 className="text-3xl text-center">
            {feirao.data?.data.attributes.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: feirao.data?.data.attributes.description || "",
            }}
          />
          <InitialForm
            className="flex-col gap-4"
            handleContinue={handleContinue}
            variant={"primary"}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopupFeirao;
