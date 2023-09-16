import { type ReactElement } from 'react';
import { Link, useRouteError } from 'react-router-dom';

import { HOME } from '../../utils/routePaths';

export function ErrorPage(): ReactElement {
  const error = useRouteError() as { status: number };

  const { status } = error;

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-8 text-center">
      <h1 className="text-text text-4xl font-medium lg:text-5xl">Oops!</h1>
      <p className="text-text text-sm w-4/5 lg:text-base">
        Parece que você mergulhou tão fundo nas perguntas que nosso submarino de
        conhecimento não conseguiu te alcançar! 😅 <br /> Continue curioso e
        logo estaremos de volta com respostas ainda mais profundas! 🚀🌟
      </p>
      <p className="text-text text-5xl font-bold lg:text-8xl">{status}</p>
      <Link to={HOME}>
        <button
          type="button"
          className="bg-accent py-4 px-5 rounded-full text-text font-bold hover:bg-primary hover:scale-105
        transition-all"
        >
          Voltar para página inicial
        </button>
      </Link>
    </div>
  );
}
