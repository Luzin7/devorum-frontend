import { useState, type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';

import { LOGIN } from '../../../utils/routePaths';
import { type registerProps, schemaRegisterForm } from './schemas';
import { handleRegisterSubmit } from './functions';
import * as S from './styleds';

export default function Register(): ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<registerProps>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    resolver: zodResolver(schemaRegisterForm),
    defaultValues: {
      userData: {
        name: '',
        contact: '',
        password: '',
      },
    },
  });

  const onSubmit = async (data: registerProps): Promise<void> => {
    console.log('chegou no registro inicial');
    setIsLoading(true);
    await handleRegisterSubmit(data);
    setIsLoading(false);

    navigate(LOGIN);
  };

  return (
    <S.FormWrapper
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="font-bold text-text text-2xl lg:text-3xl xl:text-4xl pt-10">
        Criar Conta
      </h2>
      <div className="flex py-7 flex-col w-11/12 lg:w-3/4">
        <div className="flex py-7 gap-7 flex-col xl:flex-row">
          <S.InputField
            type="text"
            placeholder="Nome"
            {...register('userData.name')}
          />
          {errors.userData?.name?.message != null && (
            <span className="text-red-400">
              {errors.userData?.name?.message}
            </span>
          )}
          <S.InputField
            type="text"
            placeholder="Usuário discord"
            {...register('userData.contact')}
          />
          {errors.userData?.contact?.message != null && (
            <span className="text-red-400">
              {errors.userData?.contact?.message}
            </span>
          )}
        </div>
        <S.InputField
          type="password"
          placeholder="Senha"
          {...register('userData.password')}
        />
        {errors.userData?.password?.message != null && (
          <span className="text-red-400">
            {errors.userData?.password?.message}
          </span>
        )}
        <S.Button type="submit" disabled={!!isLoading} className="mt-7">
          {isLoading ? 'Criando...' : 'Criar conta'}
        </S.Button>
      </div>
      <span className="my-8 text-primary underline text-lg hover:text-accent transition-colors">
        <Link to={LOGIN}>Já tenho uma conta</Link>
      </span>
    </S.FormWrapper>
  );
}
