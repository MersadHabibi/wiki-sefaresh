import SortSelectBox from "@/components/modules/SortSelectBox";
import ExperiencesList from "./_components/ExperiencesList";
import SearchExperiences from "./_components/SearchExperiences";
import SortExperiences, { sorts } from "./_components/SortExperiences";
import StoreSelectBox from "./_components/StoreSelectBox";

export default function ExperiencePage() {
  return (
    <main className="h-fit bg-neutral-100 pb-20 pt-10 dark:bg-neutral-950">
      <section className="container flex flex-col gap-5 lg:flex-row 2xl:gap-x-7">
        <div className="top-28 h-fit shrink-0 lg:sticky">
          <SearchExperiences />
          <StoreSelectBox />
          <SortSelectBox options={sorts} />
        </div>
        <div className="w-full">
          <SortExperiences />

          <ExperiencesList />
        </div>
      </section>
    </main>
  );
}
