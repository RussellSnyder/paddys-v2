"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getDictionary } from "../[lang]/dictionaries";
import { irishGroverFont } from "../fonts";
import { SupportedLanguage } from "../types";

interface NavLink {
  languageKey: string;
  href: string;
  fallbackLabel: string;
  translatedName?: string;
}
const staticNavLinks: NavLink[] = [
  {
    languageKey: "about",
    fallbackLabel: "About",
    href: "about",
  },
  {
    languageKey: "upcoming",
    fallbackLabel: "Upcoming",
    href: "upcoming",
  },
  {
    languageKey: "media",
    fallbackLabel: "Media",
    href: "media",
  },
  {
    languageKey: "downloads",
    fallbackLabel: "Downloads",
    href: "downloads",
  },
  {
    languageKey: "contact",
    fallbackLabel: "Contact",
    href: "contact",
  },
];

const baseLinkeClassName = "text-white p-4 text-lg font-bold";
const activeLinkClassName = "text-white underline underline-offset-4";
const inActiveLinkClassName = "";

interface Props {
  locale: SupportedLanguage;
}

export function Navigation({ locale }: Props) {
  const [navLinks, setNavLinks] = useState<NavLink[]>(staticNavLinks);

  useEffect(() => {
    async function setTranslations() {
      const dictionary = await getDictionary(locale);

      const enrichNavLinks = staticNavLinks?.map((entry) => ({
        ...entry,
        translatedName:
          dictionary.navigation[
            entry.languageKey as keyof typeof dictionary.navigation
          ],
      }));
      setNavLinks(enrichNavLinks);
    }

    setTranslations();
  }, [locale]);

  const pathname = usePathname();

  return (
    <nav className="bg-yellow-700 w-full p-4">
      <div className="flex">
        <div
          className={`${irishGroverFont.className} flex-1 text-white text-2xl`}
        >
          <Link href="/" locale={locale}>
            Paddy&apos;s Last Order
          </Link>
        </div>
        <div className="flex-10">
          {navLinks.map((link) => {
            const isActive = pathname.includes(link.href);

            return (
              <Link
                className={`${baseLinkeClassName} ${
                  isActive ? activeLinkClassName : inActiveLinkClassName
                }`}
                href={link.href}
                locale={locale}
                key={link.fallbackLabel}
              >
                {link.translatedName ?? link.fallbackLabel}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
