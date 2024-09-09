import ExperienceCard from "@/components/modules/ExperienceCard";
import SortSelectBox from "@/components/modules/SortSelectBox";
import StoreSelectBox from "./_components/StoreSelectBox";
import { SearchIcon } from "lucide-react";
import ExperiencesList from "./_components/ExperiencesList";

export default function ExperiencePage() {
  return (
    <main className="h-fit bg-neutral-100 pb-20 pt-10 dark:bg-neutral-950 lg:py-20">
      <section className="container flex flex-col gap-5 lg:flex-row 2xl:gap-x-7">
        <div className="shrink-0">
          <label className="input flex h-16 w-full items-center gap-2 !border-none bg-neutral-200 px-6 !outline-none dark:bg-neutral-900 lg:w-80 2xl:w-96">
            <input
              type="text"
              className="grow !border-none !outline-none"
              placeholder="جستجو..."
            />
            <button>
              <SearchIcon className="size-7" />
            </button>
          </label>
          <StoreSelectBox />
          <SortSelectBox
            options={["مرتبط ترین", "جدیدترین", "مثبت ترین", "منفی ترین"]}
          />
        </div>
        <div className="w-full">
          <div className="hidden h-16 w-full items-center rounded-lg bg-neutral-200 px-6 dark:bg-neutral-900 md:flex">
            <p className="font-bold">مرتب کردن بر اساس:</p>
            <div className="flex h-full gap-x-4 pr-7">
              <button className="active h-full border-primary px-2 opacity-70 hover:opacity-80 [&.active]:border-y-2 [&.active]:font-medium [&.active]:opacity-100">
                مرتبط ترین
              </button>
              <button className="h-full border-primary px-2 opacity-70 hover:opacity-80 [&.active]:border-y-2 [&.active]:font-medium [&.active]:opacity-100">
                جدیدترین
              </button>
              <button className="h-full border-primary px-2 opacity-70 hover:opacity-80 [&.active]:border-y-2 [&.active]:font-medium [&.active]:opacity-100">
                مثبت ترین
              </button>
              <button className="h-full border-primary px-2 opacity-70 hover:opacity-80 [&.active]:border-y-2 [&.active]:font-medium [&.active]:opacity-100">
                منفی ترین
              </button>
            </div>
          </div>

         <ExperiencesList />
        </div>
      </section>
    </main>
  );
}
