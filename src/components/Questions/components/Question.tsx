import { useState, type ReactElement } from 'react';
import { BiLike } from 'react-icons/bi';
import axios from 'axios';

import * as S from '../components/styleds';
import { API_URL_BASE, QUESTIONS_ENDPOINT } from '../../../utils/api';

interface DataProps {
  author: string;
  id: string;
  title: string;
  question: string;
  date: number;
}

export function Question(): ReactElement {
  const lastFetchCacheKey = 'last_fetch_cache_key';
  const questionsStored = 'questions_stored';
  const lastStoredQuestions = localStorage.getItem(questionsStored);

  const [data, setData] = useState(
    lastStoredQuestions != null ? JSON.parse(lastStoredQuestions) : [],
  );

  const fetchInterval = 120000;
  const lastFetchTime = localStorage.getItem(lastFetchCacheKey) ?? '0';
  const currentTime = new Date().getTime();

  if (
    parseInt(lastFetchTime, 10) === 0 ||
    currentTime - parseInt(lastFetchTime, 10) > fetchInterval
  ) {
    axios
      .get(`${API_URL_BASE}${QUESTIONS_ENDPOINT}`)
      .then((response) => {
        setData(response.data);
        localStorage.setItem(lastFetchCacheKey, currentTime.toString());
        localStorage.setItem(questionsStored, JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function reduceText(text: string, maxLenght: number): string {
    // adicionar logica para tamanhos diferentes de tela
    if (text.length <= maxLenght) {
      return text;
    } else {
      return text.slice(0, maxLenght).trim() + '...';
    }
  }

  const convertTimezone = (timezone: number): string => {
    const date = new Date(timezone);

    const formattedDate = date.toLocaleDateString('pt-BR');
    return formattedDate;
  };

  return (
    <>
      <div className="flex m-auto justify-between text-text opacity-70 text-sm lg:w-3/5 xl:w-2/4 2xl:w-2/5">
        <span>Total de dúvidas</span>
        <span>{data.length}</span>
      </div>
      <S.QuestionsWrapper>
        {data.map(({ author, title, question, date }: DataProps) => (
          <S.QuestionWrapper key={author}>
            <div>
              <div className="flex flex-col gap-1">
                <p className="text-secondary opacity-70 text-sm">
                  {reduceText(title, 25)}
                </p>
                <p className="text-primary font-medium">
                  {reduceText(question, 45)}
                </p>
              </div>
              <p className="text-secondary opacity-50 text-xs mt-2 2xl:mt-5">
                {convertTimezone(date)}
              </p>
            </div>
            <div className="flex flex-col justify-between items-center">
              <button type="button" className="self-end">
                <BiLike className="text-accent text-3xl active:text-primary transition-colors" />
              </button>
              <button
                type="button"
                className="font-bold bg-accent rounded-full py-2 px-4 text-sm active:bg-primary transition-colors"
              >
                Responder
              </button>
            </div>
          </S.QuestionWrapper>
        ))}
      </S.QuestionsWrapper>
    </>
  );
}
