import axios from 'axios';

import { API_URL_BASE, LOGIN_ENDPOINT } from '../../../../utils/api';
import { type loginProps } from '../schemas';
import { type User } from '../../../../types';

interface loginResponseProps {
  success: boolean;
  message: string | any;
  user?: User;
}

const handleLoginSubmit = async (
  data: loginProps,
): Promise<loginResponseProps> => {
  const { userData } = data;

  try {
    const response = await axios.get(`${API_URL_BASE}${LOGIN_ENDPOINT}`, {
      params: {
        name: userData.name,
        password: userData.password,
      },
    });

    if (response.status === 200) {
      return {
        success: true,
        message: 'Login concluido!',
        user: response.data,
      };
    } else {
      return {
        success: false,
        message: 'Ocorreu um erro ao fazer login.',
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
};

export default handleLoginSubmit;
