"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export function useGenerateUploadUrl() {
  return useMutation(api.candidateImages.generateUploadUrl);
}

export function useSendCandidateImage() {
  return useMutation(api.candidateImages.sendImage);
}

export function useGetCandidateImagesByCandidateId(
  candidateId: Id<"candidates">
) {
  return useQuery(api.candidateImages.getCandidateImagesByCandidateId, {
    candidateId,
  });
}
