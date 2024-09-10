import ExperienceCard from "@/components/modules/ExperienceCard";
import SortSelectBox from "@/components/modules/SortSelectBox";
import StoreSelectBox from "./_components/StoreSelectBox";
import { SearchIcon } from "lucide-react";
import ExperiencesList from "./_components/ExperiencesList";
import SearchExperiences from "./_components/SearchExperiences";

export default function ExperiencePage() {
  return (
    <main className="h-fit bg-neutral-100 pb-20 pt-10 dark:bg-neutral-950">
      <section className="container flex flex-col gap-5 lg:flex-row 2xl:gap-x-7">
        <div className="shrink-0">
          <SearchExperiences />
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
