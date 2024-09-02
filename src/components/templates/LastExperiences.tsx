import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { StoreIcon } from "lucide-react";

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
        {new Array(4).fill("").map((_, index) => (
          <div
            key={index}
            className="w-full overflow-hidden rounded-lg bg-neutral-200 text-start dark:bg-neutral-900">
            <div className="flex items-center justify-between border-b border-b-neutral-400 px-5 py-3 dark:border-b-neutral-700 sm:px-8 sm:py-4">
              <div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-center">
                <div className="flex items-center gap-x-3 text-second">
                  <StoreIcon className="hidden size-8 shrink-0 sm:inline-block" />
                  <h3 className="-mb-0.5 line-clamp-1 text-xl font-bold xs:max-w-56 sm:max-w-56 sm:text-2xl md:max-w-72 lg:max-w-52 xl:max-w-96 2xl:max-w-[470px]">
                    دیجی کالا
                  </h3>
                </div>
                <div className="hidden h-6 w-0.5 bg-gray-500 dark:bg-gray-400 sm:inline-block"></div>
                <p className="-mb-0.5 w-fit text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
                  2 ساعت قبل
                </p>
              </div>
              <div className="-mb-1.5 shrink-0">
                <div className="rating gap-x-1" dir="ltr">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 size-5 bg-orange-400 sm:size-6"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 size-5 bg-orange-400 sm:size-6"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 size-5 bg-orange-400 sm:size-6"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 size-5 bg-orange-400 sm:size-6"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 size-5 bg-orange-400 sm:size-6"
                  />
                </div>
              </div>
            </div>
            <div className="px-5 py-5 sm:px-8 sm:py-6">
              <div className="relative">
                <div className="absolute -right-8 bottom-0 top-0 h-full w-6 rounded-l-sm bg-primary sm:w-5"></div>
                <h2 className="line-clamp-1 text-xl font-bold sm:text-2xl">
                  تاخیر سفارش
                </h2>
              </div>
              <p className="mt-3 line-clamp-6 text-gray-700 dark:text-gray-300">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه .
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
