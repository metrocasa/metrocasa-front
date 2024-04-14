import React, { useState } from "react";

import Cookies from "js-cookie";
import { redirect, usePathname, useRouter } from "next/navigation";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import axios from "axios";
import { User, useUser } from "@/contexts/user-context";
import { revalidatePath } from "next/cache";
import { Loader2Icon } from "lucide-react";

// DECODANDO O JWT PARA PEGARE O ID DO USUARIO
import * as jose from "jose";

const jwt: string | undefined = Cookies.get("session");

if (jwt) {
  const decoded = jose.decodeJwt(jwt);
  console.log(decoded.id);
} else {
  console.log("JWT not found in cookies");
}

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const formSchema = z.object({
  profile_image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Apenas formatos .jpg, .jpeg, .png and .webp são suportados."
    ),
});

export const EditImage = () => {
  const path = usePathname();
  const isDashboardPage = path.startsWith("/dashboard");

  const [loading, setLoading] = useState(false);

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profile_image: null,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    try {
      const authorizationToken = isDashboardPage
        ? Cookies.get("session")
        : process.env.NEXT_PUBLIC_API_TOKEN_IMOVEIS;

      const config = {
        headers: {
          Authorization: `Bearer ${authorizationToken}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const data = new FormData();

      if (values.profile_image) {
        data.append("files.profile_image", values.profile_image[0]);
      }

      // Enviando a requisição
      const response = await axios.put<User>(
        `${BASE_URL}/api/users-permissions/users/me`,
        data,
        config
      );

      // Verificamos se a requisição foi bem-sucedida
      if (response.status === 200) {
        revalidatePath("/dashboard/profile");
        redirect("/dashboard/profile");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Profile Image */}
        <FormField
          control={form.control}
          name="profile_image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagem de Perfil</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    if (event.target.files) {
                      field.onChange(event.target.files[0]);
                    }
                  }}
                  onBlur={field.onBlur}
                  ref={field.ref}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="primary"
          className={loading ? "bg-main-red/50 pointer-events-none" : ""}
        >
          {loading ? (
            <Loader2Icon className="text-white w-5 h-5 animate-spin " />
          ) : (
            "Salvar"
          )}
        </Button>
      </form>
    </Form>
  );
};
