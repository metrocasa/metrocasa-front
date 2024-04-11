import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import authActions from '@/actions/auth-actions';

const LoginPage = () => {
  return (
    <div className="w-full flex justify-center items-center min-w-[400px]">
      <form action={authActions.resetPassword}>
        <Card className="md:min-w-[400px]">
          <CardHeader>
            <CardTitle className="text-2xl">Resetar minha senha</CardTitle>
            <CardDescription>Insira suas informações.</CardDescription>
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
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" type="submit">
              Enviar email
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default LoginPage;
