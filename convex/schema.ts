import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

import {
  vCandidateStatus,
  vGender,
  vMatchStatus,
  vSector,
  vSubscriptionPlan,
  vSubscriptionStatus,
} from "./enums";

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
    specializations: v.optional(v.array(vSector)),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("byClerkUserId", ["clerkUserId"]),

  candidates: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    gender: vGender,
    idNumber: v.string(),
    phone: v.string(),
    dateOfBirth: v.string(),
    sector: vSector,
    status: vCandidateStatus,
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("byIdNumber", ["idNumber"]),

  matchmakers_candidates: defineTable({
    candidateId: v.id("candidates"),
    shadchanId: v.id("users"),
  }),

  matches: defineTable({
    candidateAId: v.id("candidates"),
    candidateBId: v.id("candidates"),
    shadchanAId: v.id("users"),
    shadchanBId: v.id("users"),
    status: vMatchStatus,
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("byCandidateA", ["candidateAId"])
    .index("byCandidateB", ["candidateBId"]),
});
