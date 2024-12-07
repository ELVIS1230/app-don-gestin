import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Obtén el token desde las cookies
  const token = request.cookies.get("authorization");
  console.log("ejecutandose")
  // Si no hay token, redirige al usuario
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Permitir el acceso si hay token
  return NextResponse.next();
}

// Define las rutas en las que aplicar el middleware
export const config = {
  matcher: ["/home/:path*"], // Cambia "/protected/:path*" por las rutas protegidas de tu app
};