import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { CircleAlertIcon, CirclePlusIcon, EyeIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-neutral-100 dark:bg-neutral-950 lg:h-full">
      <div className="container flex min-h-fit flex-col-reverse items-center justify-between gap-x-6 pb-20 pt-8 text-center lg:h-full lg:flex-row lg:py-10 lg:text-start xl:gap-x-10">
        <div>
          <h1
            className={cn(
              "flex items-center justify-center gap-x-2 text-2xl font-extrabold xs:text-3xl sm:text-4xl lg:justify-start xl:gap-x-4 xl:text-5xl",
              FMorabba.className,
            )}>
            <span className="text-primary dark:text-primary-dark">
              ویکی سفارش
            </span>
            <span className="text-5xl dark:text-primary-dark xs:text-6xl xl:text-7xl">
              |
            </span>
            <span> سفارش مطمئن </span>
          </h1>
          <p className="mt-2 text-xl font-bold text-gray-700 dark:text-font-color-dark/90 xs:text-2xl sm:mt-3 sm:text-3xl xl:mt-5 xl:text-4xl">
            تجربیات شما از سفارشات آنلاین
          </p>
          <div className="bg-second mx-auto my-6 h-1 w-56 rounded-sm sm:my-8 lg:mx-0 xl:my-10"></div>
          <p className="dark:text-red-0 flex items-center gap-x-2 text-start font-medium text-red-500 xl:gap-x-3 xl:text-xl">
            <CircleAlertIcon className="mb-0.5 size-6 xl:size-7 " />
            <span>
              قبل از سفارش تجربیات بقیه را بخوانید و بعد از سفارش تجربه خود را
              بنویسید.
            </span>
          </p>
          <div className="flex w-full flex-col items-center gap-x-4 gap-y-2 pt-7 xs:flex-row xs:pt-5 lg:max-w-md xl:max-w-2xl">
            <button className="btn dark:bg-second bg-second h-12 w-full shrink border-none text-font-color-dark transition-all hover:bg-neutral-500 hover:brightness-75 xl:text-lg">
              <EyeIcon className="size-5 xl:size-6" />
              <span>مشاهده تجربیات</span>
            </button>
            <button className="btn h-12 w-full shrink border-none bg-primary text-font-color-dark transition-all hover:bg-primary hover:brightness-75 dark:bg-primary-dark xl:text-lg">
              <CirclePlusIcon className="size-5 xl:size-6" />
              <span>ثبت تجربه</span>
            </button>
          </div>
        </div>
        <div className="w-full max-w-md xl:max-w-lg 2xl:max-w-xl">
          <Image
            className="w-full object-cover pb-6 dark:hidden xs:pb-10"
            src={"/svg/landing-svg.svg"}
            alt="landing svg"
            width={500}
            height={500}
          />
          <Image
            className="hidden w-full object-cover pb-6 dark:block xs:pb-10"
            src={"/svg/landing-svg-dark.svg"}
            alt="landing svg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
