import React, { useState } from 'react';

import Cookies from 'js-cookie';
import { redirect, usePathname, useRouter } from 'next/navigation';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import axios from 'axios';
import { User, useUser } from '@/contexts/user-context';
import { revalidatePath } from 'next/cache';
import { Loader2Icon } from 'lucide-react';

const formSchema = z.object({
  username: z.string(),

  password: z.string(),
});

export const EditProfile = () => {
  const path = usePathname();
  const isDashboardPage = path.startsWith('/dashboard');

  const [loading, setLoading] = useState(false);

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    // UPDATE USER
    try {
      const authorizationToken = isDashboardPage
        ? Cookies.get('session')
        : process.env.NEXT_PUBLIC_API_GENERAL_TOKEN;

      const config = {
        headers: {
          Authorization: `Bearer ${authorizationToken}`,
        },
      };

      const data: { username?: string; password?: string } = {};

      if (values.username) {
        data.username = values.username;
      }

      if (values.password) {
        data.password = values.password;
      }

      const response = await axios.put<User>(
        `${BASE_URL}/api/users-permissions/users/me`,
        data,
        config,
      );
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
      revalidatePath('/dashboard/profile');
      redirect('/dashboard/profile');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* USERNAME */}
        {/* <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo</FormLabel>
              <FormControl>
                <Input placeholder="Fernanda Souza" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nova Senha</FormLabel>
              <FormControl>
                <Input placeholder="********" {...field} required={false} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="primary"
          className={loading ? 'bg-main-red/50 pointer-events-none' : ''}
        >
          {loading ? (
            <Loader2Icon className="text-white w-5 h-5 animate-spin " />
          ) : (
            'Salvar'
          )}
        </Button>
      </form>
    </Form>
  );
};
