"use client";

import Input from "@/components/modules/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NewStoreFormData, NewStoreSchema } from "./NewStoreFormSchema";
import { cn } from "@/lib/utils";

export default function NewStoreForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<NewStoreFormData>({
    resolver: zodResolver(NewStoreSchema), // Apply the zodResolver
  });

  const onSubmit = async (data: NewStoreFormData) => {
    console.log("SUCCESS", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid w-full grid-cols-6 gap-6 overflow-hidden rounded-lg bg-neutral-200 p-5 text-start dark:bg-neutral-900 sm:p-8 xl:gap-x-10 xl:gap-y-8">
      <Input
        classNames={{
          container: "col-span-6",
        }}
        name="name"
        label="نام فروشگاه"
        placeholder="نام فروشگاه..."
        register={register}
        error={errors.name}
      />
      <Input
        dir="ltr"
        classNames={{
          container: "col-span-6 lg:col-span-2",
        }}
        name="site"
        label="وب سایت فروشگاه (اختیاری)"
        // type="url"
        placeholder="https://website.ir"
        register={register}
        error={errors.site}
      />
      <Input
        classNames={{
          container: "col-span-6 md:col-span-3 lg:col-span-2",
        }}
        name="instagram"
        placeholder="آیدی اینستاگرام فروشگاه..."
        label="آیدی اینستاگرام فروشگاه (اختیاری)"
        register={register}
        error={errors.instagram}
      />
      <Input
        classNames={{
          container: "col-span-6 md:col-span-3 lg:col-span-2",
        }}
        name="telegram"
        placeholder="آیدی تلگرام فروشگاه..."
        label="آیدی تلگرام فروشگاه (اختیاری)"
        register={register}
        error={errors.telegram}
      />
      <label className="form-control col-span-6 w-full">
        <div className="label pt-0">
          <span className="label-text text-base font-medium text-font-color dark:text-font-color-dark sm:text-lg">
            فعالیت فروشگاه
          </span>
        </div>
        <textarea
          placeholder="مثال: فروشگاه لباس, فروشگاه کامپیوتر"
          className={cn(
            "textarea max-h-[400px] w-full bg-neutral-300 py-4 text-base placeholder:text-gray-500 dark:bg-neutral-800",
            errors.activityField?.message && "border-2 !border-red-500",
          )}
          {...register("activityField" as any)}
          //   {/* {props.error?.message ? (
          //   <p className="mt-1 text-red-500">{props.error.message}</p>
          // ) : null} */}
          rows={5}
        />
        {errors.activityField?.message ? (
          <p className="mt-1 text-sm text-red-500">
            {errors.activityField.message}
          </p>
        ) : null}
      </label>
      <button className="btn btn-primary col-span-6 h-12 w-full border-none bg-primary text-base font-medium text-font-color-white dark:bg-primary-dark">
        ثبت فروشگاه
      </button>
    </form>
  );
}
