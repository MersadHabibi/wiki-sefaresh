import SortSelectBox from "@/components/modules/SortSelectBox";
import { SearchIcon, StoreIcon } from "lucide-react";
import Link from "next/link";
import StoresList from "./_components/StoresList";

export default function StoresPage() {
  
  return (
    <main className="h-fit bg-neutral-100 pb-20 pt-10 dark:bg-neutral-950">
      <section className="container">
        <div className="grid grid-cols-1 md:gap-5 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-x-7">
          <div className="w-full shrink-0">
            <label className="input flex h-16 w-full items-center gap-2 !border-none bg-neutral-200 px-6 !outline-none dark:bg-neutral-900">
              <input
                type="text"
                className="grow !border-none !outline-none"
                placeholder="جستجو..."
              />
              <button>
                <SearchIcon className="size-7" />
              </button>
            </label>
          </div>
          <SortSelectBox
            options={["مرتبط ترین", "بهترین امتیاز", "بدترین امتیاز"]}
          />
          <div className="w-full lg:col-span-2 xl:col-span-3">
            <div className="hidden h-16 w-full items-center rounded-lg bg-neutral-200 px-6 dark:bg-neutral-900 md:flex">
              <p className="font-bold">مرتب کردن بر اساس:</p>
              <div className="flex h-full gap-x-4 pr-7">
                <button className="active h-full border-primary px-2 opacity-70 hover:opacity-80 [&.active]:border-y-2 [&.active]:font-medium [&.active]:opacity-100">
                  مرتبط ترین
                </button>
                <button className="h-full border-primary px-2 opacity-70 hover:opacity-80 [&.active]:border-y-2 [&.active]:font-medium [&.active]:opacity-100">
                  بهترین امتیاز
                </button>
                <button className="h-full border-primary px-2 opacity-70 hover:opacity-80 [&.active]:border-y-2 [&.active]:font-medium [&.active]:opacity-100">
                  بدترین امتیاز
                </button>
                {/* <button className="h-full border-primary px-2 opacity-70 hover:opacity-80 [&.active]:border-y-2 [&.active]:font-medium [&.active]:opacity-100">
                  بیشترین تجربه
                </button>
                <button className="h-full border-primary px-2 opacity-70 hover:opacity-80 [&.active]:border-y-2 [&.active]:font-medium [&.active]:opacity-100">
                  کمترین تجربه
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <StoresList />
      </section>
    </main>
  );
}
