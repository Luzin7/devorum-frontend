import { type ReactElement } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './styleds';
import { QuestionDetails } from './QuestionDetails';
import Comments from './Comments';
import { type QuestionProps } from '../../../types';

export function QuestionPage(): ReactElement {
  const { questionId } = useParams();
  const navigate = useNavigate();

  const localStorageData = localStorage.getItem('questions_stored');
  const getQuestions =
    localStorageData != null ? JSON.parse(localStorageData) : [];

  const questionInfo = getQuestions.find(
    (question: QuestionProps) => question.id === questionId,
  );

  if (questionInfo === undefined) {
    navigate('not-found');
  }

  const { author: questionAuthor, title, question } = questionInfo;

  return (
    <main>
      <QuestionDetails
        author={questionAuthor}
        title={title}
        question={question}
      />
      <section className="bg-secondary flex flex-col ">
        <S.FormWrapper>
          <S.InputField type="text" placeholder="Ajude com sua resposta" />
        </S.FormWrapper>
        <Comments comments={questionInfo.comments} />
      </section>
    </main>
  );
}
