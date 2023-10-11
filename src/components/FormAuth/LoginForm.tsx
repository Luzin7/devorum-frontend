'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as S from './styleds';
import * as GS from '@styles/globalStyledComponents';
import Link from 'next/link';
import { HOME, REGISTER } from 'utils';
import { userLoginData, userLoginSchema } from 'schemas/login';
import { useLoading } from 'hooks/useLoading';
import { login } from 'services/http/requests/api';
import { useUserStore } from 'store/user';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const { isLoading, setIsLoading } = useLoading();
  const { actions } = useUserStore();
  const router = useRouter();

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
    const userData = await login(data);

    // ADICIONAR LOGICA PARA MODAL EM CASO DE ERRO

    actions.updateUser({
      name: userData?.name,
      notifications: userData?.notifications,
      id: userData?.id
    });

    setIsLoading((prevState) => !prevState);
    router.push(HOME);
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
      <div className="flex py-7 gap-7 bg flex-col w-11/12 lg:w-3/4">
        <h2 className="font-bold text-text text-2xl lg:text-3xl xl:text-4xl pt-10">
          Acessar Conta
        </h2>
        <S.InputField
          type="email"
          placeholder="E-mail"
          {...register('email')}
          autoComplete="email"
        />
        {errors.email?.message !== undefined && (
          <GS.Error errorMessage={errors.email.message} />
        )}
        <S.InputField
          type="password"
          placeholder="Senha"
          {...register('password')}
          autoComplete="current-password"
        />
        {errors.password?.message !== undefined && (
          <GS.Error errorMessage={errors.password.message} />
        )}
        <GS.Button type="submit" disabled={!!isLoading} isLoading={isLoading}>
          {isLoading ? 'Acessando...' : 'Acessar'}
        </GS.Button>
      </div>
      <span className="my-8 text-primary underline text-lg hover:text-accent transition-colors ">
        <Link href={REGISTER}>Não tenho uma conta</Link>
      </span>
    </S.FormWrapper>
  );
}
