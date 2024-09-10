import NewStoreForm from "@/app/stores/new-store/_components/NewStoreForm";
import { CircleAlertIcon } from "lucide-react";
import Link from "next/link";
import NewExperienceForm from "./_components/NewExperienceForm";

export default function NewExperiencePage() {
  return (
    <main className="h-fit bg-neutral-100 pb-20 pt-10 dark:bg-neutral-950 lg:pb-20 lg:pt-10">
      <section className="container">
        <div className="mb-5 flex h-fit w-full items-center gap-x-2 rounded-lg bg-warning/90 px-4 py-2 font-medium text-black sm:h-14 sm:gap-x-4 sm:px-6 sm:py-0 md:text-lg ">
          <CircleAlertIcon className="size-6 shrink-0 sm:size-7" />
          <p>
            اگر فروشگاه مورد نظر موجود نبود در{" "}
            <Link
              className="text-blue-600 hover:underline dark:text-blue-700"
              href={"/stores/new-store"}>
              این صفحه
            </Link>{" "}
            ثبت کنید.
          </p>
        </div>
        <NewExperienceForm />
      </section>
    </main>
  );
}
