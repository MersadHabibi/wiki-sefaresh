"use client";

import ExperienceCard from "@/components/modules/ExperienceCard";
import ExperienceCardSkeleton from "@/components/modules/ExperienceCardSkeleton";
import Pagination from "@/components/modules/Pagination";
import GET_All_EXPERIENCES from "@/graphql/client/queries/GetAllExperiences";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";

export default function ExperiencesList() {
  const searchParams = useSearchParams();

  const { loading, error, data } = useQuery(GET_All_EXPERIENCES, {
    variables: {
      page: Number(searchParams.get("page")) || 1,
      pageSize: 10,
      search: searchParams.get("search") || "",
    },
  });

  if (error) return null;

  return (
    <>
      {loading ? (
        <div className="space-y-4 md:pt-5 2xl:pt-7">
          {new Array(4).fill("").map((_, index) => (
            <ExperienceCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          <div className="space-y-4 md:pt-5 2xl:pt-7">
            {data?.experiences.data.map((experience) => (
              <ExperienceCard key={experience?.id} experience={experience} />
            ))}
          </div>
          <Pagination pageInfo={data?.experiences.pageInfo} />
        </>
      )}
    </>
  );
}
