import { mutation } from "./_generated/server";
import { v } from "convex/values";

import { vCandidatesStatus, vSector } from "./schema";

export const createCandidate = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    gender: v.union(v.literal("male"), v.literal("female")),
    dateOfBirth: v.string(),
    phone: v.string(),
    sector: vSector,
    status: vCandidatesStatus,
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("candidates", {
      ...args,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const updateCandidate = mutation({
  args: {
    id: v.id("candidates"),
    firstName: v.string(),
    lastName: v.string(),
    gender: v.union(v.literal("male"), v.literal("female")),
    dateOfBirth: v.string(),
    phone: v.string(),
    sector: vSector,
    status: vCandidatesStatus,
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.patch(args.id, {
      ...args,
      updatedAt: now,
    });
  },
});
