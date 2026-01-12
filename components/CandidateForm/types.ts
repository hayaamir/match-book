import z from "zod";
import type { Doc } from "@/convex/_generated/dataModel";
import { zCandidatesTable, zCandidateStatus, zSector } from "@/lib/schema";

export const candidateFormSchema = zCandidatesTable
  .pick({
    firstName: true,
    lastName: true,
    gender: true,
    idNumber: true,
    phone: true,
    dateOfBirth: true,
    status: true,
  })
  .extend({
    sector: zSector.optional(),
    status: zCandidateStatus.optional(),
  });

export type CandidateFormValues = z.infer<typeof candidateFormSchema>;

export type BasicDetailsProps = {
  onSubmit: (data: CandidateFormValues) => Promise<void>;
};

export type CandidateWizardProps = {
  candidateData?: Doc<"candidates"> | null;
};
