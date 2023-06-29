"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { irishGroverFont } from "../fonts";

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

const baseLinkeClassName = "text-white p-4 text-lg font-bold";
const activeLinkClassName = "text-white underline underline-offset-4";
const inActiveLinkClassName = "";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-yellow-700 w-full p-4">
      <div className="flex">
        <div
          className={`${irishGroverFont.className} flex-1 text-white text-2xl`}
        >
          <Link href="/">Paddy&apos;s Last Order</Link>
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
