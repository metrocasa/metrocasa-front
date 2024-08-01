import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import authActions from "@/actions/auth-actions";

const LoginPage = () => {
  return (
    <div className="w-full flex justify-center items-center min-w-[400px]">
      <form action={authActions.login}>
        <Card className="md:min-w-[400px]">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Insira suas informações para fazer login.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="mail@metrocasa.com.br"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" type="submit">
              Login
            </Button>
            {/* <div className="mt-4 text-center text-sm">
              Não tem uma conta?{' '}
              <Link href="/dashboard/sign-up" className="underline">
                Cadastre-se
              </Link>
            </div> */}
            {/* <div className="mt-4 text-center text-sm">
              <Link href="/dashboard/forgot-password" className="underline">
                Esqueci minha senha 😭
              </Link>
            </div> */}
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default LoginPage;
