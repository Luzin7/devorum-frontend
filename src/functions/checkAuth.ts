import { redirect } from 'next/navigation';
import httpClient from 'services/http/requests/axios-conf';
import { REGISTER } from 'utils';

function hasAuthCookies(cookies: string[]) {
  return (
    cookies.filter((cookie) => cookie.includes('refresh-token')).length === 1
  );
}

export function checkAuth(cookies: string[]) {
  if (!hasAuthCookies(cookies)) {
    return redirect(REGISTER);
  }

  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');

    if (!value) {
      return redirect(REGISTER);
    }

    if (name === 'refresh-token') {
      httpClient.defaults.headers.refresh_token = value;
    }
  }
}
