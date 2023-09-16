import axios from 'axios';

import { API_URL_BASE, QUESTIONS_ENDPOINT } from '../../../../utils/api';
import { type questionProps } from '../schemas/questionSchema';

const questionSubmit = async (
  data: questionProps,
  userId: string,
): Promise<object> => {
  const { userData } = data;

  try {
    const response = await axios.post(`${API_URL_BASE}${QUESTIONS_ENDPOINT}`, {
      author_id: userId,
      title: userData.title,
      question: userData.question,
    });

    if (response.status === 201) {
      return { success: true, message: 'Pergunta publicada com sucesso!' };
    } else {
      return {
        success: false,
        message: 'Ocorreu um erro ao publicar a pergunta.',
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
};

export default questionSubmit;
