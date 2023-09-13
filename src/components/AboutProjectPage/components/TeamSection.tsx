import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { ABOUT_US } from '../../../utils/routePaths';
import equipe from '../../../assets/images/equipe.png';

export function TeamSection(): ReactElement {
  return (
    <section
      className="p-6 flex flex-col items-center justify-between text-start
        bg-input max-w-screen-xl self-center sm:text-center"
    >
      <h2 className="font-bold text-4xl underline mb-12 mt-6">Equipe</h2>
      <div className="flex flex-col gap-6 sm:text-3xl lg:text-4xl">
        <p>
          A equipe do projeto <strong>TurmaQA</strong> é formada por
          programadores apaixonados pelo que fazem, que compartilham a visão e
          valores do projeto.
        </p>
        <p>
          Cada membro desempenha um papel crucial no desenvolvimento e
          manutenção deste fórum, assegurando sua relevância e utilidade para
          todos os membros.
        </p>
        <p className="font-semibold text-center">
          Saiba mais sobre nossa equipe clicando&nbsp;
          <Link
            to={ABOUT_US}
            className="underline font-black hover:text-accent sm:text-4xl lg:text-5xl"
            target="_blank"
          >
            AQUI
          </Link>
        </p>
      </div>
      <div className="flex mt-6">
        <img src={equipe} alt="Uma pessoa ajudando outra com seu celular" />
      </div>
    </section>
  );
}
