import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useSearchQueries() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const setSearchParams = (key: string, value: string) => {
    const URL = new URLSearchParams(Array.from(searchParams.entries()));

    URL.set(key, value);

    router.push(pathname + "?" + URL.toString());
  };

  return setSearchParams;
}
