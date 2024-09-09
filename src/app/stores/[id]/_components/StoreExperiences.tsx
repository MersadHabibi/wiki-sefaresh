"use client";

import ExperienceCard from "@/components/modules/ExperienceCard";
import ExperienceCardSkeleton from "@/components/modules/ExperienceCardSkeleton";
import { FMorabba } from "@/config/fonts";
import GET_LAST_EXPERIENCES from "@/graphql/client/queries/GetLastExperiences";
import GET_LAST_EXPERIENCES_BY_STORE from "@/graphql/client/queries/GetLastExperiencesByStore";
import { cn } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function StoreExperiences({ storeId }: { storeId: string }) {
  const { loading, error, data } = useQuery(GET_LAST_EXPERIENCES_BY_STORE, {
    variables: { storeId },
  });

  if (error) return null;

  return (
    <section className="container flex flex-col gap-y-7 px-0 pt-10 text-center sm:gap-y-10 lg:flex-row lg:text-start">
      <div className="shrink-0 lg:w-96 lg:pt-5 xl:w-[420px]">
        <h2
          className={cn(
            "mb-3 text-2xl font-semibold sm:mb-4 sm:text-4xl",
            FMorabba.className,
          )}>
          تجربه های این فروشگاه
        </h2>
        <div className="mx-auto h-1 w-40 rounded-full bg-primary dark:bg-primary-dark lg:mx-0"></div>
      </div>
      <div className="w-full space-y-4">
        {data?.lastExperiencesByStore.length ? (
          <>
            {loading
              ? new Array(4)
                  .fill("")
                  .map((_, index) => <ExperienceCardSkeleton key={index} />)
              : data?.lastExperiencesByStore.map((experience) => (
                  <ExperienceCard
                    key={experience?.id}
                    experience={experience}
                  />
                ))}
            <Link
              href={`/experiences?storeId=${storeId}`}
              className="btn btn-primary w-full gap-x-2 border-none bg-primary font-medium text-font-color-dark xs:text-base sm:gap-x-4">
              <span>دیدن همه تجربه های این فروشگاه</span>
              <ArrowLeftIcon className="size-5 sm:size-6" />
            </Link>
          </>
        ) : (
          <p className="pt-8 text-center text-base font-medium sm:text-lg">
            تجربه ای برای این فروشگاه ثبت نشده است.
          </p>
        )}
      </div>
    </section>
  );
}
