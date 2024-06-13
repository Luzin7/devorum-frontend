'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as GS from '@styles/globalStyledComponents';
import { REGISTER } from 'constants/localRoutePaths';
import { UUID } from 'crypto';
import { useLoading } from 'hooks/useLoading';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import {
  commentContentData,
  commentContentSchema
} from 'schemas/comment/content';
import { createComment } from 'services/http/requests/api';
import { useUserStore } from 'store/user';
import { Comment } from 'types/IComments';

type CommentInputProps = Pick<Comment, 'topicId'>;

export default function CommentInput({ topicId }: CommentInputProps) {
  const { isLoading, setIsLoading } = useLoading();
  const isLoggedIn = useUserStore.getState().userState.user.id !== ('' as UUID);

  const {
    handleSubmit,
    register,
    // FAZ O MODAL PEGAR O ERRO AI PAPAI
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors }
  } = useForm<commentContentData>({
    resolver: zodResolver(commentContentSchema)
  });

  const onSubmit = async (data: commentContentData) => {
    setIsLoading((prevState) => !prevState);
    try {
      await createComment(topicId as UUID, data);

      setIsLoading((prevState) => !prevState);
      // ADICIONAR MODAL
      window.location.reload();
    } catch (error) {
      setIsLoading((prevState) => !prevState);
      // ADICIONAR MODAL
    }
  };
  return (
    <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="pt-4 mb-4 dark:bg-secondary  rounded-lg rounded-t-lg border border-primary ">
        <label htmlFor="comment" className="sr-only">
          Seu comentário
        </label>
        <textarea
          id="comment"
          rows={2}
          className="p-4 dark:bg-secondary w-full text-sm text-text border-0 outline-none"
          placeholder="Escreva seu comentário..."
          {...register('content')}
          disabled={!isLoggedIn}
          required
        ></textarea>
      </div>
      {isLoggedIn ? (
        <GS.Button
          txtColor="white"
          bgColor="accent"
          txtSize="sm"
          type="submit"
          isLoading={isLoading}
        >
          {isLoading ? 'Publicando...' : 'Publicar comentário'}
        </GS.Button>
      ) : (
        <Link href={REGISTER}>
          <GS.Button
            txtColor="white"
            bgColor="primary"
            txtSize="sm"
            type="button"
          >
            Faça sua conta e participe da comunidade!
          </GS.Button>
        </Link>
      )}
    </form>
  );
}
