import Editor from '@components/Editor/Editor';

export default function CreateTopic() {
  return (
    <div className="container m-auto pt-4 lg:w-2/4 lg:h-[86vh] lg:flex lg:flex-col lg:justify-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Publique um novo conteúdo</h1>
        <p className="opacity-80 text-md">
          Publique uma dúvida sobre algum código ou problema que esteja te
          perturbando, uma novidade ou compartilhe suas ideias!
        </p>
      </div>
      <Editor isEditorMode={false} />
    </div>
  );
}
