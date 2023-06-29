"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { irishGroverFont } from "../fonts";
import { SupportedLanguage } from "../types";

interface NavLink {
  languageKey: string;
  href: string;
  label: string;
  translatedName?: string;
}
const navLinks: NavLink[] = [
  {
    languageKey: "about",
    label: "About",
    href: "about",
  },
  {
    languageKey: "upcoming",
    label: "Upcoming",
    href: "upcoming",
  },
  {
    languageKey: "media",
    label: "Media",
    href: "media",
  },
  {
    languageKey: "downloads",
    label: "Downloads",
    href: "downloads",
  },
  {
    languageKey: "contact",
    label: "Contact",
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
                key={link.label}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
