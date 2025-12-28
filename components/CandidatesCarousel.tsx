"use client";
import { CandidateCard } from "@/components/CandidateCard";
import { Doc } from "@/convex/_generated/dataModel";

type CandidatesCarouselProps = {
  candidates: Doc<"candidates">[];
};
export function CandidatesCarousel({ candidates }: CandidatesCarouselProps) {
  return (
    <div className="flex gap-4 overflow-x-auto py-4 text-sm leading-5">
      {candidates.map((c) => (
        <CandidateCard
          key={c._id}
          status={c.status}
          fullName={c.firstName + " " + c.lastName}
          createdAt={c.createdAt}
          //   img={c.img}
          //   href={`/candidates/${c._id}`}
        />
      ))}
    </div>
  );
}
