/* eslint-disable @next/next/no-img-element */
'use client';

import Accordion from '@components/Accordion/Accordion';
import { items } from './data';
import { team } from './data/team';

export function AboutProject() {
  return (
    <section className="pb-16">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-text md:text-5xl lg:text-6xl">
          De alunos para todos
        </h1>
        <p className="mb-8 text-lg text-text opacity-70 lg:text-xl sm:px-16 lg:px-48">
          Feito para melhorar nossa comunidade e ajudar quem precisa.
        </p>
      </div>

      <div>
        <h2 className="mb-8 text-2xl font-semibold tracking-tight leading-none text-text text-center md:text-5xl lg:text-2xl">
          Pessoas incríveis
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

      <Accordion items={items} />
    </section>
  );
}
