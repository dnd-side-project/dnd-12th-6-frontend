import { NextResponse, NextRequest } from 'next/server';

const AUTH_PAGES = ['/', '/create', 'invitation', '/list'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const isLoggedIn = !!token;

  const { pathname } = request.nextUrl;

  if (AUTH_PAGES.includes(pathname) && !isLoggedIn) {
    if (pathname !== '/onboarding') {
      return NextResponse.redirect(new URL('/onboarding', request.url));
    }
  }

  if (isLoggedIn && pathname == '/onboarding') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}
