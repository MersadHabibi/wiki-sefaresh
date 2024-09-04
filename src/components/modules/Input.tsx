"use client";

import { cn } from "@/lib/utils";
import { error } from "console";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type TProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  name: string;
  register?: UseFormRegister<any>;
  error?:
    | FieldError
    | undefined
    | {
        message: string;
      };
  valueAsNumber?: boolean;
  classNames?: Partial<{
    input: string;
    label: string;
    container: string;
  }>;
  value?: string;
  dir?: "ltr" | "rtl";
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: TProps) {
  return (
    <label className={cn("form-control w-full", props.classNames?.container)}>
      <div className="label pt-0">
        <span
          className={cn(
            "label-text text-base font-medium text-font-color dark:text-font-color-dark sm:text-lg",
            props.classNames?.label,
          )}>
          {props.label}
        </span>
      </div>
      <input
        dir={props.dir}
        name={props.name}
        placeholder={props.placeholder}
        className={cn(
          "input w-full bg-neutral-300 placeholder:text-gray-500 dark:bg-neutral-800",
          props.classNames?.input,
          props.error?.message && "border-2 !border-red-500",
        )}
        type={props.type || "text"}
        onInput={(event) => props.onInput && props.onInput(event)}
        {...(props.register
          ? {
              ...props.register(props.name as any, {
                valueAsNumber: props.valueAsNumber,
              }),
            }
          : undefined)}
        value={props.value}
      />
      {props.error?.message ? (
        <p className="mt-1 text-sm text-red-500">{props.error.message}</p>
      ) : null}
    </label>
  );
}
