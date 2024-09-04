"use client";

import { useMediaQuery } from "@uidotdev/usehooks";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export const fakeStores = [
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
  // "خانومی",
  // "خانه اوستا",
  // "مو تن رو",
  // "فرش آنلاین",
  // "گالری سکه و طلا نیری",
  // "چشمک",
  // "هایپر ساز",
  // "دیجی استایل",
  // "بانه دات کام",
  // "مدیسه",
  // "زنبیل",
  // "اتما",
  // "بایا",
  // "چاره",
];

export default function Stores() {
  const isXLDevice = useMediaQuery("only screen and (min-width : 1280px)");

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
      {fakeStores.slice(0, isXLDevice ? undefined : 20).map((store) => (
        <button
          key={store}
          className="hover:text-font-color-white rounded-md bg-neutral-200 px-4 py-1 font-medium transition-all hover:bg-primary hover:text-font-color-dark hover:!shadow-inner hover:shadow-black hover:drop-shadow-none dark:bg-neutral-900 dark:hover:bg-primary-dark sm:px-5 sm:py-1.5 sm:text-lg">
          {store}
        </button>
      ))}
      <Link
        href={"/stores"}
        className="text-font-color-white flex items-center gap-x-2 rounded-md bg-primary px-5 py-1.5 font-medium text-font-color-dark shadow-first shadow-black/30 transition-all hover:brightness-90 dark:bg-primary-dark sm:text-lg">
        <span>دیدن همه فروشگاه ها</span>
        <ArrowLeftIcon className="size-5 sm:size-6" />
      </Link>
    </div>
  );
}
