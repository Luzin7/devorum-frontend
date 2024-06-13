'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import Modal from '@components/Modal';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import * as GS from '@styles/globalStyledComponents';
import { HOME, REGISTER } from 'constants/localRoutePaths';
import { setLocalStorage } from 'functions';
import { useLoading } from 'hooks/useLoading';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { userLoginData, userLoginSchema } from 'schemas/login';
import { login } from 'services/http/requests/api';
import { useUserStore } from 'store/user';
import * as S from './styleds';

export function LoginForm() {
  const { isLoading, setIsLoading } = useLoading();
  const { actions } = useUserStore();
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<userLoginData>({
    resolver: zodResolver(userLoginSchema)
  });

  const onSubmit = async (data: userLoginData) => {
    setIsLoading((prevState) => !prevState);
    try {
      const userData = await login(data);
      actions.updateUser({
        name: userData?.name,
        notifications: userData?.notifications,
        id: userData?.id
      });

      setLocalStorage({
        storageKey: 'u_i',
        storageContent: {
          id: userData.id,
          name: userData.name
        }
      });

      setIsLoading((prevState) => !prevState);
      router.push(HOME);
    } catch (error) {
      setIsLoading((prevState) => !prevState);
      setIsModalOpen((prev) => !prev);
    }
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        btnMessage="Tentar novamente"
        description="A senha ou email que você informou parecem incorretos,
         verifique suas credenciais e tente novamente."
        title="Algo deu errado!"
      />
      <div className="flex py-7 gap-7 bg flex-col w-11/12 lg:w-3/4">
        <h2 className="font-bold text-text text-2xl lg:text-3xl xl:text-4xl pt-10">
          Acessar Conta
        </h2>
        <Input
          type="email"
          placeholder="E-mail"
          {...register('email')}
          autoComplete="email"
        />
        {errors.email?.message !== undefined && (
          <GS.Error errorMessage={errors.email.message} />
        )}
        <Input
          type="password"
          placeholder="Senha"
          {...register('password')}
          autoComplete="current-password"
        />
        {errors.password?.message !== undefined && (
          <GS.Error errorMessage={errors.password.message} />
        )}
        <Button variant="default" type="submit" disabled={!!isLoading}>
          {isLoading ? 'Acessando...' : 'Acessar'}
        </Button>
      </div>
      <span className="my-8 text-primary underline text-lg hover:text-accent transition-colors ">
        <Link href={REGISTER}>Não tenho uma conta</Link>
      </span>
    </S.FormWrapper>
  );
}
