import SortSelectBox from "@/components/modules/SortSelectBox";
import SearchStores from "./_components/SearchStores";
import StoresList from "./_components/StoresList";
import SortStores, { sorts } from "./_components/SortStores";

export default function StoresPage() {
  return (
    <main className="h-fit bg-neutral-100 pb-20 pt-10 dark:bg-neutral-950">
      <section className="container">
        <div className="grid grid-cols-1 md:gap-5 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-x-7">
          <div className="w-full shrink-0">
            <SearchStores />
          </div>
          <SortSelectBox options={sorts} />
          <div className="w-full lg:col-span-2 xl:col-span-3">
            <SortStores />
          </div>
        </div>
        <StoresList />
      </section>
    </main>
  );
}
