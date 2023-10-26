import React, { useState } from 'react';
import { dateConverter } from 'functions';
import { CommentWithAuthor } from 'types/IComments';
import { useUserStore } from 'store/user';
import { MdMoreHoriz } from 'react-icons/md';
import { UUID } from 'crypto';
import { deleteUserComment } from '../functions';
import { useLoading } from 'hooks/useLoading';
import { useModal } from 'hooks/useModal';
import Modal from '@components/Modal';
import { Dropdown } from '@components/Dropdown';

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
  const [activeItem, setActiveItem] = useState<number | boolean>(false);

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
      {topicComments.map(
        ({ author, content, createdAt, id }, index: number) => (
          <article key={id} className="py-4 text-white">
            <div className="flex flex-col relative gap-4 bg-secondary rounded-md p-2">
              <div className="flex justify-between">
                <span className="flex flex-col  gap-1 text-sm md:flex-row md:gap-2.5 md:items-center">
                  <b>{author.name}</b>{' '}
                  <span className="opacity-40 text-xs">
                    {dateConverter(createdAt)}
                  </span>
                </span>
                {userState.user.id === author.id && (
                  <>
                    <button
                      type="button"
                      disabled={!!isLoading}
                      className="absolute right-2"
                      title="Apagar comentário"
                      onClick={() => {
                        if (index === activeItem) {
                          setActiveItem(false);
                          return;
                        }
                        setActiveItem(index);
                      }}
                    >
                      <MdMoreHoriz
                        className="text-2xl text-text opacity-70 hover:opacity-100 transition-opacity"
                        title="Opções"
                      />
                    </button>
                    {activeItem === index && (
                      <Dropdown.Root className="bg-primary absolute z-50 flex flex-col right-2 top-[4vh] rounded-xl w-2/4 md:w-1/4 lg:w-1/6 xl:w-[10%] py-2 px-4">
                        <Dropdown.Action
                          btnTitle="Apagar"
                          color="white"
                          action={() => handleDeleteComment(topicId, id)}
                        />
                      </Dropdown.Root>
                    )}
                  </>
                )}
              </div>
              <p>{content}</p>
            </div>
          </article>
        )
      )}
    </>
  );
}
