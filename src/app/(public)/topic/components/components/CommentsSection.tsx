import Modal from '@components/Modal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from 'components/ui/dropdown-menu';
import { UUID } from 'crypto';
import { dateConverter } from 'functions';
import { useLoading } from 'hooks/useLoading';
import { useModal } from 'hooks/useModal';
import { MoreHorizontal } from 'lucide-react';
import { useUserStore } from 'store/user';
import { CommentWithAuthor } from 'types/IComments';
import { deleteUserComment } from '../functions';

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
        <div
          key={id}
          className={`p-4 flex flex-col relative gap-2 even:my-5 bg-secondary rounded-lg ${isLoading && 'animate-pulse'}`}
        >
          <div className="flex justify-between">
            <span className="flex flex-col gap-1 text-sm md:flex-row md:gap-2.5 md:items-center">
              {author.name}{' '}
              <span className="opacity-40 text-xs">
                {dateConverter(createdAt)}
              </span>
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
                        disabled={isLoading}
                        onClick={() => handleDeleteComment(topicId, id)}
                      >
                        Apagar Comentário
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
          <p className="leading-7">{content}</p>
        </div>
      ))}
    </>
  );
}
