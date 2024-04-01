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
});

const Filter = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      region: '',
      status: '',
      search: '',
    },
  });

  // onSubmit Form
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push(
      `/empreendimentos?region=${values.region}&status=${values.status}&search=${values.search}`,
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center justify-center mx-auto gap-8 bg-white shadow-md p-7"
      >
        <FormField
          control={form.control}
          name="region"
          render={({ field }) => (
            <FormItem className="w-full max-w-[220px]">
              <FormLabel>Região</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {regions.map((item) => (
                    <SelectItem value={item}>{item}</SelectItem>
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
            <FormItem className="w-full max-w-[220px]">
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Lançamento">Lançamento</SelectItem>
                  <SelectItem value="Em Obras">Em Obras</SelectItem>
                  <SelectItem value="Pronto para Morar">
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
            <FormItem>
              <FormLabel>Pesquisar...</FormLabel>
              <FormControl>
                <Input
                  placeholder="Butantã, Real parque..."
                  {...field}
                  className="pr-14"
                  type="search"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="primary" className="self-end px-8">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default Filter;
