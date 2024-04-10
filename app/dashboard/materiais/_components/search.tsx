'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { z } from 'zod';

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

import { useRouter } from 'next/navigation';

const formSchema = z.object({
  search: z.string(),
});

export const Search = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: '',
    },
  });

  // onSubmit Form
  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/dashboard/materiais?search=${values.search}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-lg flex flex-col md:flex-row items-center justify-center mx-auto gap-4 md:gap-8 bg-tertiary-black shadow-md md:px-0 w-full py-10"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full text-white">
              <FormLabel>Pesquisar</FormLabel>
              <FormControl>
                <Input
                  placeholder="Butantã, Real Parque, Lapa..."
                  {...field}
                  className="md:pr-14 md:w-full text-black"
                  type="search"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="primary"
          className="w-full md:w-[300px] md:-mb-8"
        >
          Pesquisar
        </Button>
      </form>
    </Form>
  );
};
