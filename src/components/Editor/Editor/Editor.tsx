'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import EditorMenuBar from '@components/Editor/EditorMenuBar';
import Modal from '@components/Modal';
import * as GS from '@styles/globalStyledComponents';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { sanitize } from 'dompurify';
import { useLoading } from 'hooks/useLoading';
import { useState } from 'react';
import { topicTitleData, topicTitleSchema } from 'schemas/topic/title';
import { createTopic, updateTopic } from 'services/http/requests/api/topics';
import { useTopicStore } from 'store/topic';
import { useUserStore } from 'store/user';

export function Editor({ isEditorMode }: { isEditorMode: boolean }) {
  const { topicState, topicActions } = useTopicStore();
  const { userState } = useUserStore();
  const { isLoading, setIsLoading, isSuccess, setIsSuccess } = useLoading();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: topicState.topic.content,
    onUpdate: ({ editor }) => {
      const cleanHtml = sanitize(editor.getHTML());
      topicActions.updateTopic({ content: cleanHtml });
    }
  });

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<topicTitleData>({
    resolver: zodResolver(topicTitleSchema)
  });

  const createNewTopic = async () => {
    setIsLoading((prevState) => !prevState);
    try {
      await createTopic(topicState.topic);
      setIsLoading((prevState) => !prevState);
      setIsSuccess(true);
      setIsModalOpen((prev) => !prev);
    } catch (error) {
      setIsLoading((prevState) => !prevState);
      setIsSuccess(false);
      setIsModalOpen((prev) => !prev);
    }
  };

  const updateCurrentTopic = async () => {
    setIsLoading((prevState) => !prevState);
    try {
      await updateTopic(topicState.topic);
      setIsLoading((prevState) => !prevState);
      setIsSuccess(true);
      setIsModalOpen((prev) => !prev);
    } catch (error) {
      setIsLoading((prevState) => !prevState);
      setIsSuccess(false);
      setIsModalOpen((prev) => !prev);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(
        isEditorMode ? updateCurrentTopic : createNewTopic
      )}
    >
      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        btnMessage={isSuccess ? 'Fechar' : 'Tentar novamente'}
        description={
          isSuccess
            ? 'Ficamos felizes de te ver participando da comunidade!'
            : 'Não foi possível publicar seu tópico. Tente novamente e, caso o erro persista, entre em contato conosco.'
        }
        title={isSuccess ? 'Enviado com sucesso!' : 'Algo deu errado 😭'}
      />
      <div className="my-5">
        <input
          type="text"
          className="w-full py-2 px-1 rounded-lg bg-input"
          value={topicState.topic.title}
          placeholder="Título"
          onInput={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            topicActions.updateTopic({ title: target.value })
          }
          {...register('title')}
        />
        {errors.title?.message !== undefined && (
          <GS.Error errorMessage={errors.title.message} />
        )}
      </div>
      <div className="flex bg-topicBackground rounded-t-lg justify-center py-2">
        {editor && <EditorMenuBar editor={editor} />}
      </div>
      <div className="border-2 border-primary rounded-b-lg bg-primary mb-4">
        <div className="prose prose-invert m-auto text-text px-2 py-6 min-h-[25vh]">
          <EditorContent editor={editor} />
        </div>
      </div>
      <GS.Button
        type="submit"
        bgColor="accent"
        txtHoverColor="text"
        className="min-w-full"
        disabled={!!isLoading}
        isLoading={isLoading}
        onClick={() => topicActions.updateTopic({ author: userState.user.id })}
      >
        {isLoading ? 'Publicando...' : 'Publicar'}
      </GS.Button>
    </form>
  );
}
