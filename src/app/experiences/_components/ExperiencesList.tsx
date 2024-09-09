"use client";

import ExperienceCard from "@/components/modules/ExperienceCard";
import ExperienceCardSkeleton from "@/components/modules/ExperienceCardSkeleton";
import GET_All_EXPERIENCES from "@/graphql/client/queries/GetAllExperiences";
import { useQuery } from "@apollo/client";

export default function ExperiencesList() {
  const { loading, error, data } = useQuery(GET_All_EXPERIENCES);

  if (error) return null;

  return (
    <div className="space-y-4 md:pt-5 2xl:pt-7">
      {loading
        ? new Array(4)
            .fill("")
            .map((_, index) => <ExperienceCardSkeleton key={index} />)
        : data?.experiences.map((experience) => (
            <ExperienceCard key={experience?.id} experience={experience} />
          ))}
    </div>
  );
}
