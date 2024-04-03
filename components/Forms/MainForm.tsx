'use client';

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

import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { zonas } from '@/constants';

// SCHEMA
const formSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.string().regex(/^\d{2}\s\d{5}\-\d{4}$/),
  email: z.string().min(2).max(50),
  rendaMensal: z.string().min(2).max(50),
  regiaoDeInteresse: z.string().min(2).max(50),
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

export const MainForm = ({
  className,
  variant,
  name,
  email,
  phone,
  rendaMensal,
  regiaoDeInteresse,
  errorMessage,
  label,
}: {
  className?: string;
  variant?: 'default' | 'primary' | 'outline' | 'ghost' | null | undefined;
  name?: boolean;
  email?: boolean;
  phone?: boolean;
  rendaMensal?: boolean;
  regiaoDeInteresse?: boolean;
  errorMessage?: boolean;
  label?: boolean;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      regiaoDeInteresse: '',
    },
  });

  // Update the `phone` field's value using the `parseAndFormatPhoneNumber` function
  const formattedPhone = form.watch('phone');
  const formattedPhoneValue = formattedPhone
    ? parseAndFormatPhoneNumber(formattedPhone)
    : '';

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('flex gap-y-7 w-full', className)}
      >
        {/* Nome */}
        {name && (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full md:w-auto">
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
              <FormItem className="w-full md:w-auto">
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

        {/* Renda Mensal */}
        {rendaMensal && (
          <FormField
            control={form.control}
            name="rendaMensal"
            render={({ field }) => (
              <FormItem className="w-full md:w-auto">
                {label && <FormLabel>Renda Mensal</FormLabel>}
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Abaixo de 2 Mil">
                      Abaixo de 2 Mil
                    </SelectItem>
                    <SelectItem value="De 2 a 4 Mil">De 2 a 4 Mil</SelectItem>
                    <SelectItem value="De 4 a 6 Mil">De 4 a 6 Mil</SelectItem>
                    <SelectItem value="De 6 a 8 Mil">De 6 a 8 Mil</SelectItem>
                    <SelectItem value="Acima de 8 Mil">
                      Acima de 8 Mil
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errorMessage && <FormMessage />}
              </FormItem>
            )}
          />
        )}

        {/* Região de Interesse */}
        {regiaoDeInteresse && (
          <FormField
            control={form.control}
            name="regiaoDeInteresse"
            render={({ field }) => (
              <FormItem className="w-full md:w-auto">
                {label && <FormLabel>Região de Interesse</FormLabel>}
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {zonas.map((zona, i) => (
                      <SelectItem key={i} value={zona}>
                        {zona}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errorMessage && <FormMessage />}
              </FormItem>
            )}
          />
        )}

        <Button type="submit" variant={variant} className="self-end">
          Enviar
        </Button>
      </form>
    </Form>
  );
};

MainForm.defaultProps = {
  name: true,
  email: true,
  phone: true,
  rendaMensal: true,
  regiaoDeInteresse: true,
  errorMessage: true,
  label: true,
};
