"use client";

import useSearchQueries from "@/hooks/useSearchQueries";
import { SearchIcon } from "lucide-react";
import { useCallback, useState } from "react";

export default function SearchStores() {
  const setSearchParams = useSearchQueries();
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = useCallback(() => {
    setSearchParams("search", searchValue);
    setSearchParams("page", "1");
  }, [setSearchParams, searchValue]);

  return (
    <label className="input flex h-16 w-full items-center gap-2 !border-none bg-neutral-200 px-6 !outline-none dark:bg-neutral-900">
      <input
        type="text"
        className="grow !border-none !outline-none"
        placeholder="جستجو..."
        value={searchValue}
        onInput={(event) => setSearchValue(event.currentTarget.value)}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            searchHandler();
          }
        }}
      />
      <button onClick={searchHandler} className="py-1 pr-1">
        <SearchIcon className="size-7" />
      </button>
    </label>
  );
}
