import { useState, type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';

import { LOGIN } from '../../../utils/routePaths';
import { type registerProps, schemaRegisterForm } from './schemas';
import { handleRegisterSubmit } from './functions';

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
    setIsLoading(true);
    await handleRegisterSubmit(data);
    setIsLoading(false);

    navigate(LOGIN);
  };

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-evenly w-11/12  md:w-10/12 lg:w-6/12 xl:w-11/12 2xl:w-6/12
    text-center bg-[#350C4040] rounded-3xl"
    >
      <h2 className="font-bold text-text text-2xl lg:text-3xl xl:text-4xl pt-10">
        Criar Conta
      </h2>
      <div className="flex py-7 flex-col w-11/12 lg:w-3/4">
        <div className="flex py-7 gap-7 flex-col xl:flex-row">
          <input
            type="text"
            placeholder="Nome"
            className="w-full rounded-2xl py-4 px-6 placeholder:opacity-70 placeholder:text-black
             bg-input border-transparent border-2 transition-colors focus:border-accent focus:border-2 outline-none
              text-black bg-opacity-70"
            {...register('userData.name')}
          />
          {errors.userData?.name?.message != null && (
            <span className="text-red-400">
              {errors.userData?.name?.message}
            </span>
          )}
          <input
            type="text"
            placeholder="Usuário discord"
            className="w-full rounded-2xl py-4 px-6 placeholder:opacity-70 placeholder:text-black
          bg-input border-transparent border-2 transition-colors focus:border-accent focus:border-2 outline-none
           text-black bg-opacity-70"
            {...register('userData.contact')}
          />
          {errors.userData?.contact?.message != null && (
            <span className="text-red-400">
              {errors.userData?.contact?.message}
            </span>
          )}
        </div>
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
         bg-secondary rounded-full text-xl transition-colors focus:text-accent hover:text-primary"
        disabled={!!isLoading}
      >
        {isLoading ? 'Criando...' : 'Criar conta'}
      </button>
      <span className="my-8 text-primary underline text-lg hover:text-accent transition-colors">
        <Link to={LOGIN}>Já tenho uma conta</Link>
      </span>
    </form>
  );
}
