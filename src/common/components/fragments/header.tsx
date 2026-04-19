"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import useSWR from "swr";
import { getMe } from "@/services/user";
import useSWRMutation from "swr/mutation";
import { signOut } from "@/services/auth";
import { Toast } from "../ui/sonner";
import { SWR_KEY } from "@/common/constants/swr-key";
import { Avatar, AvatarFallback } from "../ui/avatar";

const navLink = [
  {
    title: "LIVE_AUCTIONS",
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
    title: "MY_AUCTIONS",
    href: "/my-auctions",
    permissions: ["SELLER"],
  },
  {
    title: "WALLET",
    href: "/wallet",
    permissions: ["SELLER", "BIDDER"],
  },
];

export default function Header() {
  const pathname = usePathname();
  const { push } = useRouter();
  const path = ["/sign-in", "/register"];
  const isHidden = path.includes(pathname);

  const { data } = useSWR(SWR_KEY.USER.ME, getMe, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    shouldRetryOnError: false,
  });
  const { trigger } = useSWRMutation(SWR_KEY.AUTH.SIGN_OUT, signOut);
  const user = data?.data;

  const handleSignOut = () => {
    trigger(null, {
      onSuccess: () => {
        push("/sign-in");
      },
      onError: (err: Error) => {
        Toast({
          type: "error",
          message: err.message,
        });
      },
    });
  };

  if (isHidden) return null;

  return (
    <header className="fixed z-10 bg-white top-0 flex items-center justify-between w-full px-8 py-3 border-b">
      <Link href="/">
        <h1 className="font-mono font-bold text-2xl tracking-tight">AUREUS</h1>
      </Link>
      <nav className="text-secondary40 text-sm font-medium flex gap-4">
        {navLink.map((nav) => (
          <Link
            href={nav.href as any}
            key={nav.title}
            className="hover:underline"
            hidden={
              Array.isArray(nav.permissions) &&
              !nav.permissions.includes(user?.role!)
            }
          >
            {nav.title}
          </Link>
        ))}
      </nav>
      <div className="space-x-4">
        {user ? (
          <div className="relative group">
            <Avatar>
              <AvatarFallback className="font-bold">
                {user.username ? user.username.charAt(0).toUpperCase() : "U"}
              </AvatarFallback>
            </Avatar>

            <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-right">
              <div className="p-4 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-900 truncate uppercase mb-1">
                  {user.username}
                </p>
                <p className="text-xs text-gray-500 truncate font-mono">
                  {user.email}
                </p>
              </div>

              <div className="flex flex-col">
                <Link href="/">
                  <Button
                    variant="ghost"
                    className="w-full text-xs text-left"
                    size="lg"
                  >
                    PROFILE
                  </Button>
                </Link>
                <Button
                  onClick={handleSignOut}
                  variant="ghost"
                  className="text-xs text-left"
                  size="lg"
                >
                  SIGN OUT
                </Button>
              </div>
            </div>
          </div>
        ) : (
          /* LOGGED OUT STATE */
          <>
            <Link href="/sign-in">
              <Button
                variant="outline"
                className="font-semibold rounded-none border-gray-300 text-gray-900 hover:bg-gray-50 tracking-wide"
              >
                SIGN IN
              </Button>
            </Link>
            <Link href="/register">
              <Button className="font-semibold rounded-none bg-gray-900 text-white hover:bg-gray-800 tracking-wide">
                REGISTER
              </Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
