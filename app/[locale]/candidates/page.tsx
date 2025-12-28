"use client";

import { useTranslations } from "next-intl";

import { usePaginatedCandidates } from "@/hooks/candidate";
import { CandidatesSection } from "@/components/CandidatesSection";

const Candidates = () => {
  const t = useTranslations();

  const {
    results: recentResults,
    status: recentStatus,
    loadMore: loadMoreRecent,
    isLoading: isLoadingRecent,
  } = usePaginatedCandidates();

  const {
    results: maleResults,
    status: maleStatus,
    loadMore: loadMoreMale,
    isLoading: isLoadingMale,
  } = usePaginatedCandidates("male");

  const {
    results: femaleResults,
    status: femaleStatus,
    loadMore: loadMoreFemale,
    isLoading: isLoadingFemale,
  } = usePaginatedCandidates("female");

  const isAnyLoading = isLoadingRecent || isLoadingMale || isLoadingFemale;

  if (isAnyLoading) return <div>Loading...</div>;
  if (
    recentResults.length === 0 &&
    maleResults.length === 0 &&
    femaleResults.length === 0
  )
    return <div>No candidates yet</div>;

  return (
    <>
      <CandidatesSection
        headerName={t("ADDED_RECENTLY")}
        candidates={recentResults}
      />
      <CandidatesSection headerName={t("FEMALES")} candidates={femaleResults} />
      <CandidatesSection headerName={t("MALES")} candidates={maleResults} />
    </>
  );
};

export default Candidates;
