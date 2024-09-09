"use client";

import GET_All_STORES from "@/graphql/client/queries/GetAllStoresQuery";
import { useQuery } from "@apollo/client";
import { StoreIcon } from "lucide-react";
import Link from "next/link";

export default function StoresList() {
  const { loading, error, data } = useQuery(GET_All_STORES);

  if (error) return null;

  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-5 pt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-7 2xl:pt-7">
      {loading
        ? new Array(8).fill("").map((_, index) => (
            <div
              key={index}
              className="rounded-lg bg-neutral-200 p-4 dark:bg-neutral-900">
              <div className="flex items-center gap-x-4 px-2 pb-5 pt-1 text-xl font-bold text-second">
                <div className="light-skeleton h-8 w-32 !rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800 sm:w-36"></div>
              </div>
              <div className="flex h-64 w-full flex-col justify-between !rounded-md bg-neutral-300 px-4 py-6 text-sm font-medium dark:bg-neutral-800 sm:text-base">
                <div className="light-skeleton h-8 w-full !rounded-md bg-neutral-400/20 dark:skeleton dark:bg-neutral-700/30"></div>
                <div className="light-skeleton h-8 w-full !rounded-md bg-neutral-400/20 dark:skeleton dark:bg-neutral-700/30"></div>
                <div className="light-skeleton h-8 w-full !rounded-md bg-neutral-400/20 dark:skeleton dark:bg-neutral-700/30"></div>
                <div className="light-skeleton h-8 w-full !rounded-md bg-neutral-400/20 dark:skeleton dark:bg-neutral-700/30"></div>
              </div>
              <button className="light-skeleton mt-4 h-12 w-full !rounded-md border-none bg-neutral-300 text-base font-medium text-font-color-dark dark:skeleton dark:bg-neutral-800"></button>
            </div>
          ))
        : data?.stores.map((store) => (
            <div
              key={store?.id}
              className="rounded-lg bg-neutral-200 p-4 dark:bg-neutral-900">
              <div className="flex items-center gap-x-4 px-2 pb-5 pt-1 text-xl font-bold text-second">
                <StoreIcon className="size-8" />
                <h3>{store?.name}</h3>
              </div>
              {/* <div className="mt-4 h-px w-full rounded-full bg-neutral-400 dark:bg-neutral-800"></div> */}
              <div className="w-full rounded-md bg-neutral-300 px-4 py-6 text-sm font-medium dark:bg-neutral-800 sm:text-base">
                <div className="flex w-full items-center justify-center px-2 font-medium">
                  <p className="line-clamp-4">{store?.activityField}</p>
                </div>
                <div className="my-5 !h-px w-full bg-neutral-400 dark:bg-neutral-700"></div>
                <div className="flex w-full items-center justify-between px-2">
                  <p>تعداد تجربه ها</p>
                  <p>{store?.experiencesCount}</p>
                </div>
                <div className="my-5 !h-[0.5px] w-full bg-neutral-400 dark:bg-neutral-700"></div>
                <div className="flex w-full items-center justify-between px-2">
                  <p>سایت</p>
                  {store?.website ? (
                    <Link
                      href={store?.website}
                      className="text-blue-600 hover:underline dark:text-blue-500">
                      لینک
                    </Link>
                  ) : (
                    <p>ندارد</p>
                  )}
                </div>
                <div className="my-5 !h-[0.5px] w-full bg-neutral-400 dark:bg-neutral-700"></div>
                <div className="flex w-full items-center justify-between px-2">
                  <p>امتیاز</p>
                  <div className="-mb-1.5 shrink-0">
                    <div className="rating gap-x-1" dir="ltr">
                      {new Array(store?.score).fill("").map((_, index) => (
                        <div
                          key={index}
                          className="mask mask-star-2 size-5 bg-orange-400"
                        />
                      ))}
                      {new Array(5 - (store?.score || 0))
                        .fill("")
                        .map((_, index) => (
                          <input
                            checked={false}
                            key={index}
                            className="mask mask-star-2 size-5"
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href={`/experiences?storeId=${store?.id}`}
                className="btn btn-primary mt-4 w-full rounded-md border-none bg-primary text-base font-medium text-font-color-dark dark:bg-primary-dark">
                دیدن تجربه ها
              </Link>
            </div>
          ))}
    </div>
  );
}