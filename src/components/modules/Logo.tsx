import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <>
      <Image
        className={cn("hidden size-8 dark:block sm:size-10", className)}
        src={"/svg/Logo.svg"}
        alt="ویکی تجربه لوگو"
        width={100}
        height={100}
      />
      <Image
        className={cn("block size-8 dark:hidden sm:size-10", className)}
        src={"/svg/Logo-light.svg"}
        alt="ویکی تجربه لوگو"
        width={100}
        height={100}
      />
    </>
  );
}
