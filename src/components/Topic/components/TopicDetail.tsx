import { Dropdown } from '@components/Dropdown';
import Modal from '@components/Modal';
import { UUID } from 'crypto';
import { useLoading } from 'hooks/useLoading';
import { useModal } from 'hooks/useModal';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdMoreVert } from 'react-icons/md';
import { useTopicStore } from 'store/topic';
import { useUserStore } from 'store/user';
import Topic from 'types';
import { HOME } from 'utils';
import { deleteUserTopic } from '../functions';
import { dateConverter } from './../../../functions/dateConverter';

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
  const { topicActions } = useTopicStore();
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

  const handleUpdateTopic = async (topicId: UUID) => {
    topicActions.updateTopic({ topicId });
    router.push('/edit');
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
                    btnTitle="Editar"
                    color="white"
                    action={() => handleUpdateTopic(topicId)}
                  />
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
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {title}
          </h1>
          <hr className="opacity-50" />
          <div
            className="leading-7 [&:not(:first-child)]:mt-6 "
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </section>
  );
}
