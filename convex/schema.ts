import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkUserId: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    email: v.optional(v.string()),
    phone: v.optional(v.string()),
    subscriptionPlan: v.union(
      v.literal("basic"),
      v.literal("premium"),
      v.literal("pro")
    ),
    subscriptionStatus: v.union(
      v.literal("active"),
      v.literal("expired"),
      v.literal("trial")
    ),
    subscriptionExpiry: v.optional(v.number()),
    isActive: v.boolean(),
    profilePicture: v.optional(v.string()),
    bio: v.optional(v.string()),
    specializations: v.optional(v.array(v.string())), // לדוג' ["דתי", "חילוני"]
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("byClerkUserId", ["clerkUserId"]),
});
