'use client';

import EditorMenuBar from '@components/Editor/EditorMenuBar';
import Modal from '@components/Modal';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { sanitize } from 'dompurify';
import { useLoading } from 'hooks/useLoading';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { topicTitleData, topicTitleSchema } from 'schemas/topic/title';
import { createTopic, updateTopic } from 'services/http/requests/api/topics';
import { useTopicStore } from 'store/topic';

export function Editor({ isEditorMode }: { isEditorMode: boolean }) {
  const { topicState, topicActions } = useTopicStore();
  const { isLoading, setIsLoading, isSuccess, setIsSuccess } = useLoading();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    editable: true,
    injectCSS: false,
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

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      if (isEditorMode) {
        await updateTopic(topicState.topic);
      } else {
        await createTopic(topicState.topic);
      }
      setIsSuccess(true);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error submitting topic:', error);
      setIsSuccess(false);
      setIsModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <Label htmlFor="topicTitle">Título do Tópico</Label>
        <Input
          type="text"
          id="topicTitle"
          required
          value={topicState.topic.title}
          placeholder="Título do tópico"
          onInput={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            topicActions.updateTopic({ title: target.value })
          }
          {...register('title')}
        />

        {errors.title && <span>{errors.title.message}</span>}
      </div>
      <div className="flex border border-primary rounded-t-lg justify-center py-2">
        {editor && <EditorMenuBar editor={editor} />}
      </div>
      <div className="border border-primary rounded-b-lg overflow-y-auto bg-accent">
        <EditorContent
          editor={editor}
          className="text-lg focus:outline-none prose dark:prose-invert m-auto text-text max-w-none"
        />
      </div>
      <Button
        size={'lg'}
        type="submit"
        className="min-w-full mt-8"
        disabled={isLoading}
      >
        {isLoading ? 'Publicando...' : 'Publicar'}
      </Button>
    </form>
  );
}
