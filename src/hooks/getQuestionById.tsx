import { type UseQueryResult, useQuery } from 'react-query';

import type Question from '../types/IQuestion';
import { getQuestionById } from '../services/api';

export function useGetQuestionById(
  questionId?: string,
): UseQueryResult<Question> {
  return useQuery<Question>(['getQuestionById', questionId], async () => {
    if (questionId === undefined) {
      throw new Error('ID da pergunta não especificado');
    }
    return await getQuestionById(questionId);
  });
}
