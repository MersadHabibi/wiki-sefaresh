"use client";

import useSearchQueries from "@/hooks/useSearchQueries";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type TOption = {
  value: string;
  title: string;
};

export default function SortSelectBox({ options }: { options: TOption[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const setSearchParams = useSearchQueries();
  const searchParams = useSearchParams();

  const sortHandler = (sortValue: string) => {
    setIsOpen(false);
    setSearchParams(["sortBy", "page"], [sortValue, "1"]);
  };

  const selectedOption = options.find(
    (option) => option.value == searchParams.get("sortBy"),
  );

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      setIsOpen(false);
    };
    if (isOpen) document.addEventListener("click", clickHandler);
    else document.removeEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [isOpen]);

  return (
    <div className="relative pt-5 md:hidden 2xl:pt-7">
      <div
        className={cn(
          "flex h-16 cursor-pointer items-center justify-between rounded-lg bg-neutral-200 px-6 font-medium dark:bg-neutral-900 xl:w-96",
          isOpen && "bg-neutral-300 dark:bg-neutral-800",
        )}
        onClick={() => setIsOpen(!isOpen)}>
        {selectedOption?.title || "مرتب کردن بر اساس"}
        <ChevronDownIcon
          className={cn("transition-all", isOpen && "rotate-180")}
        />
      </div>
      {isOpen && (
        <>
          <div className="absolute left-0 right-0 top-full z-20 mt-2 w-full overflow-hidden rounded-lg bg-neutral-300 font-medium shadow-md shadow-black/10 dark:bg-neutral-800">
            <div className="flex max-h-40 flex-col items-start justify-start overflow-y-auto">
              {options.map((option) => (
                <button
                  className="block w-full px-4 py-3 text-start transition-colors hover:bg-neutral-400/50 dark:hover:bg-neutral-700"
                  key={option.value}
                  onClick={() => sortHandler(option.value)}>
                  {option.title}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
