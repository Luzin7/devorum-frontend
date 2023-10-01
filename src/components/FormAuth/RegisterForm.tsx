'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LOGIN } from 'utils';
import Link from 'next/link';
import * as S from './styleds';
import * as GS from '@styles/globalStyledComponents';
import { userRegisterData, userRegisterSchema } from 'schemas/register';
import { useLoading } from 'hooks/useLoading';

export function RegisterForm() {
  const { isLoading, setIsLoading } = useLoading();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<userRegisterData>({ resolver: zodResolver(userRegisterSchema) });

  const onSubmit = async (data: userRegisterData) => {
    setIsLoading((prevState) => !prevState);
    // ...requisicaoAqui
    console.error(data); // deve retornar um array de objetos com todos os dados digitados corretamente e trasnformados
    setIsLoading((prevState) => !prevState);
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="flex py-7 flex-col w-11/12 lg:w-3/4">
        <h2 className="font-bold text-text text-2xl lg:text-3xl xl:text-4xl pt-10">
          Criar Conta
        </h2>
        <div className="flex py-7 gap-7 flex-col xl:flex-row">
          <S.InputField
            type="text"
            placeholder="Seu nome"
            {...register('name')}
            autoComplete="true"
          />
          {errors.name?.message !== undefined && (
            <GS.Error errorMessage={errors.name.message} />
          )}
          <S.InputField
            type="email"
            placeholder="E-mail"
            autoComplete="true"
            {...register('email')}
          />
          {errors.email?.message !== undefined && (
            <GS.Error errorMessage={errors.email.message} />
          )}
        </div>
        <S.InputField
          type="password"
          placeholder="Senha"
          autoComplete="false"
          {...register('password')}
        />
        {errors.password?.message !== undefined && (
          <GS.Error errorMessage={errors.password.message} />
        )}
        <GS.Button type="submit" disabled={!!isLoading} isLoading={isLoading}>
          {isLoading ? 'Criando...' : 'Criar conta'}
        </GS.Button>
      </div>
      <span className="my-8 text-primary underline text-lg hover:text-accent transition-colors">
        <Link href={LOGIN}>Já tenho uma conta</Link>
      </span>
    </S.FormWrapper>
  );
}
