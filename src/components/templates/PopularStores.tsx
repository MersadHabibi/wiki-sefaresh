"use client";

import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import { useMediaQuery } from "@uidotdev/usehooks";

const stores = [
  "دیجی کالا",
  "الانزا",
  "اتما",
  "بانی مد",
  "تیمچه",
  "مقداد آی تی",
  "زیمانو",
  "شیکسون",
  "عسل بانو",
  "اسنپ شاپ",
  "تاپ کوپن",
  "ترب",
  "ایمالز",
  "هیس",
  "دیجی استایل",
  "مالتینا",
  "تکنولایف",
  "مدیسه",
  "نورنگار",
  "زنبیل",
  "باسلام",
  "19 کالا",
  "ابزار آلات",
  "آسرون ",
  "تکنو لایف",
  "کامپیوتر مرکزی",
  "خانومی",
  "خانه اوستا",
  "مو تن رو",
  "فرش آنلاین",
  "گالری سکه و طلا نیری",
  "چشمک",
  "هایپر ساز",
  "دیجی استایل",
  "بانه دات کام",
  "مدیسه",
  "زنبیل",
  "اتما",
  "بایا",
  "چاره",
];

export default function PopularStores() {
  const isXLDevice = useMediaQuery("only screen and (min-width : 1280px)");

  return (
    <section className="container flex flex-col gap-y-7 pb-32 text-center sm:gap-y-10 lg:flex-row lg:text-start">
      <div className="shrink-0 lg:w-96 lg:pt-5 xl:w-[420px]">
        <h2
          className={cn(
            "mb-3 text-2xl font-semibold sm:mb-4 sm:text-4xl",
            FMorabba.className,
          )}>
          فروشگاه های پر بازدید
        </h2>
        <div className="mx-auto h-1 w-40 rounded-full bg-primary dark:bg-primary-dark lg:mx-0"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
        {stores.slice(0, isXLDevice ? undefined : 20).map((store) => (
          <button
            key={store}
            className="rounded-md bg-neutral-200 px-4 py-1 font-medium shadow-first shadow-black/25 transition-all hover:bg-primary hover:text-white hover:!shadow-inner dark:bg-neutral-900 dark:hover:bg-primary-dark sm:px-5 sm:py-1.5 sm:text-lg">
            {store}
          </button>
        ))}
        <button className="flex items-center gap-x-2 rounded-md bg-primary px-5 py-1.5 font-medium text-white shadow-first shadow-black/30 transition-all hover:brightness-90 dark:bg-primary-dark sm:text-lg">
          <span>دیدن همه فروشگاه ها</span>
          <ArrowLeftIcon className="size-5 sm:size-6" />
        </button>
      </div>
    </section>
  );
}
