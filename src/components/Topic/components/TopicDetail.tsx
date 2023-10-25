import React, { useState } from 'react';
import Topic from 'types';
import { dateConverter } from './../../../functions/dateConverter';
import { useUserStore } from 'store/user';
import { MdMoreVert } from 'react-icons/md';
import { Dropdown } from '@components/Dropdown';
import { useLoading } from 'hooks/useLoading';
import { useModal } from 'hooks/useModal';
import { UUID } from 'crypto';
import { deleteUserTopic } from '../functions';
import Modal from '@components/Modal';
import { useRouter } from 'next/navigation';
import { HOME } from 'utils';

type TopicDetailsProps = Pick<
  Topic,
  'title' | 'content' | 'author' | 'createdAt' | 'id'
>;

export default function TopicDetail({
  author,
  content,
  createdAt,
  title,
  id: topicId
}: TopicDetailsProps) {
  const { userState } = useUserStore();
  const [activeItem, setActiveItem] = useState<boolean>(false);
  const { isLoading, setIsLoading, setIsSuccess } = useLoading();
  const { isModalOpen, setIsModalOpen } = useModal();
  const router = useRouter();

  const handleDeleteTopic = async (topicId: UUID) => {
    setIsLoading((prev) => !prev);
    try {
      await deleteUserTopic(topicId);

      setIsLoading((prev) => !prev);
      setIsSuccess(true);
      router.refresh();
      router.push(HOME);
    } catch (error) {
      setIsLoading((prev) => !prev);
      setIsSuccess(false);
      setIsModalOpen((prev) => !prev);
    }
  };

  return (
    <section className="my-8">
      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        btnMessage="Fechar"
        description="Não foi possível apagar o tópico."
        title="Algo deu errado!"
      />
      <div className="text-text">
        <div className="flex items-center justify-center relative">
          <span className="block mb-2 text-xs opacity-70">
            {author.name} - {dateConverter(createdAt)}
          </span>
          {userState.user.id === author.id && (
            <>
              <button
                type="button"
                disabled={!!isLoading}
                className="absolute right-2"
                title="Apagar comentário"
                onClick={() => {
                  if (activeItem === true) {
                    setActiveItem(false);
                    return;
                  }
                  setActiveItem((prev) => !prev);
                }}
              >
                <MdMoreVert
                  className="text-2xl text-text opacity-70 hover:opacity-100 transition-opacity"
                  title="Opções"
                />
              </button>
              {activeItem && (
                <Dropdown.Root className="bg-primary absolute z-50 flex flex-col right-2 top-[4vh] rounded-xl w-2/4 md:w-1/4 lg:w-1/6 xl:w-[10%] py-2 px-4">
                  <Dropdown.Action
                    btnTitle="Apagar"
                    color="white"
                    action={() => handleDeleteTopic(topicId)}
                  />
                </Dropdown.Root>
              )}
            </>
          )}
        </div>
        <div className="flex flex-col justify-evenly gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <hr className="opacity-50" />
          <div
            className="min-w-full prose prose-invert prose-blockquote:text-text prose-headings:text-text prose-strong:text-text prose-pink prose-code:bg-secondary prose-code:rounded-sm text-text"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </section>
  );
}
