'use server';
import { CURRENT_TIME_IN_MILLISECONDS } from 'constants/times';
import { lastFetchCacheKey } from 'constants/variables';
import { cookies } from 'next/headers';
import httpClient from 'services/http/requests/axios.config';

export async function persistAuth({
  accessToken,
  refreshToken
}: {
  accessToken: string;
  refreshToken: string;
}) {
  console.log('persisting auth');
  try {
    const expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() + 7);
    const expiresMinutes = new Date();
    expiresMinutes.setMinutes(expiresDate.getMinutes() + 5);

    httpClient.defaults.headers.Authorization = `Bearer ${accessToken}`;
    httpClient.defaults.headers.refresh_token = refreshToken;

    cookies().set('@devorum/accessToken', `Bearer ${accessToken}`, {
      expires: expiresDate,
      path: '/'
    });
    cookies().set('@devorum/refreshToken', refreshToken, {
      expires: expiresMinutes,
      path: '/'
    });

    cookies().set(lastFetchCacheKey, CURRENT_TIME_IN_MILLISECONDS.toString(), {
      expires: expiresMinutes,
      path: '/'
    });
  } catch (error) {
    console.error('persistAuth error', error);
    throw new Error('Erro ao persistir dados', error as ErrorOptions);
  }
}
