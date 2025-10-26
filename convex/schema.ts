import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const vSubscriptionPlan = v.union(
  v.literal("basic"),
  v.literal("premium"),
  v.literal("pro")
);

export const vSubscriptionStatus = v.union(
  v.literal("active"),
  v.literal("expired"),
  v.literal("trial")
);

export const vCandidatesStatus = v.union(
  v.literal("active"),
  v.literal("in_date"),
  v.literal("found_match"),
  v.literal("not_searching")
);

export const vMatchesStatus = v.union(
  v.literal("active"),
  v.literal("not_match"),
  v.literal("matched")
);

export const vSector = v.union(v.literal("חבד"));

export const vGender = v.union(v.literal("male"), v.literal("female"));

// UI options arrays
export const genderOptions = [
  { value: "male" as const, label: "זכר" },
  { value: "female" as const, label: "נקבה" },
];

export const sectorOptions = [{ value: "חבד" as const, label: "חבד" }];

export const statusOptions = [
  { value: "active" as const, label: "פעיל" },
  { value: "in_date" as const, label: "בפגישה" },
  { value: "found_match" as const, label: "מצא התאמה" },
  { value: "not_searching" as const, label: "לא מחפש" },
];

export default defineSchema({
  users: defineTable({
    clerkUserId: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    email: v.optional(v.string()),
    phone: v.optional(v.string()),
    subscriptionPlan: vSubscriptionPlan,
    subscriptionStatus: vSubscriptionStatus,
    subscriptionExpiry: v.optional(v.number()),
    isActive: v.boolean(),
    profilePicture: v.optional(v.string()),
    bio: v.optional(v.string()),
    specializations: v.optional(v.array(v.union(v.literal("חבד")))),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("byClerkUserId", ["clerkUserId"]),

  candidates: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    gender: v.union(v.literal("male"), v.literal("female")),
    dateOfBirth: v.string(),
    phone: v.string(),
    sector: vSector,
    status: vCandidatesStatus,
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  matchmakers_candidates: defineTable({
    candidateId: v.id("candidates"),
    shadchanId: v.id("users"),
  }),

  matches: defineTable({
    candidateAId: v.id("candidates"),
    candidateBId: v.id("candidates"),
    shadchanAId: v.id("users"),
    shadchanBId: v.id("users"),
    status: vMatchesStatus,
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("byCandidateA", ["candidateAId"])
    .index("byCandidateB", ["candidateBId"]),
});
