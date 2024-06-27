'use client';

import Modal from '@components/Modal';
import { Button } from '@components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormWrapper
} from '@components/ui/form';
import { Input } from '@components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { LOGIN } from 'constants/localRoutePaths';
import { useLoading } from 'hooks/useLoading';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { userRegisterData, userRegisterSchema } from 'schemas/register';
import { createUser } from 'services/http/requests/api';

export default function Register() {
  const router = useRouter();
  const { isLoading, setIsLoading } = useLoading();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const form = useForm<userRegisterData>({
    resolver: zodResolver(userRegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    criteriaMode: 'firstError',
    mode: 'onBlur'
  });

  const onSubmit = async (data: userRegisterData) => {
    setIsLoading((prevState) => !prevState);
    await createUser(data);
    setIsLoading((prevState) => !prevState);
    router.push(LOGIN);
  };

  return (
    <Form {...form}>
      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        btnMessage="Entendi"
        description="A senha ou email que você informou parecem incorretos,
       verifique suas credenciais e tente novamente."
        title="Algo deu errado!"
      />
      <FormWrapper
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 h-[83vh]"
      >
        <h2 className="text-center scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">
          Criar Conta
        </h2>
        <div className="flex space-y-4 flex-col xl:flex-row xl:space-y-0 xl:justify-between xl:gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite seu nome"
                    type="text"
                    autoComplete="given-name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite seu e-mail"
                    type="email"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite sua senha"
                  autoComplete="current-password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!!isLoading}>
          {isLoading ? 'Criando...' : 'Criar conta'}
        </Button>
        <Link
          href={LOGIN}
          className="text-center text-foreground underline hover:text-primary transition-colors"
        >
          Já tenho uma conta
        </Link>
      </FormWrapper>
    </Form>
  );
}
