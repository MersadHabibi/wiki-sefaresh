"use client";

import Logo from "@/components/modules/Logo";
import NavLink from "@/components/modules/NavLink";
import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  MenuIcon,
  ShoppingBasketIcon,
  StoreIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const menuLinkStyles =
  "[&.active]:before:content-[' '] relative flex items-center gap-x-3 overflow-hidden rounded-lg bg-neutral-200 p-3 text-base font-medium transition-all hover:bg-neutral-300 dark:bg-neutral-900 [&.active]:bg-neutral-300 [&.active]:pr-6 [&.active]:before:absolute [&.active]:before:right-0 [&.active]:before:h-full [&.active]:before:w-3 [&.active]:before:bg-primary-dark dark:[&.active]:bg-neutral-800";

export default function MobileSidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon className="size-7" />
      </button>
      <div
        className={cn(
          "invisible fixed inset-0 w-full bg-black/30 opacity-0 backdrop-blur-sm transition-all dark:bg-white/5",
          isOpen && "visible opacity-100",
        )}
        onClick={() => setIsOpen(false)}>
        <div
          className={cn(
            "fixed -right-full bottom-0 top-0 h-full w-full max-w-80 bg-neutral-50 px-6 py-4 transition-all dark:bg-neutral-950",
            isOpen && "right-0",
          )}
          onClick={(event) => event.stopPropagation()}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Logo />
              <Link
                href={"/"}
                className={cn(
                  "pb-1 text-2xl font-bold text-blue-700 dark:text-primary-dark",
                  FMorabba.className,
                )}>
                ویکی سفارش
              </Link>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <XIcon className="size-7" />
            </button>
          </div>
          <nav className="pt-8">
            <ul className="space-y-4">
              <li>
                <NavLink href={"/"} className={menuLinkStyles}>
                  <HomeIcon className="size-6" />
                  <span>صفحه اصلی</span>
                </NavLink>
              </li>
              <li>
                <NavLink href={"/new-experience"} className={menuLinkStyles}>
                  <ShoppingBasketIcon className="size-6" />
                  <span>ثبت تجربه</span>
                </NavLink>
              </li>
              <li>
                <NavLink href={"/new-store"} className={menuLinkStyles}>
                  <StoreIcon className="size-6" />
                  <span>ثبت فروشگاه</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
