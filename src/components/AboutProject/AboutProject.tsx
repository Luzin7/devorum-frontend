/* eslint-disable @next/next/no-img-element */
'use client';

import { items } from './data';
import { team } from './data/team';
import FaqAbout from '@components/FaqAbout';

export function AboutProject() {
  return (
    <section className="pb-16 container">
      <div className="py-8 mx-auto text-center lg:pt-16">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Impulsionando o Futuro Juntos
        </h1>
        <p className="mb-8 text-lg text-text opacity-70 lg:text-xl sm:px-16 lg:px-48">
          Colaborando para um amanhã mais tecnológico.
        </p>
      </div>

      <div>
        <h2 className="mb-8 text-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Por Trás dos Códigos
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 pb-16">
          {team.map(({ name, role, image, ghUrl }) => (
            <div className="flex items-center justify-center gap-4" key={name}>
              <a href={ghUrl} target="_blank" rel="noopener noreferrer">
                <img
                  className="w-20 h-20 rounded-full"
                  src={image}
                  alt={name}
                />
              </a>
              <div className="font-medium text-text">
                <div>{name}</div>
                <div className="text-sm text-text opacity-70">{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FaqAbout items={items} />
    </section>
  );
}
