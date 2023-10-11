import { NextRequest, NextResponse } from 'next/server';
import { CREATE_TOPIC, HOME, LOGIN, REGISTER } from 'utils';

export function middleware(req: NextRequest) {
  // const registerURL = new URL(REGISTER, req.url);
  // const isLoggedIn = req.cookies.getAll();
  // if (req.nextUrl.pathname === HOME) {
  //   return NextResponse.next();
  // }
  // if (req.nextUrl.pathname.startsWith(REGISTER)) {
  //   return NextResponse.next();
  // }
  // if (req.nextUrl.pathname.startsWith(LOGIN)) {
  //   return NextResponse.next();
  // }
  // if (req.nextUrl.pathname.startsWith('/profile')) {
  //   if (!isLoggedIn) {
  //     if (req.nextUrl.pathname === REGISTER) {
  //       return NextResponse.next();
  //     }
  //     NextResponse.redirect(registerURL);
  //   }
  //   return NextResponse.next();
  // }
  // if (req.nextUrl.pathname.startsWith(CREATE_TOPIC)) {
  //   if (!isLoggedIn) {
  //     if (req.nextUrl.pathname === REGISTER) {
  //       return NextResponse.next();
  //     }
  //     return NextResponse.redirect(registerURL);
  //   }
  //   return NextResponse.next();
  // }
}
