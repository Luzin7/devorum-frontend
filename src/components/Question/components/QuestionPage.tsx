/* eslint-disable @typescript-eslint/no-misused-promises */
import { useContext, type ReactElement } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { BiSolidSend } from 'react-icons/bi';

import * as S from './styleds';
import { QuestionDetails } from './QuestionDetails';
import Comments from './Comments';
import { useGetQuestionComments } from '../../../hooks/getQuestionComments';
import { useGetQuestionById } from '../../../hooks/getQuestionById';
import { schemaCommentForm } from './schemas';
import { type commentProps } from './schemas/commentSchema';
import handleCommentSubmit from './functions/commentSubmit';
import { UserDataContext } from '../../../contexts/userData';
import { LOGIN } from '../../../utils/routePaths';

export function QuestionPage(): ReactElement {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const { userData, isUserLoggedIn } = useContext(UserDataContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<commentProps>({
    criteriaMode: 'all',
    mode: 'onSubmit',
    resolver: zodResolver(schemaCommentForm),
    defaultValues: {
      commentData: {
        comment: '',
      },
    },
  });

  const {
    data: comments,
    isLoading,
    isError,
  } = useGetQuestionComments(questionId);

  const { data: question = '' } = useGetQuestionById(questionId);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError) {
    return <p>Ocorreu um erro ao carregar os dados.</p>;
  }

  const onSubmit = async (data: commentProps): Promise<void> => {
    if (typeof questionId === 'string') {
      await handleCommentSubmit(data, userData.id, questionId);
      window.location.reload();
    }
  };

  return (
    <main>
      {question !== undefined ? (
        <>
          {question !== '' && <QuestionDetails questionDetails={question} />}
          <section className=" flex flex-col ">
            <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
              <S.InputField
                type="text"
                className="relative"
                placeholder="Responda este tópico"
                onClick={() => {
                  if (!isUserLoggedIn) {
                    navigate(LOGIN);
                  }
                }}
                {...register('commentData.comment')}
              />
              <button
                type="submit"
                className="absolute right-0 mt-auto text-2xl p-6"
              >
                <BiSolidSend />
              </button>
              {errors.commentData?.comment?.message != null && (
                <span className="text-red-400 absolute">
                  {errors.commentData?.comment?.message}
                </span>
              )}
            </S.FormWrapper>
            {comments !== undefined && <Comments comments={comments} />}
          </section>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </main>
  );
}
