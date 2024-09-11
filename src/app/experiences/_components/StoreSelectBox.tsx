"use client";

import GET_STORE_NAME_AND_ID_BY_STORE_ID from "@/graphql/client/queries/GetStoreNameAndIdByStoreId";
import GET_STORES_NAME_AND_ID from "@/graphql/client/queries/GetStoresNameAndId";
import useSearchQueries from "@/hooks/useSearchQueries";
import { cn } from "@/lib/utils";
import { useLazyQuery, useQuery } from "@apollo/client";
import { ChevronDownIcon } from "lucide-react";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type TStore = {
  id: string;
  name: string;
};

export default function StoreSelectBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TStore>({
    id: "",
    name: "انتخاب فروشگاه",
  });
  const [searchTerm, setSearchTerm] = useState<string>("");

  const setSearchParams = useSearchQueries();
  const searchParams = useSearchParams();

  const [getStore, { loading: getStoreLoading }] = useLazyQuery(
    GET_STORE_NAME_AND_ID_BY_STORE_ID,
  );

  const { loading, error, data } = useQuery(GET_STORES_NAME_AND_ID, {
    variables: { search: searchTerm || undefined },
  });

  const selectStoreHandler = (store: TStore) => {
    setSearchParams(["storeId", "page"], [store.id, "1"]);
    setSelectedOption(store);
    setIsOpen(false);
  };

  useEffect(() => {
    const storeId = searchParams.get("storeId");

    async function getStoreFunc() {
      const data = await getStore({
        variables: { id: storeId || "" },
      });

      if (data.data?.store) setSelectedOption(data.data?.store);
    }

    if (storeId) {
      getStoreFunc();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getStore]);

  if (error) return redirect("/500");

  return (
    <div className="relative pt-5 2xl:pt-7">
      <div
        className={cn(
          "flex h-16 cursor-pointer items-center justify-between rounded-lg bg-neutral-200 px-6 font-medium dark:bg-neutral-900 xl:w-96",
          isOpen && "bg-neutral-300 dark:bg-neutral-800",
        )}
        onClick={() => setIsOpen(!isOpen)}>
        {getStoreLoading ? (
          <div className="flex w-full items-center justify-center py-4">
            <span className="loading loading-spinner loading-sm text-black dark:text-white"></span>
          </div>
        ) : (
          selectedOption.name
        )}

        <ChevronDownIcon
          className={cn("transition-all", isOpen && "rotate-180")}
        />
      </div>
      {isOpen && (
        <>
          <div className="absolute left-0 right-0 top-full z-20 mt-2 w-full overflow-hidden rounded-lg bg-neutral-300 font-medium shadow-md shadow-black/10 dark:bg-neutral-800">
            <input
              className="h-12 w-full !border-b border-neutral-400 bg-transparent px-4 outline-none dark:border-neutral-700"
              type="text"
              placeholder="جستجو..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex max-h-40 flex-col items-start justify-start overflow-y-auto">
              {loading ? (
                <div className="flex w-full items-center justify-center py-4">
                  <span className="loading loading-spinner loading-sm text-black dark:text-white"></span>
                </div>
              ) : null}
              {data?.stores.data.map((store) => (
                <button
                  className="block w-full px-4 py-3 text-start hover:bg-neutral-400/50 dark:hover:bg-neutral-700"
                  key={store?.id}
                  onClick={() => store && selectStoreHandler(store)}>
                  {store?.name}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
