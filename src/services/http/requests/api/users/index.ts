import { CREATE_USER_ENDPOINT, LOGIN_ENDPOINT } from 'env/api';
import { userLoginData } from 'schemas/login';
import { userRegisterData } from 'schemas/register';
import { UserProps } from 'types/IUser';
import { ZodError } from 'zod';
import httpClient from '../../axios-conf';

type NewUserProps = userRegisterData;
type LoginProps = userLoginData;

export async function createUser(data: NewUserProps): Promise<void> {
  const { email, name, password } = data;

  try {
    await httpClient.post(CREATE_USER_ENDPOINT, {
      name,
      email,
      password
    });
  } catch (error) {
    throw new Error('Erro ao criar usuário', error as ZodError);
  }
}

export async function getUserData(): Promise<UserProps> {
  try {
    const { data } = await httpClient.get('/users');

    const userSessionInfo = {
      account: [{ id: data.user.id, name: data.user.name }]
    };

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('u_i', JSON.stringify(userSessionInfo));
    return data.user;
  } catch (error) {
    localStorage.setItem('isLoggedIn', 'false');
    throw new Error('Erro na requisição', error as ZodError);
  }
}

export async function refreshSession() {
  try {
    const { data } = await httpClient.post('/sessions/refresh');

    httpClient.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
    httpClient.defaults.headers.refresh_token = data.refreshToken;

    const expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() + 7);
    const expiresMinutes = new Date();
    expiresMinutes.setMinutes(expiresDate.getMinutes() + 5);

    document.cookie = `acess-token=Bearer ${
      data.accessToken
    }; expires=${expiresMinutes.toUTCString()}; path=/`;
    document.cookie = `refresh-token=${
      data.refreshToken
    }; expires=${expiresDate.toUTCString()}; path=/`;

    const userData = await getUserData();

    return userData;
  } catch (error) {
    throw new Error('Erro na requisição:', error as ZodError);
  }
}

export async function login(data: LoginProps) {
  const { email, password } = data;

  try {
    const { data } = await httpClient.post(LOGIN_ENDPOINT, {
      email,
      password
    });

    httpClient.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
    httpClient.defaults.headers.refresh_token = data.refreshToken;

    const expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() + 7);
    const expiresMinutes = new Date();
    expiresMinutes.setMinutes(expiresDate.getMinutes() + 5);

    document.cookie = `acess-token=Bearer ${
      data.accessToken
    }; expires=${expiresMinutes.toUTCString()}; path=/`;
    document.cookie = `refresh-token=${
      data.refreshToken
    }; expires=${expiresDate.toUTCString()}; path=/`;

    const userData = await getUserData();

    return userData;
  } catch (error) {
    throw new Error('Erro ao fazer login', error as ZodError);
  }
}
