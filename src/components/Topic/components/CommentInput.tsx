import * as GS from '@styles/globalStyledComponents';

export default function CommentInput() {
  return (
    <form className="mb-6">
      <div className="mb-4 bg-secondary rounded-lg rounded-t-lg border border-primary ">
        <label htmlFor="comment" className="sr-only">
          Seu comentário
        </label>
        <textarea
          id="comment"
          rows={2}
          className="p-4 bg-secondary w-full text-sm text-text border-0 outline-none"
          placeholder="Escreva seu comentário..."
          required
        ></textarea>
      </div>
      <GS.Button txtColor="white" bgColor="accent" txtSize="sm">
        Publicar comentário
      </GS.Button>
    </form>
  );
}
