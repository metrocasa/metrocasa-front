import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import Cookies from 'js-cookie';

import { v4 as uuidv4 } from 'uuid';
import { Cookie, Header, QueryParameter } from '@/lib/constants';

const protectedRoutes = ['/dashboard'];

const CLIENT_ID_DURATION = 60 * 60 * 24 * 365;

function isPreviewTokenValid(token: unknown): token is string {
  if (typeof token !== 'string' || token === 'exit') {
    return false;
  }

  try {
    const jwt = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString(),
    );
    const now = Math.floor(Date.now() / 1000);

    return Number.isInteger(jwt.exp) && jwt.exp > now;
  } catch {
    return false;
  }
}

function getPreviewToken(request: NextRequest): string | null {
  const { searchParams } = request.nextUrl;
  const previewToken =
    searchParams.get(QueryParameter.PREVIEW_TOKEN) ??
    request.cookies.get(Cookie.PREVIEW_TOKEN)?.value;

  if (previewToken === undefined) {
    return null;
  }

  if (isPreviewTokenValid(previewToken)) {
    return previewToken;
  }

  return 'exit';
}

function getCurrentUrl(request: NextRequest): string {
  const url = new URL(request.nextUrl.toString());

  url.searchParams.delete(QueryParameter.PREVIEW_TOKEN);

  return url.toString();
}

function getClientId(request: NextRequest): string {
  return (
    request.cookies.get(Cookie.CLIENT_ID)?.value ?? uuidv4().replaceAll('-', '')
  );
}

// PUBLIC ROUTES
const publicRoutes = [
  '/',
  '/sobre-nos',
  '/blog',
  '/fazer-simulacao',
  '/empreendimentos',
  /^\/empreendimentos\/[^/]+\/[^/]+$/,
  '/contato',
  '/dashboard/sign-in',
  '/dashboard/sign-up',
  '/dashboard/reset-password',
  '/dashboard/forgot-password',
];

// Middleware function to handle public routes
export function middleware(request: NextRequest) {
  const session = cookies().get('session');
  const path = request.nextUrl.pathname;

  // Verificar se o caminho é uma rota pública
  if (
    publicRoutes.some((route) =>
      typeof route === 'string' ? route === path : route.test(path),
    )
  ) {
    return NextResponse.next();
  }

  // Verificar se o cookie 'session' existe
  if (!session) {
    return NextResponse.redirect(new URL('/dashboard/sign-in', request.url));
  }

  // Verificar se o valor do cookie 'session' está vazio
  if (session.value === '') {
    // Excluir o cookie 'session'
    Cookies.remove('session');
    // Redirecionar para a página de login
    return NextResponse.redirect(new URL('/dashboard/sign-in', request.url));
  }

  // CROCT
  const headers = new Headers(request.headers);

  headers.set(Header.REQUEST_URI, getCurrentUrl(request));

  const clientId = getClientId(request);

  if (clientId !== null) {
    headers.set(Header.CLIENT_ID, clientId);
  }

  if (request.ip !== undefined) {
    headers.set(Header.CLIENT_IP, request.ip);
  }

  const previewToken = getPreviewToken(request);

  if (previewToken !== null && previewToken !== 'exit') {
    headers.set(Header.PREVIEW_TOKEN, previewToken);
  }

  const response = NextResponse.next({
    request: {
      headers: headers,
    },
  });

  if (previewToken === 'exit') {
    response.cookies.delete(Cookie.PREVIEW_TOKEN);
  } else if (previewToken !== null) {
    response.cookies.set(Cookie.PREVIEW_TOKEN, previewToken, {
      maxAge: 0,
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
  }

  response.cookies.set(Cookie.CLIENT_ID, clientId, {
    maxAge: CLIENT_ID_DURATION,
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });

  return response;

  return NextResponse.next();
}

export const config = {
  // Regular expressions to match routes
  matcher: [
    // Match any route that doesn't end with a file extension or _next
    '/((?!.*\\.[\\w]+$|_next).*)',
    '/(api|trpc)(.*)',
    '/((?!.*\\.).*)',
  ],
};
