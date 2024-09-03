import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, StoreIcon } from "lucide-react";
import Link from "next/link";
import ExperienceCard from "../modules/ExperienceCard";

export default function LastExperiences() {
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
        {new Array(3).fill("").map((_, index) => (
          <ExperienceCard key={index} />
        ))}
        <Link
          href={"/experiences"}
          className="text-font-color-white btn btn-primary w-full gap-x-2 border-none bg-primary font-medium text-font-color-dark sm:gap-x-4 sm:text-base">
          <span>دیدن همه تجربه ها</span>
          <ArrowLeftIcon className="size-5 sm:size-6" />
        </Link>
      </div>
    </section>
  );
}
