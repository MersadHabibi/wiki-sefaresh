"use client";

import Input from "@/components/modules/Input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  NewExperienceFormData,
  NewExperienceSchema,
} from "./NewExperienceFormSchema";
import StoreNameInput from "./StoreNameInput";
import NewExperienceScore from "./NewExperienceScore";

export default function NewExperienceForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm<NewExperienceFormData>({
    resolver: zodResolver(NewExperienceSchema), // Apply the zodResolver
  });

  const onSubmit = async (data: NewExperienceFormData) => {
    // TODO: add error for storeName after use getStores API
    console.log("SUCCESS", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid w-full grid-cols-6 gap-6 overflow-hidden rounded-lg bg-neutral-200 p-5 text-start dark:bg-neutral-900 sm:p-8 xl:gap-x-10 xl:gap-y-8"
      autoComplete="off">
      <StoreNameInput register={register} error={errors.storeName} />
      <Input
        classNames={{
          container: "col-span-6 md:col-span-3",
        }}
        name="product"
        label="محصول سفارش داده شده (اختیاری)"
        placeholder="مثال: لباس و موبایل"
        register={register}
        error={errors.product}
      />
      <Input
        dir="ltr"
        classNames={{
          container: "col-span-6 md:col-span-3 lg:col-span-3",
        }}
        name="orderDate"
        label="تاریخ سفارش (اختیاری)"
        placeholder="مثال: 1403/06/14"
        register={register}
        error={errors.orderDate}
      />
      <NewExperienceScore register={register} setValue={setValue} />
      <Input
        classNames={{
          container: "col-span-6 md:col-span-6",
        }}
        name="title"
        label="عنوان تجربه"
        placeholder="عنوان تجربه..."
        register={register}
        error={errors.title}
      />
      <label className="form-control col-span-6 w-full">
        <div className="label pt-0">
          <span className="label-text text-base font-medium text-font-color dark:text-font-color-dark sm:text-lg">
            شرح تجربه
          </span>
        </div>
        <textarea
          placeholder="لطفا از حرف های کلی (سفارش بدی بود) استفاده نکنید و جزئیات تجربه خود را بنویسید"
          className={cn(
            "textarea max-h-[400px] w-full bg-neutral-300 py-4 text-base placeholder:text-gray-500 dark:bg-neutral-800",
            errors.body?.message && "border-2 !border-red-500",
          )}
          {...register("body" as any)}
          rows={5}
        />
        {errors.body?.message ? (
          <p className="mt-1 text-sm text-red-500">{errors.body.message}</p>
        ) : null}
      </label>
      <button className="text-font-color-white btn btn-primary col-span-6 h-12 w-full border-none bg-primary text-base font-medium text-font-color-dark dark:bg-primary-dark">
        ثبت فروشگاه
      </button>
    </form>
  );
}
