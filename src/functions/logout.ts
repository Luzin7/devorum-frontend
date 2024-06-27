import httpClient from 'services/http/requests/axios.config';

function clearCookies() {
  const cookies = document.cookie.split('; ');

  for (const cookie of cookies) {
    const [name] = cookie.split('=');
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}

export function logout() {
  httpClient.defaults.headers.Authorization = null;
  httpClient.defaults.headers.refresh_token = null;

  clearCookies();

  localStorage.clear();

  window.location.reload();
}
