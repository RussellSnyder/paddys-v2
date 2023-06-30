"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { irishGroverFont } from "../fonts";
import { useEffect, useState } from "react";
import "./Navigation.css";
import { useRouter } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}
const navLinks: NavLink[] = [
  {
    label: "About",
    href: "about",
  },
  {
    label: "Upcoming",
    href: "upcoming",
  },
  {
    label: "Media",
    href: "media",
  },
  {
    label: "Downloads",
    href: "downloads",
  },
  {
    label: "Contact",
    href: "contact",
  },
];

const baseLinkClassName = "text-white p-2 text-2xl font-bold";
const baseMobileClassName = "text-white p-4 text-4xl font-bold";
const activeLinkClassName = "text-white underline underline-offset-4";
const inActiveLinkClassName = "";

export function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-yellow-700 w-full p-4">
      <section className="MOBILE-MENU flex justify-between lg:hidden">
        <div
          className={`${irishGroverFont.className} flex-2 text-white text-2xl`}
        >
          <Link href="/">Paddy&apos;s Last Order</Link>
        </div>

        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen(true)}
        >
          <span className="block h-1 w-10 bg-white"></span>
          <span className="block h-1 w-10 bg-white"></span>
          <span className="block h-1 w-10 bg-white"></span>
        </div>

        <div
          className={isNavOpen ? "showMenuNav bg-yellow-700" : "hideMenuNav"}
        >
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-16 w-16 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="NAVIGATION-MOBILE-OPEN mt-32 flex flex-col items-center justify-between min-h-[250px]">
            {navLinks.map((link) => {
              const isActive = pathname.includes(link.href);

              return (
                <li
                  key={link.label}
                  className={`${baseMobileClassName} ${
                    isActive ? activeLinkClassName : inActiveLinkClassName
                  }`}
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="DESKTOP-MENU hidden lg:flex justify-between items-center">
        <div
          className={`${irishGroverFont.className} flex-2 text-white text-4xl`}
        >
          <Link href="/">Paddy&apos;s Last Order</Link>
        </div>

        <ul className="space-x-6 flex">
          {navLinks.map((link) => {
            const isActive = pathname.includes(link.href);

            return (
              <li
                key={link.label}
                className={`${baseLinkClassName} ${
                  isActive ? activeLinkClassName : inActiveLinkClassName
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </nav>
  );
}
