"use client";

import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function SearchSelectBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<string>("انتخاب فروشگاه");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const options: string[] = [
    "دیجی کالا",
    "الانزا",
    "اتما",
    "بانی مد",
    "تیمچه",
    "مقداد آی تی",
    "زیمانو",
    "تیمچه",
    "مقداد آی تی",
    "زیمانو",
  ];

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative pt-5 2xl:pt-7">
      <div
        className={cn(
          "flex h-16 items-center justify-between rounded-lg bg-neutral-200 px-6 font-medium dark:bg-neutral-900 xl:w-96",
          isOpen && "bg-neutral-300 dark:bg-neutral-800",
        )}
        onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <ChevronDownIcon
          className={cn("transition-all", isOpen && "rotate-180")}
        />
      </div>
      {isOpen && (
        <>
          <div className="absolute left-0 right-0 top-full z-20 mt-2 w-full overflow-hidden rounded-lg bg-neutral-300 font-medium shadow-md shadow-black/10 dark:bg-neutral-800">
            <input
              className="h-12 w-full !border-b border-b-neutral-400 bg-transparent px-4 outline-none"
              type="text"
              placeholder="جستجو..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex max-h-40 flex-col items-start justify-start space-y-2 overflow-y-auto p-4">
              {filteredOptions.map((option) => (
                <button
                  className="block w-full text-start hover:text-primary dark:hover:text-primary-dark"
                  key={option}
                  onClick={() => handleOptionClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
