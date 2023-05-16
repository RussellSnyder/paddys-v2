"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavLink } from "../types";
import { irishGroverFont } from "../fonts";

interface Props {
  navLinks: NavLink[];
}

const baseLinkeClassName = "text-white p-4 text-lg font-bold";
const activeLinkClassName = "text-white underline underline-offset-4";
const inActiveLinkClassName = "";

export function Navigation({ navLinks }: Props) {
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
            const isActive = pathname.startsWith(link.href);

            return (
              <Link
                className={`${baseLinkeClassName} ${
                  isActive ? activeLinkClassName : inActiveLinkClassName
                }`}
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
