import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

const locales = ["en", "de"];
const defaultLocale = "de";

function getLocale(request: any) {
  const userLangaugeString = request.headers["accept-language"];
  if (!userLangaugeString) {
    return defaultLocale;
  }

  const hasEnglish = userLangaugeString.includes("en");
  const hasGerman = userLangaugeString.includes("de");

  // TODO take into account the q level
  // example 'en-US,en;q=0.9,de;q=0.8',
  if (hasGerman) {
    return "de";
  }
  if (hasEnglish) {
    return "en";
  }

  return defaultLocale;
}

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  console.log(req.nextUrl.locale);
  if (req.nextUrl.locale === "default") {
    const locale = req.cookies.get("NEXT_LOCALE")?.value || defaultLocale;

    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );
  }
  // // Check if there is any supported locale in the pathname
  // const pathname = req.nextUrl.pathname;
  // const pathnameIsMissingLocale = locales.every(
  //   (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  // );

  // // Redirect if there is no locale
  // if (pathnameIsMissingLocale) {
  //   const locale = getLocale(req);

  //   console.log({ locale });
  //   // e.g. incoming request is /products
  //   // The new URL is now /en-US/products
  //   return NextResponse.redirect(new URL(`/${locale}/${pathname}`, req.url));
  // }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
