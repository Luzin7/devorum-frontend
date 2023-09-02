import { useState, type ReactElement, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';

import { HOME, REGISTER } from '../../../utils/routePaths';
import { type loginProps, schemaLoginForm } from './schemas';
import { handleLoginSubmit } from './functions';
import { UserDataContext } from '../../../contexts/userData';

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
    setIsLoading(true);

    const result = await handleLoginSubmit(data);

    if (!result.success) {
      console.log(result.message);
    }

    if (result.user !== undefined) {
      setUserData(result.user);
    }
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('l_storage.pub_info', JSON.stringify(result.user));

    setIsLoading(false);

    navigate(HOME);
  };

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-evenly w-11/12  md:w-10/12 lg:w-6/12 xl:w-11/12 2xl:w-6/12
    text-center bg-[#350C4040] rounded-3xl"
    >
      <h2 className="font-bold text-text text-2xl lg:text-3xl xl:text-4xl pt-10">
        Acessar Conta
      </h2>
      <div className="flex py-7 gap-7 flex-col w-11/12 lg:w-3/4">
        <input
          type="text"
          placeholder="Nome"
          className="w-full rounded-2xl py-4 px-6 placeholder:opacity-70 placeholder:text-black
             bg-input border-transparent border-2 transition-colors focus:border-accent focus:border-2 outline-none
              text-black bg-opacity-70"
          {...register('userData.name')}
        />
        {errors.userData?.name?.message != null && (
          <span className="text-red-400">{errors.userData?.name?.message}</span>
        )}
        <input
          type="password"
          placeholder="Senha"
          className="w-full rounded-2xl py-4 px-6 placeholder:opacity-70 placeholder:text-black
          bg-input border-transparent border-2 transition-colors focus:border-accent focus:border-2 outline-none
           text-black bg-opacity-70"
          {...register('userData.password')}
        />
        {errors.userData?.password?.message != null && (
          <span className="text-red-400">
            {errors.userData?.password?.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="font-bold py-4 w-11/12 lg:w-3/4
         bg-secondary rounded-full text-xl transition-colors focus:text-primary"
        disabled={!!isLoading}
      >
        {isLoading ? 'Acessando...' : 'Entrar'}
      </button>
      <span className="my-8 text-primary underline text-lg hover:text-accent transition-colors ">
        <Link to={REGISTER}>Não tenho uma conta</Link>
      </span>
    </form>
  );
}
