import { type ReactElement } from 'react';
import { FaHammer } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { GiTeamUpgrade } from 'react-icons/gi';

import ContentBlock from './styleds';

export function ObjectiveSection(): ReactElement {
  return (
    <section className="flex flex-col bg-secondary items-center justify-evenly text-text p-6">
      <h2 className="font-extrabold text-5xl underline mb-12 mt-6">
        Objetivos
      </h2>
      <ul className="flex flex-wrap gap-6 items-center justify-center">
        <ContentBlock className="group">
          <FaHammer className="text-4xl text-input group-hover:text-accent" />
          <h2 className="font-bold text-4xl w-fit mb-2">
            Aprimorar Habilidades
          </h2>
          <p>
            Nosso primeiro objetivo é ajudar os membros a aprimorar suas
            habilidades de programação, seja em linguagens de programação,
            ferramentas ou conceitos específicos.
          </p>
        </ContentBlock>
        <ContentBlock className="group">
          <HiOutlineUserGroup className="text-4xl text-input group-hover:text-accent" />
          <h2 className="font-bold text-4xl">Estimular Colaboração</h2>
          <p>
            O segundo objetivo é promover a colaboração entre os membros,
            incentivando a discussão de diversos temas, resolução de problemas e
            projetos em equipe.
          </p>
        </ContentBlock>
        <ContentBlock className="group">
          <GiTeamUpgrade className="text-4xl text-input group-hover:text-accent" />
          <h2 className="font-bold text-4xl">Crescimento Profissional</h2>
          <p>
            Além disso, buscamos apoiar o crescimento profissional dos nossos
            membros, fornecendo orientação sobre carreiras na área de tecnologia
            e oportunidades de networking.
          </p>
        </ContentBlock>
      </ul>
    </section>
  );
}
