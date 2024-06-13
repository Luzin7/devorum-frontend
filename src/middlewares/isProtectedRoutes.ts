'use server';
import { type NextRequest } from 'next/server';
import { protectedRoutes } from './protectedRoutes';

export function isProtectedRoutes(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtectedRoute = protectedRoutes.some((path) =>
    pathname.startsWith(path)
  );
  return isProtectedRoute;
}
