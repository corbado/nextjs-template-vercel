"use client";

import {
  FingerPrintIcon,
  HomeIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "Overview", href: "/profile", icon: HomeIcon },
  {
    name: "Session Details",
    href: "/profile/session-details",
    icon: DocumentIcon,
  },
  {
    name: "Passkey List",
    href: "/profile/passkey-list",
    icon: FingerPrintIcon,
  },
] as const;

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
                "text-white": pathname !== link.href,
              },
            )}
            style={{
              backgroundColor:
                pathname === link.href ? "#2C334B" : "transparent",
            }}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block" style={{ fontSize: "18px" }}>
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
