"use client";

import React from "react";

import { useUser } from "@/contexts/user-context";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditProfile } from "./_components/edit-profile";
import Image from "next/image";
import { EditImage } from "./_components/edit-image";

const Profile = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { user } = useUser();
  return (
    <section className="bg-tertiary-black w-full lg:pl-[400px] min-h-screen n md:p-14 p-10">
      <div className="w-full h-full items-center justify-center flex flex-col gap-5">
        <h1>INFORMATION</h1>
        <Image
          src={
            user?.profile_image?.url
              ? `${BASE_URL}${user?.profile_image?.url}`
              : "/user-icon.svg"
          }
          alt={"Perfil"}
          className={`object-cover transition h-[170px] w-[170px] rounded-full`}
          width={900}
          height={900}
          priority
        />
        <h2 className="text-white">{user?.username}</h2>
        {/*TODO: EDITAR IMAGE */}
        <Dialog>
          <DialogTrigger className="text-white p-3 px-5 bg-main-red rounded ">
            Editar perfil
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar Perfil</DialogTitle>
              <DialogDescription>
                <EditImage />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* EDITAR PERFIL */}
        <Dialog>
          <DialogTrigger className="text-white p-3 px-5 bg-main-red rounded ">
            Editar Informações
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar Informações</DialogTitle>
              <DialogDescription>
                <EditProfile />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Profile;
