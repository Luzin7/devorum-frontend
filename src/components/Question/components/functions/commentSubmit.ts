import axios from 'axios';

import { API_URL_BASE } from '../../../../utils/api';
import { type commentProps } from '../schemas/commentSchema';

const handleCommentSubmit = async (
  data: commentProps,
  authorId: string,
  questionId: string,
): Promise<object> => {
  const { commentData } = data;

  try {
    const response = await axios.post(`${API_URL_BASE}/questions/comments`, {
      author_id: authorId,
      question_id: questionId,
      comment: commentData.comment,
    });

    if (response.status === 201) {
      return { success: true, message: 'Comentário registrado com sucesso!' };
    } else {
      return {
        success: false,
        message: 'Ocorreu um erro ao cadastrar comentário.',
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
};

export default handleCommentSubmit;
