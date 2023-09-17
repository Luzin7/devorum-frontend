import { useState, type ReactElement, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { questionSubmit } from './functions';
import * as S from './styleds';
import { type questionProps, questionSchema } from './schemas/questionSchema';
import { UserDataContext } from '../../../contexts/userData';
import Modal from '../../Modal';

export default function FormQuestion(): ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { userData } = useContext(UserDataContext);

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
    const result = await questionSubmit(data, userData.id);

    if (result.success) {
      setIsSuccess(!isSuccess);
      setIsLoading(false);
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <S.FormWrapper
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >
      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        btnMessage={isSuccess ? 'Ok' : 'Tentar novamente'}
        description={
          isSuccess
            ? 'Seu tópico foi publicado com sucesso! Se sinta livre para publicar outra vez a qualquer momento.'
            : `Ocorreu um erro ao publicar seu tópico. Verifique se não deixou nada vazio ou adicionou
             caracteres inválidos e tente novamente.`
        }
        title={isSuccess ? 'Sucesso! 😍' : 'Ah não! 😭'}
      />
      <h2 className="font-bold text-text text-2xl lg:text-3xl xl:text-4xl pt-10">
        Publicar Tópico
      </h2>
      <div className="flex py-7 flex-col gap-7 w-11/12 lg:w-3/4">
        <S.InputField
          type="text"
          placeholder="Título do tópico"
          {...register('userData.title')}
        />
        {errors.userData?.title?.message != null && (
          <span className="text-red-400">
            {errors.userData?.title?.message}
          </span>
        )}
        <S.textArea
          rows={4}
          {...register('userData.question')}
          placeholder="Digite o conteúdo do seu tópico aqui"
        ></S.textArea>
        {errors.userData?.question?.message != null && (
          <span className="text-red-400">
            {errors.userData?.question?.message}
          </span>
        )}
        <S.Button
          type="submit"
          disabled={!!isLoading}
          className={isLoading ? 'mt-7 animate-pulse' : 'mt-7'}
        >
          {isLoading ? 'Publicando...' : 'Publicar pergunta'}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
