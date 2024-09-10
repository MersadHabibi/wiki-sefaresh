"use client";

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export default function SearchStores() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = useCallback(() => {
    const URL = new URLSearchParams(Array.from(searchParams.entries()));

    URL.set("search", searchValue);
    URL.set("page", "1");

    router.push(pathname + "?" + URL.toString());
  }, [searchValue, searchParams, router, pathname]);

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
