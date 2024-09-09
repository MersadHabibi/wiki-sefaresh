"use client";

import Input from "@/components/modules/Input";
import { fakeStores } from "@/components/templates/Stores";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type TProps = {
  register: UseFormRegister<any>;
  error:
    | FieldError
    | undefined
    | {
        message: string;
      };
};

export default function StoreNameInput(props: TProps) {
  const [storeName, setStoreName] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [filteredStores, setFilteredStores] = useState(() =>
    fakeStores.filter((store) =>
      store.toLowerCase().includes(storeName.toLowerCase()),
    ),
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filterAutoCompleteOptions = (value: string) => {
    const filteredOptions = fakeStores.filter((store) =>
      store.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredStores(filteredOptions);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      setStoreName(filteredStores[selectedIndex]);
      filterAutoCompleteOptions(filteredStores[selectedIndex]);
      setSelectedIndex(0);
      event.currentTarget.blur();
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (selectedIndex < filteredStores.length) {
        setSelectedIndex(selectedIndex + 1);
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }
    }
  };


  return (
    <Input
      classNames={{
        container: "col-span-6 md:col-span-3 relative",
      }}
      name="storeName"
      label="نام فروشگاه"
      placeholder="نام فروشگاه..."
      value={storeName}
      onInput={(event) => {

        setStoreName(event.currentTarget.value);
        filterAutoCompleteOptions(event.currentTarget.value);
        setSelectedIndex(0);
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={(event) =>
        setTimeout(() => {
          setIsFocused(false);
        }, 200)
      }
      onKeyDown={onKeyDownHandler}
      register={props.register}
      error={props.error}>
      {isFocused ? (
        <div className="absolute left-0 right-0 top-full z-10 mt-1 h-fit max-h-44 w-full overflow-y-auto rounded-md border border-neutral-400 bg-neutral-300 dark:border-neutral-600 dark:bg-neutral-800">
          {filteredStores?.map((store, index) => (
            <div
              key={store}
              className={cn(
                "w-full cursor-pointer px-4 py-3 text-start hover:bg-neutral-400/40",
                selectedIndex === index && "bg-neutral-400/40",
              )}
              onClick={() => {
                setStoreName(store);
                filterAutoCompleteOptions(store);
                setSelectedIndex(0);
              }}>
              {store}
            </div>
          ))}
          {filteredStores.length ? null : (
            <div className="w-full cursor-pointer px-4 py-3 text-start text-red-500">
              فروشگاهی با این اسم وجود ندارد
            </div>
          )}
        </div>
      ) : null}
    </Input>
  );
}
