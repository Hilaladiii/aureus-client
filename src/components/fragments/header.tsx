"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navLink = [
  {
    title: "LIVE_LOTS",
    href: "/live-auctions",
  },
  {
    title: "UPCOMING",
    href: "/",
  },
  {
    title: "PAST_SALES",
    href: "/",
  },
  {
    title: "BLOG",
    href: "/",
  },
  {
    title: "WALLET",
    href: "/wallet",
  },
];

export default function Header() {
  const pathname = usePathname();
  const path = ["/sign-in", "/register"];
  const isHidden = path.includes(pathname);
  return (
    <header
      className={cn(
        "fixed z-10 bg-white top-0 flex items-center justify-between w-full px-8 py-3 border-b",
        isHidden && "hidden",
      )}
    >
      <h1 className="font-mono font-bold text-2xl tracking-tight">AUREUS</h1>
      <nav className="text-secondary40 text-sm font-medium flex gap-4">
        {navLink.map((nav) => (
          <Link href={nav.href} key={nav.title} className="hover:underline">
            {nav.title}
          </Link>
        ))}
      </nav>
      <div className="space-x-4">
        <Link href="/sign-in">
          <Button variant="outline" className="font-semibold">
            SIGN IN
          </Button>
        </Link>
        <Link href="/register">
          <Button className="font-semibold">REGISTER</Button>
        </Link>
      </div>
    </header>
  );
}
