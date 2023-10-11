'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import EditorMenuBar from '@components/Editor/EditorMenuBar';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { sanitize } from 'dompurify';
import { setLocalStorage } from 'functions/setLocalStorage';
import { useTopicStore } from 'store/topic';
import { topicTitleData, topicTitleSchema } from 'schemas/topic/title';
import * as GS from '@styles/globalStyledComponents';
import { useLoading } from 'hooks/useLoading';
import { useUserStore } from 'store/user';
import { createTopic } from 'services/http/requests/api/topics';

export function Editor() {
  const { topicState, topicActions } = useTopicStore();
  const { userState } = useUserStore();
  const { isLoading, setIsLoading } = useLoading();
  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: topicState.topic.content,
    onUpdate: ({ editor }) => {
      const cleanHtml = sanitize(editor.getHTML());
      topicActions.updateTopic({ content: cleanHtml });
      setLocalStorage({
        storageKey: 'newTopic',
        storageContent: { body: topicState.topic.content }
      });
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
    // ...requisicaoAqui
    createTopic(topicState.topic);
    console.log(topicState.topic);
    setIsLoading((prevState) => !prevState);
  };

  return (
    <form onSubmit={handleSubmit(createNewTopic)}>
      <div className="my-5">
        <input
          type="text"
          className="w-full py-2 px-1 rounded-sm bg-input"
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
      <div className="flex bg-topicBackground justify-center py-2">
        {editor && <EditorMenuBar editor={editor} />}
      </div>
      <div className="border-2 border-primary rounded-md bg-primary">
        <div className="prose prose-strong:text-text prose-code:text-text prose-code:bg-secondary prose-code:rounded-sm m-auto text-text px-2 min-h-[25vh]">
          <EditorContent editor={editor} />
        </div>
      </div>
      <GS.Button
        type="submit"
        bgColor="accent"
        txtHoverColor="text"
        isLoading={isLoading}
        onClick={() =>
          topicActions.updateTopic({ authorId: userState.user.userId })
        }
      >
        Publicar
      </GS.Button>
    </form>
  );
}
