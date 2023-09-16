import { useQuery, type UseQueryResult } from 'react-query';

import type Comment from '../types/IComment';
import { getQuestionComments } from '../services/api';

export function useGetQuestionComments(
  questionId?: string,
): UseQueryResult<Comment[]> {
  return useQuery<Comment[]>(
    ['getQuestionComments', questionId],
    async () => {
      if (questionId === undefined) {
        throw new Error('ID da pergunta não especificado');
      }
      return await getQuestionComments(questionId);
    },
    {
      enabled: !(questionId === undefined),
    },
  );
}
