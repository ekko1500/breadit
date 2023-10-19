import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const Navbar: any = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className=" fixed top-0 inset-x-0 h-fit bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-300 dark:border-slate-900 z-[10] py-2">
      <div className=" container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
          {/* <Icons.logo className=" text-sm" /> */}

          <Logo />

          <p className="hidden text-zinc-700 dark:text-slate-300 text-sm font-medium md:block">
            SociVibe
          </p>
        </Link>
        {/* search bar */}
        <div className=" flex gap-4">
          <ThemeToggle />

          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Link href="/sign-in" className={buttonVariants()}>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
