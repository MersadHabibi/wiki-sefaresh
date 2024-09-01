import ChangeThemeBtn from "@/components/modules/ChangeThemeBtn";
import Logo from "@/components/modules/Logo";
import NavLink from "@/components/modules/NavLink";
import MobileSidebarMenu from "./MobileSidebarMenu";

export default function Navbar() {
  return (
    <header className="h-16 w-full border-b-primary bg-neutral-200 dark:border-none dark:bg-neutral-900">
      <div className="container flex h-full items-center justify-between">
        <Logo />
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
