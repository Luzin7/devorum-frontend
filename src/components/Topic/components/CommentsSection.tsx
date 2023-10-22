import React from 'react';
import { dateConverter } from 'functions';
import { CommentWithAuthor } from 'types/IComments';
import { useUserStore } from 'store/user';
import { MdDeleteForever } from 'react-icons/md';
import { UUID } from 'crypto';
import { deleteUserComment } from '../functions';
import { useLoading } from 'hooks/useLoading';
import { useModal } from 'hooks/useModal';
import Modal from '@components/Modal';

interface CommentProps {
  topicComments: CommentWithAuthor[];
  topicId: UUID;
}

export default function CommentsSection({
  topicComments,
  topicId
}: CommentProps) {
  const { userState } = useUserStore();
  const { isLoading, setIsLoading, setIsSuccess } = useLoading();
  const { isModalOpen, setIsModalOpen } = useModal();

  const handleDeleteComment = async (topicId: UUID, commentId: UUID) => {
    setIsLoading((prev) => !prev);
    try {
      await deleteUserComment(topicId, commentId);

      setIsLoading((prev) => !prev);
      setIsSuccess(true);

      window.location.reload();
    } catch (error) {
      setIsLoading((prev) => !prev);
      setIsSuccess(false);
      setIsModalOpen((prev) => !prev);
    }
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        btnMessage="Fechar"
        description="Não foi possível apagar o comentário."
        title="Algo deu errado!"
      />
      {topicComments.map(({ author, content, createdAt, id }) => (
        <article key={id} className="py-4">
          <div className="flex flex-col gap-4 bg-secondary rounded-md p-2">
            <div className="flex justify-between">
              <span className="flex flex-col gap-1 text-sm">
                <b>{author.name}</b>{' '}
                <span className="opacity-40 text-xs">
                  {dateConverter(createdAt)}
                </span>
              </span>
              {userState.user.id === author.id && (
                <button
                  type="button"
                  onClick={() => handleDeleteComment(topicId, id)}
                  disabled={!!isLoading}
                >
                  <MdDeleteForever className="text-2xl text-text opacity-70 hover:text-red-400 hover:opacity-100 transition-colors" />
                </button>
              )}
            </div>
            <p>{content}</p>
          </div>
        </article>
      ))}
    </>
  );
}
