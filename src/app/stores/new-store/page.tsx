import Input from "@/components/modules/Input";
import { CircleAlertIcon } from "lucide-react";
import Link from "next/link";
import NewStoreForm from "./_components/NewStoreForm";

export default function NewStorePage() {
  return (
    <main className="h-fit bg-neutral-100 pb-20 pt-10 dark:bg-neutral-950 lg:pb-20 lg:pt-10">
      <section className="container">
        <div className="mb-5 flex h-fit w-full items-center gap-x-2 rounded-lg bg-warning/90 px-4 py-2 font-medium text-black sm:h-14 sm:gap-x-4 sm:px-6 sm:py-0 md:text-lg ">
          <CircleAlertIcon className="size-6 shrink-0 sm:size-7" />
          <p className="">
            قبل از ثبت فروشگاه، در{" "}
            <Link
              className="text-blue-600 hover:underline dark:text-blue-700"
              href={"/stores"}>
              این صفحه
            </Link>{" "}
            بررسی کنید که آیا فروشگاه مورد نظر قبلا ثبت شده یا خیر.
          </p>
        </div>
        <div className="mb-5 flex h-fit w-full items-center gap-x-2 rounded-lg bg-warning/90 px-4 py-2 font-medium text-black sm:h-14 sm:gap-x-4 sm:px-6 sm:py-0 md:text-lg ">
          <CircleAlertIcon className="size-6 shrink-0 sm:size-7" />
          <p className="">
            لطفا قبل از ثبت فروشگاه مطمئن شوید که اطلاعات وارد شده درست است.
          </p>
        </div>
        <div className="mb-5 flex h-fit w-full items-center gap-x-2 rounded-lg bg-warning/90 px-4 py-2 font-medium text-black sm:h-14 sm:gap-x-4 sm:px-6 sm:py-0 md:text-lg ">
          <CircleAlertIcon className="size-6 shrink-0 sm:size-7" />
          <p className="">
            اگر به هر دلیلی آدرس سایت، اینستاگرام یا تلگرام فروشگاه را نداشتید،
            فقط کافیست اسم و فعالیت فروشگاه را بنویسید.
          </p>
        </div>
        <NewStoreForm />
      </section>
    </main>
  );
}
