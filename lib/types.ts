import z from "zod";
import {
  zGender,
  zSector,
  zCandidateStatus,
  zMatchStatus,
  zSubscriptionPlan,
  zSubscriptionStatus,
  zUsersTable,
  zCandidatesTable,
  zMatchmakersCandidatesTable,
  zmatchesTable,
} from "./schema";

export type Gender = z.infer<typeof zGender>;
export type Sector = z.infer<typeof zSector>;
export type CandidateStatus = z.infer<typeof zCandidateStatus>;
export type MatchStatus = z.infer<typeof zMatchStatus>;
export type SubscriptionPlan = z.infer<typeof zSubscriptionPlan>;
export type SubscriptionStatus = z.infer<typeof zSubscriptionStatus>;
export type UsersTable = z.infer<typeof zUsersTable>;
export type CandidatesTable = z.infer<typeof zCandidatesTable>;
export type MatchmakersCandidatesTable = z.infer<
  typeof zMatchmakersCandidatesTable
>;
export type matchesTable = z.infer<typeof zmatchesTable>;
