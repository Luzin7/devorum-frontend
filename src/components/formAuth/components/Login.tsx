import { useState, type ReactElement, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';

import { HOME, REGISTER } from '../../../utils/routePaths';
import { type loginProps, schemaLoginForm } from './schemas';
import { handleLoginSubmit } from './functions';
import { UserDataContext } from '../../../contexts/userData';
import * as S from './styleds';

export default function Login(): ReactElement {
  const { setUserData } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginProps>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    resolver: zodResolver(schemaLoginForm),
    defaultValues: {
      userData: {
        name: '',
        password: '',
      },
    },
  });

  const onSubmit = async (data: loginProps): Promise<void> => {
    setIsLoading(!isLoading);

    const result = await handleLoginSubmit(data);

    if (!result.success) {
      console.log(result.message);
      setIsLoading(false);
    }

    if (result.success && result.user !== undefined) {
      setUserData(result.user);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('l_storage.user_info', JSON.stringify(result.user));

      setIsLoading(false);

      navigate(HOME);
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-bold text-text text-2xl lg:text-3xl xl:text-4xl pt-10">
        Acessar Conta
      </h2>
      <div className="flex py-7 gap-7 flex-col w-11/12 lg:w-3/4">
        <S.InputField
          type="text"
          placeholder="Nome"
          {...register('userData.name')}
        />
        {errors.userData?.name?.message != null && (
          <span className="text-red-400">{errors.userData?.name?.message}</span>
        )}
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
        <S.Button type="submit" disabled={!!isLoading}>
          {isLoading ? 'Acessando...' : 'Entrar'}
        </S.Button>
      </div>
      <span className="my-8 text-primary underline text-lg hover:text-accent transition-colors ">
        <Link to={REGISTER}>Não tenho uma conta</Link>
      </span>
    </S.FormWrapper>
  );
}
