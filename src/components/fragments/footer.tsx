"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const path = ["/sign-in", "/register"];
  const isHidden = path.includes(pathname);

  if (isHidden) return null;
  return (
    <footer className="w-full mt-20 bg-white border-t px-8 pt-16 pb-6 flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div className="max-w-sm">
          <h2 className="font-mono font-bold text-3xl tracking-tight mb-4 text-black">
            AUREUS
          </h2>
          <p className="text-secondary40 font-mono text-xs uppercase tracking-widest leading-relaxed">
            High-Frequency Auction Infrastructure. <br />
            Engineered for absolute mechanical accuracy.
          </p>
        </div>
        <div className="flex gap-16 md:gap-24">
          <div className="flex flex-col space-y-3">
            <span className="font-mono text-xs font-bold text-black tracking-[0.2em] uppercase mb-2">
              Index
            </span>
            {["Live_Auctions", "Upcoming", "Past_Sales", "Journal"].map(
              (item) => (
                <Link
                  key={item}
                  href="/"
                  className="text-secondary40 text-sm font-medium hover:text-black hover:underline uppercase"
                >
                  {item}
                </Link>
              ),
            )}
          </div>

          <div className="flex flex-col space-y-3">
            <span className="font-mono text-xs font-bold text-black tracking-[0.2em] uppercase mb-2">
              Legal
            </span>
            {["Terms_of_Service", "Bidding_Rules", "Privacy_Protocol"].map(
              (item) => (
                <Link
                  key={item}
                  href="/"
                  className="text-secondary40 text-sm font-medium hover:text-black hover:underline uppercase"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[10px] text-secondary40 uppercase tracking-widest">
          © {new Date().getFullYear()} AUREUS NETWORK // ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}
