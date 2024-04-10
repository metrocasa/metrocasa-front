import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

const protectedRoutes = ['/dashboard'];

// PUBLIC ROUTES
const publicRoutes = [
  '/',
  '/sobre-nos',
  '/blog',
  '/fazer-simulacao',
  '/empreendimentos',
  '/empreendimentos/:empreendimento/:id',
  '/contato',
  '/dashboard/sign-in',
  '/dashboard/sign-up',
];

// Middleware function to handle public routes
export function middleware(request: NextRequest) {
  const auth = cookies().get('session');
  const path = request.nextUrl.pathname;

  if (publicRoutes.includes(path)) {
    return NextResponse.next();
  }

  if (auth) {
    return NextResponse.next();
  }

  if (!auth) {
    return NextResponse.redirect(new URL('/dashboard/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Regular expressions to match routes
  matcher: [
    // Match any route that doesn't end with a file extension or _next
    '/((?!.*\\.[\\w]+$|_next).*)',
    '/(api|trpc)(.*)',
  ],
};
