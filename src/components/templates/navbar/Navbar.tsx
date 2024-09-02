import ChangeThemeBtn from "@/components/modules/ChangeThemeBtn";
import Logo from "@/components/modules/Logo";
import NavLink from "@/components/modules/NavLink";
import MobileSidebarMenu from "./MobileSidebarMenu";
import { cn } from "@/lib/utils";
import { FMorabba } from "@/config/fonts";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="h-16 w-full shrink-0 border-b-primary bg-neutral-200 dark:border-none dark:bg-neutral-900 sm:h-20">
      <div className="container flex h-full items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Logo />
          <Link
            href={"/"}
            className={cn(
              "pb-1 text-xl font-bold text-blue-700 dark:text-primary-dark sm:text-2xl",
              FMorabba.className,
            )}>
            ویکی سفارش
          </Link>
        </div>
        <nav className="hidden items-center gap-x-5 sm:gap-x-10 md:flex">
          <NavLink
            href={"/new-experience"}
            className="font-medium [&.active]:text-primary-dark  dark:[&.active]:text-primary">
            ثبت تجربه
          </NavLink>
          <NavLink
            href={"/new-store"}
            className="font-medium [&.active]:text-primary-dark dark:[&.active]:text-primary">
            ثبت فروشگاه
          </NavLink>
          <ChangeThemeBtn />
        </nav>
        <div className="flex items-center gap-x-4 md:hidden">
          <ChangeThemeBtn />
          <MobileSidebarMenu />
        </div>
      </div>
    </header>
  );
}
