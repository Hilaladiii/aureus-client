import Link from "next/link";
import { Button } from "../ui/button";

const navLink = [
  {
    title: "LIVE_LOTS",
    href: "/",
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
];

export default function Header() {
  return (
    <header className="sticky z-10 backdrop-blur-lg top-0 flex items-center justify-between w-full px-8 py-3 border-b">
      <h1 className="font-mono font-bold text-2xl">Aureus</h1>
      <nav className="text-secondary40 flex gap-4">
        {navLink.map((nav) => (
          <Link href={nav.href} key={nav.title}>
            {nav.title}
          </Link>
        ))}
      </nav>
      <div className="space-x-4">
        <Button variant="outline" className="font-semibold">
          SIGN IN
        </Button>
        <Button className="font-semibold">REGISTER</Button>
      </div>
    </header>
  );
}
