import { NextResponse } from 'next/server';

// import ROUTER_PATH from './constants/router';

// const protectedPaths: string[] = [
//   ROUTER_PATH.MAIN,
//   ROUTER_PATH.INVITATION.CREATE,
//   ROUTER_PATH.INVITATION.EDIT_CARD,
//   ROUTER_PATH.INVITATION.LIST,
// ];

// This function can be marked `async` if using `await` inside
export async function middleware() {
  // const { pathname } = request.nextUrl;

  // const token = request.cookies.get('token')?.value;

  /** 토큰 검증 */
  // if (protectedPaths.includes(pathname) && !token) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
};
