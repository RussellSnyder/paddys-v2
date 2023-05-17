"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../../next-i18next.config";
import { SupportedLanguage } from "../types";

function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex content-center">
      <ul className="flex">
        {i18n.locales.map((locale) => {
          return (
            <li className="ml-3" key={locale}>
              <Link href={redirectedPathName(locale)}>
                <span className="text-2xl">
                  {getFlagEmoji(locale === "en" ? "us" : locale)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
