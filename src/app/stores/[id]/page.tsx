import { ArrowLeftIcon, StoreIcon } from "lucide-react";
import Link from "next/link";
import StoreSection from "./_components/StoreSection";
import StoreExperiences from "./_components/StoreExperiences";

export default function StorePage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <main className="h-fit bg-neutral-100 pb-20 pt-10 dark:bg-neutral-950 lg:pb-20 lg:pt-10">
      <div className="container">
        <StoreSection storeId={params.id} />
        <StoreExperiences storeId={params.id} />
      </div>
    </main>
  );
}
