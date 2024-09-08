"use client";

import GET_All_STORES from "@/graphql/client/queries/GetAllStoresQuery";
import GET_POPULAR_STORES from "@/graphql/client/queries/GetPopularStores";
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

  console.log(loading, data);

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
      {loading
        ? new Array(isXLDevice ? 25 : 17)
            .fill("")
            .map((_) => (
              <div
                key={_ + Math.random()}
                className="skeleton h-10 w-28 rounded-md bg-neutral-200 dark:bg-neutral-900"></div>
            ))
        : data?.popularStores
            .slice(0, isXLDevice ? undefined : 20)
            .map((store: any) => (
              <Link
                href={"#"}
                key={store.id}
                className="hover:text-font-color-white h-fit rounded-md bg-neutral-200 px-4 py-1 font-medium transition-all hover:bg-primary hover:text-font-color-dark hover:!shadow-inner hover:shadow-black hover:drop-shadow-none dark:bg-neutral-900 dark:hover:bg-primary sm:px-5 sm:py-1.5 sm:text-lg">
                {store.name}
              </Link>
            ))}
      <Link
        href={"/stores"}
        className="text-font-color-white btn flex h-fit min-h-0 items-center gap-x-2 rounded-md bg-primary px-5 py-1.5 font-medium text-font-color-dark shadow-first shadow-black/30 transition-all dark:bg-primary sm:text-lg">
        <span>دیدن همه فروشگاه ها</span>
        <ArrowLeftIcon className="size-5 sm:size-6" />
      </Link>
    </div>
  );
}
