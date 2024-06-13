import { type NextRequest } from 'next/server';
import { authRoutes } from './authRoutes';

export function isAuthPages(request: NextRequest) {
  const { pathname } = request.nextUrl;
  return authRoutes.some((path) => pathname.startsWith(path));
}
