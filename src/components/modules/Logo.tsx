import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href={"/"}
      className={cn(
        "pb-1 text-xl font-bold text-blue-700 dark:text-primary-dark sm:text-2xl",
        FMorabba.className,
        className,
      )}>
      ویکی سفارش
    </Link>
  );
}
