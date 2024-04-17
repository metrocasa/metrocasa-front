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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { regions } from '@/constants';

const formSchema = z.object({
  region: z.string(),
  status: z.string(),
  search: z.string(),
  zone: z.string(),
});

export const Filter = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      region: '',
      status: '',
      search: '',
      zone: '',
    },
  });

  // onSubmit Form
  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(
      `/empreendimentos?region=${values.region}&status=${values.status}&search=${values.search}`,
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row items-center justify-center mx-auto gap-4 md:gap-8 bg-white  py-14 px-[45px] md:px-0"
      >
        <FormField
          control={form.control}
          name="region"
          render={({ field }) => (
            <FormItem className="w-full md:max-w-[220px]">
              <FormLabel>Região</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger aria-label={'Selecione a Região'}>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {regions.map((item, i) => (
                    <SelectItem
                      key={i}
                      value={item === 'Selecione' ? '' : item}
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="w-full md:max-w-[220px]">
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger aria-label="Selecione o Status">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value=" ">Selecione...</SelectItem>
                  <SelectItem value="Lançamento">Lançamento</SelectItem>
                  <SelectItem value="Em Obras">Em Obras</SelectItem>
                  <SelectItem
                    aria-label="Pronto Para Morar"
                    value="Pronto para Morar"
                  >
                    Pronto para Morar
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full md:w-[300px]">
              <FormLabel>Pesquisar</FormLabel>
              <FormControl>
                <Input
                  placeholder="Butantã, Real parque, Butantã..."
                  {...field}
                  className="md:pr-14 md:w-full"
                  type="search"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="primary" className="self-end px-8">
          Pesquisar
        </Button>
      </form>
    </Form>
  );
};
