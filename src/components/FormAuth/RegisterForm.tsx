'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LOGIN } from 'utils';
import Link from 'next/link';
import * as S from './styleds';
import * as GS from '@styles/globalStyledComponents';
import { userRegisterData, userRegisterSchema } from 'schemas/register';
import { useLoading } from 'hooks/useLoading';
import { createUser } from 'services/http/requests/api';
import { useRouter } from 'next/navigation';

export function RegisterForm() {
  const router = useRouter();
  const { isLoading, setIsLoading } = useLoading();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<userRegisterData>({ resolver: zodResolver(userRegisterSchema) });

  const onSubmit = async (data: userRegisterData) => {
    setIsLoading((prevState) => !prevState);
    await createUser(data);
    setIsLoading((prevState) => !prevState);
    router.push(LOGIN);
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="flex py-7 gap-7 flex-col w-11/12 lg:w-3/4">
        <h2 className="font-bold text-text text-2xl lg:text-3xl xl:text-4xl pt-10">
          Criar Conta
        </h2>
        <div className="flex gap-7 flex-col xl:flex-row">
          <S.InputField
            type="text"
            placeholder="Seu nome"
            {...register('name')}
            autoComplete="given-name"
          />
          {errors.name?.message !== undefined && (
            <GS.Error errorMessage={errors.name.message} />
          )}
          <S.InputField
            type="email"
            placeholder="E-mail"
            autoComplete="email"
            {...register('email')}
          />
          {errors.email?.message !== undefined && (
            <GS.Error errorMessage={errors.email.message} />
          )}
        </div>
        <S.InputField
          type="password"
          placeholder="Senha"
          autoComplete="new-password"
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
