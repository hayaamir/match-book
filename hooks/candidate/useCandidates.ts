"use client";

import { usePaginatedQuery } from "convex/react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export function useCreateCandidate() {
  return useMutation(api.candidates.createCandidate);
}

export function useGetCandidatesByUserId() {
  return useQuery(api.candidates.getCandidatesByUserId);
}

export function usePaginatedCandidates(gender?: "male" | "female") {
  return usePaginatedQuery(
    api.candidates.getPaginatedCandidates,
    { gender },
    { initialNumItems: 50 }
  );
}
