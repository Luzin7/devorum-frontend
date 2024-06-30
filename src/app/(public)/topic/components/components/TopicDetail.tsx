import Modal from '@components/Modal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from 'components/ui/dropdown-menu';
import { EDIT_TOPIC, HOME } from 'constants/localRoutePaths';
import { UUID } from 'crypto';
import { dateConverter } from 'functions';
import { useLoading } from 'hooks/useLoading';
import { useModal } from 'hooks/useModal';
import { MoreHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTopicStore } from 'store/topic';
import { useUserStore } from 'store/user';
import Topic from 'types';
import { deleteUserTopic } from '../functions';

type TopicDetailsProps = Pick<
  Topic,
  'title' | 'content' | 'author' | 'createdAt' | 'id' | 'updatedAt'
>;

export default function TopicDetail({
  author,
  content,
  createdAt,
  title,
  updatedAt,
  id: topicId
}: TopicDetailsProps) {
  const { userState } = useUserStore();
  const { topicActions } = useTopicStore();
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
    router.push(EDIT_TOPIC);
  };

  return (
    <section className={`my-10 ${isLoading && 'animate-pulse'}`}>
      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        btnMessage="Fechar"
        description="Não foi possível apagar o tópico."
        title="Algo deu errado!"
      />
      <div className=" mx-auto text-text">
        <div className="flex items-center justify-center relative">
          <span className="block mb-2 text-xs opacity-70">
            {author.name} - {dateConverter(createdAt)}
          </span>
          {userState.user.id === author.id && (
            <div className="absolute right-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <MoreHorizontal className="text-4xl cursor-pointer" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => handleUpdateTopic(topicId)}
                    >
                      Editar Tópico
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-destructive cursor-pointer"
                    onClick={() => handleDeleteTopic(topicId)}
                  >
                    Apagar Tópico
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            {title}
          </h1>
          <hr className="opacity-50" />
          <div
            className="leading-7 min-w-full prose dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
      {updatedAt !== null && (
        <span className="block mt-4 text-xs opacity-70 text-center">
          Atualizado pela última vez {dateConverter(updatedAt as Date)}
        </span>
      )}
    </section>
  );
}
