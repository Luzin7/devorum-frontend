import { useState, type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { questionSubmit } from './functions';
import * as S from './styleds';
import { type questionProps, questionSchema } from './schemas/questionSchema';

export default function FormQuestion(): ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<questionProps>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    resolver: zodResolver(questionSchema),
    defaultValues: {
      userData: {
        title: '',
        question: '',
      },
    },
  });

  const onSubmit = async (data: questionProps): Promise<void> => {
    setIsLoading(true);
    await questionSubmit(data);
    setIsLoading(false);
  };

  return (
    <S.FormWrapper
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="font-bold text-text text-2xl lg:text-3xl xl:text-4xl pt-10">
        Perguntar
      </h2>
      <div className="flex py-7 flex-col gap-7 w-11/12 lg:w-3/4">
        <S.InputField
          type="text"
          placeholder="Título da pergunta"
          {...register('userData.title')}
        />
        {errors.userData?.title?.message != null && (
          <span className="text-red-400">
            {errors.userData?.title?.message}
          </span>
        )}
        <S.InputField
          type="text"
          placeholder="Sua pergunta"
          {...register('userData.question')}
        />
        {errors.userData?.question?.message != null && (
          <span className="text-red-400">
            {errors.userData?.question?.message}
          </span>
        )}

        <S.Button type="submit" disabled={!!isLoading} className="mt-7">
          {isLoading ? 'Publicando...' : 'Publicar pergunta'}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
