import 'dotenv/config';

export const API_URL_BASE = process.env.VITE_REACT_APP_API_URL_BASE;
export const LOGIN_ENDPOINT = '/login';
export const REGISTER_ENDPOINT = '/register';
export const QUESTIONS_ENDPOINT = '/questions';
export const COMMENTS_ENDPOINT = '/comments/:comment_id';
