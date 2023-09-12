import React, { type ReactElement } from 'react';

import { PersonCard } from './PersonCard';

export function PersonList(): ReactElement {
  return (
    <ul className="flex flex-wrap justify-center items-center">
      <li>
        <PersonCard
          name="Luan Victor"
          role="Desenvolvedor Fullstack"
          imageUrl="https://avatars.githubusercontent.com/u/76531786?v=4"
          description="Com o desejo de ser um desenvolvedor fullstack,
          minha paixão é decifrar desafios complexos e traduzi-los em soluções elegantes e eficazes."
          musicName="Le Festin"
          musicLink="https://open.spotify.com/intl-pt/track/02JIdsrod3BYucThfUFDUX?si=2cb525b176104633"
          quote="O que foi já não é, e o que será ainda não é."
          gitHub="https://github.com/Luzin7"
          linkedin="https://www.linkedin.com/in/lvictordutra/"
        />
      </li>
      <li>
        <PersonCard
          name="Victor Navarro"
          role="Desenvolvedor Front-end"
          imageUrl="https://avatars.githubusercontent.com/u/133554156?s=400&u=
          93605befda2fde49bfe90fdfbe0911351dc23fcf&v=4"
          description="Tendo o objetivo de criar uma experiência de usuário perfeita,
          busco desenvolver aplicativos da web escaláveis e de fácil manutenção."
          musicName="Tears Don't Fall"
          musicLink="https://open.spotify.com/intl-pt/track/395yBfqwv6ut0I6S596TLH?si=0375c9202b194d58"
          quote="A minha magia é não desistir, jamais."
          gitHub="https://github.com/bush1D3v"
          linkedin="https://www.linkedin.com/in/vj021/"
        />
      </li>
      <li>
        <PersonCard
          name="Herrison Souza"
          role="Desenvolvedor Back-end"
          imageUrl="https://avatars.githubusercontent.com/u/114263838?v=4"
          description="Mergulhando no mundo do back-end, busco equilíbrio entre o código,
          criatividade e inovação, para construir softwares sólidos e
          abrangentes."
          musicName="Congratulations"
          musicLink="https://open.spotify.com/intl-pt/track/3a1lNhkSLSkpJE4MSHpDu9?si=6092b81a062e4f3a"
          quote="A minha magia é não desistir, jamais."
          gitHub="https://github.com/stormlig"
          linkedin="https://www.linkedin.com/in/herrison-souza-630118187/"
        />
      </li>
    </ul>
  );
}
