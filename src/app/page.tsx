import LandingHeader from "@/components/templates/LandingHeader";
import PopularStores from "@/components/templates/PopularStores";

export default function Home() {
  return (
    <main className="h-fit bg-neutral-100 dark:bg-neutral-950">
      <LandingHeader />
      <PopularStores />
    </main>
  );
}
