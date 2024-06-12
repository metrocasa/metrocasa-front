'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { cn } from '@/lib/utils';

// SCHEMA
const formSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.string().regex(/^\d{2}\s\d{5}\-\d{4}$/),
  email: z.string().min(2).max(50),
});

// FORMAT PHONE NUMBER
const parseAndFormatPhoneNumber = (value: string) => {
  const unformattedValue = value.replace(/\D/g, '');
  const formattedValue = unformattedValue.replace(
    /(\d{2})(\d{5})(\d{4})/,
    '$1 $2-$3',
  );
  return formattedValue;
};

export const InitialForm = ({
  className,
  variant,
  name = true,
  email = true,
  phone = true,
  errorMessage = true,
  label = true,
  handleContinue,
}: {
  className?: string;
  variant?: 'default' | 'primary' | 'outline' | 'ghost' | null | undefined;
  name?: boolean;
  email?: boolean;
  phone?: boolean;
  errorMessage?: boolean;
  label?: boolean;
  handleContinue?: () => void;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  });

  // Update the `phone` field's value using the `parseAndFormatPhoneNumber` function
  const formattedPhone = form.watch('phone');
  const formattedPhoneValue = formattedPhone
    ? parseAndFormatPhoneNumber(formattedPhone)
    : '';

  function onSubmit(values: z.infer<typeof formSchema>) {
    const endpoint = process.env.NEXT_PUBLIC_ANAPRO_ENDPOINT as string;
    const key = process.env.NEXT_PUBLIC_ANAPRO_KEY;
    const canal_key = process.env.NEXT_PUBLIC_ANAPRO_CANAL_KEY;
    const campanha_key = process.env.NEXT_PUBLIC_ANAPRO_CAMPANHA_KEY;
    const key_integradora = process.env.NEXT_PUBLIC_ANAPRO_KEY_INTEGRADORA;
    const key_agencia = process.env.NEXT_PUBLIC_ANAPRO_KEY_AGENCIA;

    const body = {
      Key: key,
      CanalKey: canal_key,
      CampanhaKey: campanha_key,
      KeyIntegradora: key_integradora,
      KeyAgencia: key_agencia,
      PoliticaPrivacidadeKey: '',
      PessoaNome: values.name,
      PessoaEmail: values.email,

      PessoaTelefones: [
        {
          DDD: values.phone.slice(0, 2),
          Numero: values.phone.slice(3),
        },
      ],
    };

    // ENVIAR DADOS PARA O ANAPRO
    const postData = async () => {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        console.log('Form submitted successfully');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };
    postData();

    if (handleContinue) {
      handleContinue();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('flex gap-y-7 w-full', className)}
      >
        {/* Nome */}
        <div className="flex flex-col md:flex-row w-full gap-4">
          {name && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  {label && <FormLabel>Nome</FormLabel>}
                  <FormControl>
                    <Input placeholder="Maria dos Santos" {...field} />
                  </FormControl>

                  {errorMessage && <FormMessage />}
                </FormItem>
              )}
            />
          )}

          {/* Número de Contato */}
          {phone && (
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  {label && <FormLabel>Número de Contato</FormLabel>}
                  <FormControl>
                    <Input
                      placeholder="11 91234-5678"
                      {...field}
                      value={formattedPhoneValue}
                      onBlur={() => {
                        form.setValue(
                          'phone',
                          parseAndFormatPhoneNumber(formattedPhoneValue),
                          {
                            shouldValidate: true,
                          },
                        );
                      }}
                      maxLength={11}
                    />
                  </FormControl>

                  {errorMessage && <FormMessage />}
                </FormItem>
              )}
            />
          )}
        </div>

        {/* E-mail */}
        {email && (
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full md:w-auto">
                {label && <FormLabel>E-mail</FormLabel>}
                <FormControl>
                  <Input
                    placeholder="exemplo@email.com"
                    {...field}
                    type="email"
                  />
                </FormControl>
                {errorMessage && <FormMessage />}
              </FormItem>
            )}
          />
        )}

        <div className="w-full">
          <Button type="submit" variant={variant} className="w-full">
            Enviar
          </Button>
          <Button
            onClick={handleContinue}
            className="mt-4 text-center w-full"
            variant={'ghost'}
            type="button"
          >
            Quero continuar para o site
          </Button>
        </div>
      </form>
    </Form>
  );
};
