import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import Cookies from "js-cookie";

const protectedRoutes = ["/dashboard"];

// PUBLIC ROUTES
const publicRoutes = [
  "/",
  "/sobre-nos",
  "/blog",
  "/fazer-simulacao",
  "/empreendimentos",
  /^\/empreendimentos\/[^/]+(\/[^/]+)?$/,
  "/contato",
  "/dashboard/sign-in",
  "/dashboard/sign-up",
  "/dashboard/reset-password",
  "/dashboard/forgot-password",
];

// Middleware function to handle public routes
export function middleware(request: NextRequest) {
  const session = cookies().get("session");
  const path = request.nextUrl.pathname;

  // Verificar se o caminho é uma rota pública
  if (
    publicRoutes.some((route) =>
      typeof route === "string" ? route === path : route.test(path)
    )
  ) {
    return NextResponse.next();
  }

  // Verificar se o cookie 'session' existe
  if (!session) {
    return NextResponse.redirect(new URL("/dashboard/sign-in", request.url));
  }

  // Verificar se o valor do cookie 'session' está vazio
  if (session.value === "") {
    // Excluir o cookie 'session'
    Cookies.remove("session");
    // Redirecionar para a página de login
    return NextResponse.redirect(new URL("/dashboard/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Regular expressions to match routes
  matcher: [
    // Match any route that doesn't end with a file extension or _next
    "/((?!.*\\.[\\w]+$|_next).*)",
    "/(api|trpc)(.*)",
  ],
};
