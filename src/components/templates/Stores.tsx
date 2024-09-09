"use client";

import GET_All_STORES from "@/graphql/client/queries/GetAllStoresQuery";
import GET_POPULAR_STORES from "@/graphql/client/queries/GetPopularStores";
import { TStore } from "@/types";
import { useQuery } from "@apollo/client";
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

  const { loading, error, data } = useQuery(GET_POPULAR_STORES);

  if (error) return null;

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
      {loading
        ? new Array(isXLDevice ? 15 : 10)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="light-skeleton h-9 w-28 rounded-sm bg-neutral-200 dark:skeleton dark:bg-neutral-900 sm:h-10"></div>
            ))
        : data?.popularStores
            .slice(0, isXLDevice ? undefined : 20)
            .map((store: { id: string; name: string } | null) => (
              <Link
                href={`/stores/${store?.id}`}
                key={store?.id}
                className="flex h-9 items-center justify-center rounded-md bg-neutral-200 px-4 py-1 font-medium transition-all hover:bg-primary hover:text-font-color-dark hover:!shadow-inner hover:shadow-black hover:drop-shadow-none dark:bg-neutral-900 dark:hover:bg-primary sm:h-10 sm:px-5 sm:py-1.5 sm:text-lg">
                {store?.name}
              </Link>
            ))}
      <Link
        href={"/stores"}
        className="btn btn-primary flex h-9 min-h-0 items-center gap-x-2 rounded-md border-none bg-primary px-5 py-1.5 font-medium text-font-color-dark shadow-first shadow-black/30 transition-all sm:h-10 sm:text-lg">
        <span>دیدن همه فروشگاه ها</span>
        <ArrowLeftIcon className="size-5 sm:size-6" />
      </Link>
    </div>
  );
}
