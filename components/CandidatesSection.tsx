import { ArrowRight } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

import { CandidatesCarousel } from "./CandidatesCarousel";
import { Button } from "@/components/ui/button";
import { Doc } from "@/convex/_generated/dataModel";

type CandidatesSectionProps = {
  headerName: string;
  candidates: Doc<"candidates">[];
};

export const CandidatesSection = ({
  headerName,
  candidates,
}: CandidatesSectionProps) => {
  return (
    <div className="px-7 m-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start items-center gap-2">
          <h2 className="box-border text-start">
            <span className="text-xl font-semibold">{headerName}</span>
          </h2>
          <Button variant="secondary" size="icon">
            <ArrowRight className="rtl:rotate-180" />
          </Button>
        </div>
        <div className="flex justify-end items-center gap-1.5">
          <Button variant="secondary" size="icon">
            <ChevronLeft className="rtl:rotate-180" />
          </Button>
          <Button variant="secondary" size="icon">
            <ChevronRight className="rtl:rotate-180" />
          </Button>
        </div>
      </div>
      <CandidatesCarousel candidates={candidates} />
    </div>
  );
};
