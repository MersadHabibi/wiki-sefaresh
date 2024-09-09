"use client";

import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, StoreIcon } from "lucide-react";
import Link from "next/link";
import ExperienceCard from "../modules/ExperienceCard";
import { useQuery } from "@apollo/client";
import GET_LAST_EXPERIENCES from "@/graphql/client/queries/GetLastExperiences";

export default function LastExperiences() {
  const { loading, error, data } = useQuery(GET_LAST_EXPERIENCES);

  return (
    <section className="container flex flex-col gap-y-7 pb-32 text-center sm:gap-y-10 lg:flex-row lg:text-start">
      <div className="shrink-0 lg:w-96 lg:pt-5 xl:w-[420px]">
        <h2
          className={cn(
            "mb-3 text-2xl font-semibold sm:mb-4 sm:text-4xl",
            FMorabba.className,
          )}>
          آخرین تجربه ها
        </h2>
        <div className="mx-auto h-1 w-40 rounded-full bg-primary dark:bg-primary-dark lg:mx-0"></div>
      </div>
      <div className="w-full space-y-4">
        {loading
          ? new Array(4).fill("").map((_, index) => (
              <div
                key={index}
                className="w-full overflow-hidden rounded-lg bg-neutral-200 text-start dark:bg-neutral-900">
                <div className="flex items-center justify-between border-b border-b-neutral-400 px-5 py-3 dark:border-b-neutral-700 sm:px-8 sm:py-4">
                  <div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-center">
                    <div className="light-skeleton h-8 w-36 rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800"></div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="light-skeleton size-6 rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800"></div>
                    <div className="light-skeleton size-6 rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800"></div>
                    <div className="light-skeleton size-6 rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800"></div>
                    <div className="light-skeleton size-6 rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800"></div>
                    <div className="light-skeleton size-6 rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800"></div>
                  </div>
                </div>
                <div className="px-5 py-5 sm:px-8 sm:py-6">
                  <div className="relative">
                    <div className="light-skeleton h-10 w-32 rounded-lg bg-neutral-300 dark:skeleton dark:bg-neutral-800"></div>
                  </div>
                  <div className="mt-5 line-clamp-6 text-gray-700 dark:text-gray-300">
                    <div className="light-skeleton mb-3 h-5 w-full rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800"></div>
                    <div className="light-skeleton mb-3 h-5 w-full rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800"></div>
                    <div className="light-skeleton mb-3 h-5 w-full rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800"></div>
                    <div className="light-skeleton mb-3 h-5 w-[80%] rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800"></div>
                  </div>
                </div>
              </div>
            ))
          : data?.lastExperiences.map((experience) => (
              <ExperienceCard key={experience?.id} experience={experience} />
            ))}
        <Link
          href={"/experiences"}
          className="btn btn-primary w-full gap-x-2 border-none bg-primary font-medium text-font-color-dark sm:gap-x-4 sm:text-base">
          <span>دیدن همه تجربه ها</span>
          <ArrowLeftIcon className="size-5 sm:size-6" />
        </Link>
      </div>
    </section>
  );
}
