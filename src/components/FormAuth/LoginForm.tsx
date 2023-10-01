'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as S from './styleds';
import Link from 'next/link';
import { REGISTER } from 'utils';
import { userLoginData, userLoginSchema } from 'schemas/login';

export function LoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<userLoginData>({
    resolver: zodResolver(userLoginSchema)
  });

  const onSubmit = async (data: userLoginData) => {
    setIsLoading((prevState) => !prevState);
    // ...requisicaoAqui
    // salvar dados do usuario no estado em após sucesso no login
    console.error(data); // deve retornar um array com todos os dados digitados corretamente e trasnformados
    setIsLoading((prevState) => !prevState);

    // redirecionar usuario para a home após sucesso no login
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {/* <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        btnMessage="Tentar novamente"
        description="A senha ou nome que você informou parecem não estarem corretas,
         verifique suas credenciais e tente novamente. Se o erro persistir chame o suporte."
        title="Algo deu errado!"
      /> */}
      <div className="flex py-7 gap-7 flex-col w-11/12 lg:w-3/4">
        <h2 className="font-bold text-text text-2xl lg:text-3xl xl:text-4xl pt-10">
          Acessar Conta
        </h2>
        <S.InputField
          type="email"
          placeholder="E-mail"
          {...register('email')}
        />
        {errors.email?.message !== undefined && (
          <S.Error errorMessage={errors.email.message} />
        )}
        <S.InputField
          type="password"
          placeholder="Senha"
          {...register('password')}
        />
        {errors.password?.message !== undefined && (
          <S.Error errorMessage={errors.password.message} />
        )}
        <S.Button type="submit" disabled={!!isLoading} isLoading={isLoading}>
          {isLoading ? 'Acessando...' : 'Acessar'}
        </S.Button>
      </div>
      <span className="my-8 text-primary underline text-lg hover:text-accent transition-colors ">
        <Link href={REGISTER}>Não tenho uma conta</Link>
      </span>
    </S.FormWrapper>
  );
}
