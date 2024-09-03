import {
  CircleAlertIcon,
  StoreIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";

export default function ExperiencePage() {
  return (
    <main className="h-fit bg-neutral-100 pb-20 pt-10 dark:bg-neutral-950 lg:pb-20 lg:pt-10">
      <section className="container">
        <div className="mb-5 flex h-14 w-full items-center gap-x-2 rounded-lg bg-warning/80 px-4 font-medium text-black sm:gap-x-4 sm:px-6 md:text-lg ">
          <CircleAlertIcon className="size-6 shrink-0 sm:size-7" />
          <p className="">
            این تجربه تنها نظر شخصی یک فرد است و ممکن است دقیق یا معتبر نباشد.
          </p>
        </div>
        <div className="w-full overflow-hidden rounded-lg bg-neutral-200 text-start dark:bg-neutral-900">
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
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه . علی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
              بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
              گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
              نرم افزارها شناخت بیشتری را برای طراحان رایانه . علی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه . علی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
              بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
              گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
              نرم افزارها شناخت بیشتری را برای طراحان رایانه . کاربردهای متنوع
              با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
              درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
              تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه .
            </p>
          </div>
          <div className="px-5 py-5 sm:px-8 sm:pb-6 sm:pt-8">
            <div className="w-full rounded-md bg-neutral-300 px-4 py-6 text-sm font-medium dark:bg-neutral-800 sm:text-base">
              <div className="flex w-full items-center justify-between px-2">
                <p>محصول</p>
                <p>موبایل</p>
              </div>
              <div className="my-5 h-px w-full bg-neutral-400 dark:bg-neutral-700"></div>
              <div className="flex w-full items-center justify-between px-2">
                <p>تاریخ سفارش</p>
                <p>{new Date().toLocaleDateString("fa-IR")}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-4 px-5 pb-5 sm:px-8 sm:pb-8">
            <div className="flex items-center gap-x-2">
              <button className="flex size-10 items-center justify-center rounded-full border border-green-500 bg-neutral-300 transition-all hover:scale-110 dark:border-green-500/70 dark:bg-neutral-800 [&.active]:bg-green-500 [&.active]:text-font-color-dark">
                <ThumbsUpIcon className="-mt-0.5 size-6 scale-x-[-1]" />
              </button>
              <p className="mt-1 text-lg">12</p>
            </div>
            <div className="flex items-center gap-x-2">
              <button className="flex size-10 items-center justify-center rounded-full border border-red-500 bg-neutral-300 transition-all hover:scale-110 dark:border-red-500/70 dark:bg-neutral-800 [&.active]:bg-red-500 [&.active]:text-font-color-dark">
                <ThumbsDownIcon className="-mb-0.5 size-6 scale-x-[-1]" />
              </button>
              <p className="mt-1 text-lg">2</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
