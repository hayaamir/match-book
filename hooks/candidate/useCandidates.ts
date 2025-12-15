"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export function useCreateCandidate() {
  return useMutation(api.candidates.createCandidate);
}

export function useGetCandidatesByUserId() {
  return useQuery(api.candidates.getCandidatesByUserId);
}
