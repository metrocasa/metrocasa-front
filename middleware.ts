import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

const protectedRoutes = ['/dashboard'];

// Middleware function to handle public routes
export function middleware(request: NextRequest) {
  cookies().get('auth');
  const path = request.nextUrl.pathname;

  console.log(path);

  console.log(path);

  if (path === '/dashboard') {
    console.log('é igual');
  }

  return NextResponse.next();
}

export const config = {
  // Regular expressions to match routes
  matcher: [
    // Match any route that doesn't end with a file extension or _next
    '/((?!.*\\.[\\w]+$|_next).*)',

    // PUBLIC ROUTES
    '/(api|trpc)(.*)',
    '/',
    '/sobre-nos',
    '/blog',
    '/fazer-simulacao',
    '/empreendimentos',
    '/empreendimentos/:empreendimento/:id',
    '/contato',
  ],
};
