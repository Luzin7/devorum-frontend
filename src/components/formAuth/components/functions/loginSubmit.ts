import axios from 'axios';

import { API_URL_BASE, LOGIN_ENDPOINT } from '../../../../utils/api';
import { type loginProps } from '../schemas';
import { type PublicUserProps } from '../../../../types/IUser';

interface loginResponseProps {
  success: boolean;
  message: string | any;
  user?: PublicUserProps;
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

    const user = response.data.find(
      (u: { name: string; password: string }) =>
        u.name === userData.name && u.password === userData.password,
    );

    if (user !== undefined) {
      const publicUser: PublicUserProps = {
        name: user.name,
        contact: user.contact,
        questions: user.questions,
      };

      return {
        success: true,
        message: 'Login bem-sucedido!',
        user: publicUser,
      };
    } else {
      return { success: false, message: 'Credenciais inválidas.' };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};

export default handleLoginSubmit;
