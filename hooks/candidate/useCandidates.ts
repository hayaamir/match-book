import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export function useCreateCandidate() {
  return useMutation(api.candidates.createCandidate);
}

// export function useGetCandidateByIdMutation() {
//   return useMutation(api.candidates.getCandidateById);
// }
