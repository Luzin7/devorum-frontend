import { useState, type ReactElement, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';

import { HOME, REGISTER } from '../../../utils/routePaths';
import { type loginProps, schemaLoginForm } from './schemas';
import { handleLoginSubmit } from './functions';
import { UserDataContext } from '../../../contexts/userData';
import * as S from './styleds';
import Modal from '../../Modal';

export default function Login(): ReactElement {
  const { setUserData, setIsUserLoggedIn } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(true);

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
      setIsLoading(false);
      setIsSuccess(!isSuccess);
      setIsModalOpen(!isModalOpen);
    }

    if (result.success && result.user !== undefined) {
      setUserData(result.user);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('l_storage.user_info', JSON.stringify(result.user));
      setIsUserLoggedIn(true);

      setIsLoading(false);

      navigate(HOME);
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        btnMessage="Tentar novamente"
        description="A senha ou nome que você informou parecem não estarem corretas,
         verifique suas credenciais e tente novamente. Se o erro persistir chame o suporte."
        title="Algo deu errado!"
      />
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
