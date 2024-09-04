import SortSelectBox from "@/components/modules/SortSelectBox";
import { SearchIcon, StoreIcon } from "lucide-react";
import Link from "next/link";

export default function StoresPage() {
  return (
    <main className="h-fit bg-neutral-100 pb-20 pt-10 dark:bg-neutral-950 lg:py-20">
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
        <div className="grid grid-cols-1 grid-rows-1 gap-5 pt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-7 2xl:pt-7">
          {new Array(12).fill(" ").map((_, index) => (
            <div
              key={index}
              className="rounded-lg bg-neutral-200 p-4 dark:bg-neutral-900">
              <div className="flex items-center gap-x-4 px-2 pb-5 pt-1 text-xl font-bold text-second">
                <StoreIcon className="size-8" />
                <h3>دیجی کالا</h3>
              </div>
              {/* <div className="mt-4 h-px w-full rounded-full bg-neutral-400 dark:bg-neutral-800"></div> */}
              <div className="w-full rounded-md bg-neutral-300 px-4 py-6 text-sm font-medium dark:bg-neutral-800 sm:text-base">
                <div className="flex w-full items-center justify-center px-2 font-medium">
                  <p>فروشگاه لباس</p>
                </div>
                <div className="my-5 !h-px w-full bg-neutral-400 dark:bg-neutral-700"></div>
                <div className="flex w-full items-center justify-between px-2">
                  <p>تعداد تجربه ها</p>
                  <p>۳۵</p>
                </div>
                <div className="my-5 !h-[0.5px] w-full bg-neutral-400 dark:bg-neutral-700"></div>
                <div className="flex w-full items-center justify-between px-2">
                  <p>سایت</p>
                  <Link
                    href={"#"}
                    className="text-blue-600 hover:underline dark:text-blue-500">
                    لینک
                  </Link>
                </div>
                <div className="my-5 !h-[0.5px] w-full bg-neutral-400 dark:bg-neutral-700"></div>
                <div className="flex w-full items-center justify-between px-2">
                  <p>امتیاز</p>
                  <div className="-mb-1.5 shrink-0">
                    <div className="rating gap-x-1" dir="ltr">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 size-5 bg-orange-400 sm:size-5"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 size-5 bg-orange-400 sm:size-5"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 size-5 bg-orange-400 sm:size-5"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 size-5 bg-orange-400 sm:size-5"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 size-5 bg-orange-400 sm:size-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary mt-4 w-full rounded-md border-none bg-primary text-base font-medium text-white dark:bg-primary-dark">
                دیدن تجربه ها
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
