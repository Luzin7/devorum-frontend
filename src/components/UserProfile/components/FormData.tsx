import { useContext, type ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as S from './styleds';
import { UserDataContext } from '../../../contexts/userData';
import type UpdatePasswordProps from './schemas';
import { schemaUpdatePasswordForm } from './schemas/newPasswordSchema';

export default function FormData(): ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const { userData } = useContext(UserDataContext);
  const { name, contact } = userData;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UpdatePasswordProps>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    resolver: zodResolver(schemaUpdatePasswordForm),
    defaultValues: {
      userData: {
        password: '',
        passwordConfirm: '',
      },
    },
  });

  const handleEditStatusChange = (): void => {
    setIsEditOn(!isEditOn);
  };

  const handlePasswordChange = (data: UpdatePasswordProps): void => {
    setIsLoading(!isLoading);
    const { userData } = data;

    if (userData.password === userData.passwordConfirm)
      console.log('atualiza senha uooowuuuuuuowwwwwoooouuuuuu');

    setIsLoading(false);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <S.FormWrapper onSubmit={handleSubmit(handlePasswordChange)}>
      <h2 className="font-bold text-text text-2xl lg:text-3xl xl:text-4xl pt-10">
        Meus dados
      </h2>
      <div className="flex py-7 flex-col w-11/12 lg:w-3/4">
        <div className="flex py-7 gap-7 flex-col xl:flex-row">
          <S.InputField type="text" placeholder={name} disabled={true} />
          <S.InputField type="text" placeholder={contact} disabled={true} />
        </div>
        {isEditOn && (
          <>
            <S.InputField
              className="mb-7"
              type="password"
              placeholder="Nova senha"
              {...register('userData.password')}
            />
            {errors.userData?.password?.message != null && (
              <span className="text-red-400">
                {errors.userData?.password?.message}
              </span>
            )}
            <S.InputField
              type="password"
              placeholder="Cofirmar nova senha"
              {...register('userData.passwordConfirm')}
            />
            {errors.userData?.passwordConfirm?.message != null && (
              <span className="text-red-400">
                {errors.userData?.passwordConfirm?.message}
              </span>
            )}
          </>
        )}
        <S.Button
          type={isEditOn ? 'submit' : 'button'}
          className="mt-7"
          onClick={() => {
            isEditOn ? handlePasswordChange() : handleEditStatusChange();
          }}
        >
          {isEditOn ? 'Confirmar mudança' : 'Alterar minha senha'}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
