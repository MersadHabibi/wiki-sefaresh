"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { TPageInfo } from "@/types";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type TProps = {
  pageInfo?: TPageInfo;
};

export default function Pagination(props: TProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const navigate = (target: string) => {
    const q = new URLSearchParams(Array.from(searchParams.entries()));

    q.set("page", target);

    router.push(pathname + "?" + q.toString());
  };

  return (
    <div className="mt-10 flex items-center justify-center gap-x-2">
      {/* prev page */}
      <button
        className="flex size-9 items-center justify-center rounded-md border border-neutral-300 transition-colors hover:bg-neutral-300 disabled:opacity-70 disabled:hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800 dark:disabled:hover:bg-neutral-900 [&.active]:!bg-primary [&.active]:text-font-color-dark"
        disabled={!(Number(props?.pageInfo?.currentPage) > 1)}
        onClick={() =>
          navigate(String(Number(props.pageInfo?.currentPage) - 1))
        }>
        <ChevronRightIcon className="size-6" />
      </button>

      {/* 2 prev page */}
      {Number(props?.pageInfo?.currentPage) - 1 > 1 ? (
        <button
          className="flex size-9 items-center justify-center rounded-md border border-neutral-300 transition-colors hover:bg-neutral-300 disabled:opacity-70 dark:border-neutral-800 dark:hover:bg-neutral-800 [&.active]:!bg-primary [&.active]:text-font-color-dark"
          onClick={() =>
            navigate(String(Number(props.pageInfo?.currentPage) - 2))
          }>
          {Number(props?.pageInfo?.currentPage) - 2}
        </button>
      ) : null}

      {/* 1 prev page */}
      {Number(props?.pageInfo?.currentPage) > 1 ? (
        <button
          className="flex size-9 items-center justify-center rounded-md border border-neutral-300 transition-colors hover:bg-neutral-300 disabled:opacity-70 dark:border-neutral-800 dark:hover:bg-neutral-800 [&.active]:!bg-primary [&.active]:text-font-color-dark"
          onClick={() =>
            navigate(String(Number(props.pageInfo?.currentPage) - 1))
          }>
          {Number(props?.pageInfo?.currentPage) - 1}
        </button>
      ) : null}

      {/* current page */}
      <button className="active flex size-9 items-center justify-center rounded-md border border-neutral-300 transition-colors hover:bg-neutral-300 disabled:opacity-70 dark:border-neutral-800 dark:hover:bg-neutral-800 [&.active]:!bg-primary [&.active]:text-font-color-dark">
        {props?.pageInfo?.currentPage || 1}
      </button>

      {/* 1 next page */}
      {props?.pageInfo?.currentPage &&
      Number(props?.pageInfo?.currentPage) <
        Number(props?.pageInfo?.totalPages) ? (
        <button
          className="flex size-9 items-center justify-center rounded-md border border-neutral-300 transition-colors hover:bg-neutral-300 disabled:opacity-70 dark:border-neutral-800 dark:hover:bg-neutral-800 [&.active]:!bg-primary [&.active]:text-font-color-dark"
          onClick={() =>
            navigate(String(Number(props.pageInfo?.currentPage) + 1))
          }>
          {Number(props?.pageInfo?.currentPage) + 1}
        </button>
      ) : null}

      {/* 2 next page */}
      {props?.pageInfo?.currentPage &&
      Number(props?.pageInfo?.currentPage + 1) <
        Number(props?.pageInfo?.totalPages) ? (
        <button
          className="flex size-9 items-center justify-center rounded-md border border-neutral-300 transition-colors hover:bg-neutral-300 disabled:opacity-70 dark:border-neutral-800 dark:hover:bg-neutral-800 [&.active]:!bg-primary [&.active]:text-font-color-dark"
          onClick={() =>
            navigate(String(Number(props.pageInfo?.currentPage) + 2))
          }>
          {Number(props?.pageInfo?.currentPage) + 2}
        </button>
      ) : null}

      {/* next page */}
      <button
        className="flex size-9 items-center justify-center rounded-md border border-neutral-300 transition-colors hover:bg-neutral-300 disabled:opacity-70 disabled:hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800 dark:disabled:hover:bg-neutral-900 [&.active]:!bg-primary [&.active]:text-font-color-dark"
        disabled={
          !(
            props?.pageInfo?.currentPage &&
            Number(props?.pageInfo?.currentPage) <=
              Number(props?.pageInfo?.totalPages)
          )
        }
        onClick={() =>
          navigate(String(Number(props.pageInfo?.currentPage) + 1))
        }>
        <ChevronLeftIcon className="size-6" />
      </button>
    </div>
  );
}
