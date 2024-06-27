'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

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
import { HOME, REGISTER } from 'constants/localRoutePaths';
import { useLoading } from 'hooks/useLoading';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { userLoginData, userLoginSchema } from 'schemas/login';
import { login } from 'services/http/requests/api';
import { useUserStore } from 'store/user';
import { setStorageItem } from 'utils/localstorage';

export default function Login() {
  const { isLoading, setIsLoading } = useLoading();
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const form = useForm<userLoginData>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    criteriaMode: 'firstError',
    mode: 'onBlur'
  });

  const onSubmit = async (data: userLoginData) => {
    setIsLoading((prevState) => !prevState);
    try {
      const userData = await login(data);
      useUserStore.setState({
        userState: {
          user: {
            id: userData?.id,
            name: userData?.name,
            notifications: userData?.notifications
          }
        }
      });

      setStorageItem('u_i', {
        id: userData.id,
        name: userData.name
      });

      setIsLoading((prevState) => !prevState);
      router.push(HOME);
    } catch (error) {
      setIsLoading((prevState) => !prevState);
      setIsModalOpen((prev) => !prev);
    }
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
          Acessar Conta
        </h2>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite seu e-mail"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <Button type="submit" disabled={isLoading}>
          Acessar
        </Button>
        <Link
          href={REGISTER}
          className="text-center text-foreground underline hover:text-primary transition-colors"
        >
          Não tenho uma conta
        </Link>
      </FormWrapper>
    </Form>
  );
}
