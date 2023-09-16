import { type ReactElement } from 'react';

import missao from '../../../assets/images/missao.png';

export function MissionSection(): ReactElement {
  return (
    <section
      className="flex flex-col p-6 text-center h-[91.5vh] justify-between
      max-w-screen-xl self-center relative lg:justify-center"
    >
      <h2 className="font-extrabold text-5xl underline text-center sm:my-6 lg:m-auto lg:mt-6">
        Missão
      </h2>

      <div
        className="flex flex-col tracking-wider gap-6 text-justify
        sm:text-4xl sm:text-center lg:text-start lg:w-2/4 lg:mb-auto lg:pb-6"
      >
        <p>
          A missão do projeto <strong>TurmaQA</strong> é promover aprendizado
          colaborativo, compartilhamento de conhecimento e crescimento
          profissional para entusiastas da programação.
        </p>
        <p>
          Buscamos também fortalecer a comunidade de desenvolvedores, impactando
          positivamente em suas carreiras e na indústria da tecnologia.
        </p>
      </div>
      <div className="flex w-5/6 self-center sm:w-auto lg:absolute lg:right-0 lg:mt-16">
        <img src={missao} alt="Uma pessoa ajudando outra com seu celular" />
      </div>
    </section>
  );
}
