import React from 'react';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import authActions from '@/actions/auth-actions';

const SignUpPage = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <form action={authActions.createAccount}>
        <Card className="min-w-[400px]">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Insira as informações da sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username">Nome</Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="Fernanda Souza"
                  required
                />
              </div>

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
                  placeholder="**********"
                />
              </div>
              <Button type="submit" className="w-full">
                Criar Conta
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Já tem uma conta?{' '}
              <Link href="/dashboard/sign-in" className="underline">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default SignUpPage;
