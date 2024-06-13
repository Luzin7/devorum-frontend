'use server';
import { CREATE_USER_ENDPOINT, LOGIN_ENDPOINT } from 'env/api';
import { persistAuth } from 'functions/persistAuth';
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
  console.log('getUserData');
  try {
    const { data } = await httpClient.get('/users');

    console.log('user data received');

    return data.user;
  } catch (error) {
    throw new Error('Erro na requisição', error as ZodError);
  }
}

export async function refreshSession() {
  try {
    console.log('initiating refresh process');
    const { data } = await httpClient.post('/sessions/refresh');
    console.log('refreshing session data received');
    console.log('persisting new session data');
    await persistAuth({
      accessToken: data.accessToken,
      refreshToken: data.refreshToken
    });
  } catch (error) {
    console.error('refresh token error', error);
    throw new Error('Erro na requisição:', error as ZodError);
  }
}

export async function login(data: LoginProps) {
  const { email, password } = data;

  try {
    console.log('Initiating login process');
    const { data } = await httpClient.post(LOGIN_ENDPOINT, {
      email,
      password
    });
    console.log('Login success');

    console.log('Login data received');
    console.log('initiating persist data with login');
    await persistAuth({
      accessToken: data.accessToken,
      refreshToken: data.refreshToken
    });

    console.log('Login data sent to persistAuth with success');

    const userData = await getUserData();

    return userData;
  } catch (error) {
    console.log('Login', error);
    throw new Error('Erro ao fazer login', error as ZodError);
  }
}
