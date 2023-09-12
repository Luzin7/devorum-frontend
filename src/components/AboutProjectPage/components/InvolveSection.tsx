import { type ReactElement } from 'react';
import { BsFillChatRightTextFill, BsFire, BsShareFill } from 'react-icons/bs';
import { MdVolunteerActivism } from 'react-icons/md';

import ContentBlock from './styleds';

export function InvolveSection(): ReactElement {
  return (
    <section
      className="p-6 flex flex-col items-center justify-between
        bg-secondary text-text text-center"
    >
      <h2 className="font-bold text-4xl underline mb-12 mt-6">
        Como Você Pode se Envolver
      </h2>
      <ul className="flex gap-6 text-start flex-wrap justify-center">
        <ContentBlock className="group">
          <MdVolunteerActivism className="text-4xl text-input group-hover:text-accent" />
          <h2 className="font-bold text-4xl">Voluntariado</h2>
          <p>
            Se você ama programação e quer ajudar, considere ser um voluntário.
            Estamos sempre à procura de mentores e moderadores dedicados a fazer
            a diferença na comunidade.
          </p>
        </ContentBlock>
        <ContentBlock className="group">
          <BsFire className="text-4xl text-input group-hover:text-accent" />
          <h2 className="font-bold text-4xl">Participação Ativa</h2>
          <p>
            Junte-se às discussões, compartilhe conhecimento e tire dúvidas. Sua
            participação ativa e engajada é fundamental para o fortalecimento
            contínuo da nossa comunidade.
          </p>
        </ContentBlock>
        <ContentBlock className="group">
          <BsShareFill className="text-4xl text-input group-hover:text-accent" />
          <h2 className="font-bold text-4xl">Divulgação</h2>
          <p>
            Ajude a aumentar a visibilidade do TurmaQA, promovendo o fórum entre
            seus colegas, compartilhando em suas redes sociais e incentivando
            outros a participarem.
          </p>
        </ContentBlock>
        <ContentBlock className="group">
          <BsFillChatRightTextFill className="text-4xl text-input group-hover:text-accent" />
          <h2 className="font-bold text-4xl">Contribuição de Conteúdo</h2>
          <p>
            Se você é especialista em algum tópico de programação, considere
            criar tutoriais ou artigos para compartilhar com a comunidade, de
            forma colaborativa e enriquecedora.
          </p>
        </ContentBlock>
      </ul>
    </section>
  );
}
