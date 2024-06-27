'use server';

import { cookies } from 'next/headers';

export async function getAccessToken() {
  const accessToken = cookies().get('@devorum/accessToken')?.value;
  return accessToken || null;
}

export async function getRefreshToken() {
  const accessToken = cookies().get('@devorum/refreshToken')?.value;
  return accessToken || null;
}
