import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  isLocale,
  resolveLocale,
} from "@/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

function buildCsp(nonce: string, isDev: boolean): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${isDev ? "'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data: blob: https://img.youtube.com https://i.ytimg.com https://firebasestorage.googleapis.com https://pub-1c7f9477558d4afebc1486262d64b4f3.r2.dev",
    "connect-src 'self'",
    "frame-src https://www.youtube-nocookie.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ]
    .filter(Boolean)
    .join("; ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function resolveRequestLocale(request: NextRequest): typeof DEFAULT_LOCALE {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && isLocale(cookie)) return cookie;
  return resolveLocale(request.headers.get("accept-language"));
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const nonce = crypto.randomUUID().replace(/-/g, "");
  const isDev = process.env.NODE_ENV !== "production";
  const csp = buildCsp(nonce, isDev);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("x-csp", csp);
  requestHeaders.set("Content-Security-Policy", csp);

  const first = pathname.split("/").filter(Boolean)[0] ?? "";

  if (isLocale(first)) {
    requestHeaders.set("x-locale", first);
    const response = NextResponse.next({
      request: { headers: requestHeaders },
    });
    response.headers.set("Content-Security-Policy", csp);
    return response;
  }

  const detected = resolveRequestLocale(request);
  const target = new URL(
    `/${detected}${pathname === "/" ? "" : pathname}${search}`,
    request.url,
  );
  const response = NextResponse.redirect(target, 307);
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|icon|apple-icon|manifest.webmanifest|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
