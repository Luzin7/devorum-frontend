import { type ReactElement } from 'react';
import { BiLike } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import * as S from '../components/styleds';
import type Question from '../../../types/IQuestion';
import convertTimezone from '../../../functions/timezoneConverter';
import { QUESTION } from '../../../utils/routePaths';
import { useFetchQuestions } from '../../../hooks/getQuestions';

export function QuestionMap(): ReactElement {
  const { data: questions, isLoading, isError } = useFetchQuestions();

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError) {
    return <p>Ocorreu um erro ao carregar os dados.</p>;
  }

  function reduceText(text: string, maxLenght: number): string {
    // adicionar logica para tamanhos diferentes de tela
    if (text.length <= maxLenght) {
      return text;
    } else {
      return text.slice(0, maxLenght).trim() + '...';
    }
  }

  return (
    <>
      {/* <div className="flex m-auto justify-between text-text opacity-70 text-sm lg:w-3/5 xl:w-2/4 2xl:w-2/5">
        <span>Total de dúvidas</span>
        <span>{questions.length}</span>
      </div> */}
      <S.QuestionsWrapper>
        {questions !== undefined && questions?.length > 0 ? (
          questions.map(
            // eslint-disable-next-line @typescript-eslint/naming-convention
            ({ id, title, question, created_at }: Question) => (
              <S.QuestionWrapper key={id}>
                <div>
                  <div className="flex flex-col gap-1">
                    <p className="text-background opacity-70 text-sm">
                      {reduceText(title, 25)}
                    </p>
                    <p className="text-primary font-semibold">
                      {reduceText(question, 45)}
                    </p>
                  </div>
                  <p className="text-background opacity-50 text-xs mt-2 2xl:mt-5">
                    {convertTimezone(created_at)}
                  </p>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <button type="button" disabled className="self-end">
                    <BiLike className="text-accent text-3xl active:text-primary transition-colors" />
                  </button>
                  <Link to={`${QUESTION}/${id}`}>
                    <button
                      type="button"
                      className="font-bold bg-accent rounded-full py-2 px-4 text-sm hover:bg-primary transition-colors"
                    >
                      Responder
                    </button>
                  </Link>
                </div>
              </S.QuestionWrapper>
            ),
          )
        ) : (
          <p className="text-center text-text">
            Ainda não há tópicos publicados! Que tal publicar o seu?
          </p>
        )}
      </S.QuestionsWrapper>
    </>
  );
}
