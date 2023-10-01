'use client';

// ADICIONAR ZOD PARA TITULO

import Editor from '@components/Editor/Editor';
import { useTopicStore } from 'store/topic';

export default function CreateTopic() {
  const { state } = useTopicStore();
  return (
    <div className="w-11/12 m-auto pt-4 lg:w-2/4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Publique um novo conteúdo</h1>
        <p className="opacity-80 text-md">
          Publique uma dúvida sobre algum código ou problema que esteja te
          perturbando, uma novidade ou compartilhe suas ideias!
        </p>
      </div>
      <Editor />
      <button
        className="mt-4 py-4 w-full bg-accent rounded-md"
        onClick={() => console.log(state.topic)}
      >
        Publicar
      </button>
    </div>
  );
}
