import { LOGIN } from 'constants/localRoutePaths';
import { NextResponse, type NextRequest } from 'next/server';
import { isAuthPages } from './middlewares/isAuthPages';
import { isAuthvalid } from './middlewares/isAuthValid';
import { isProtectedRoutes } from './middlewares/isProtectedRoutes';

export async function middleware(request: NextRequest) {
  const isAuthenticated = await isAuthvalid(request);

  if (!isAuthenticated && isProtectedRoutes(request)) {
    return NextResponse.rewrite(new URL(LOGIN, request.url));
  }

  if (isAuthenticated && isAuthPages(request)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
};
