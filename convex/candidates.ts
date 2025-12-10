"use server";
import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

import { TextEnum } from "../i18n/TextEnum";
import { vCandidateStatus, vGender, vSector } from "./enums";

export const createCandidate = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    gender: vGender,
    idNumber: v.string(),
    phone: v.string(),
    dateOfBirth: v.string(),
    sector: vSector,
    status: vCandidateStatus,
  },
  handler: async (ctx, args) => {
    const existingCandidate = await ctx.db
      .query("candidates")
      .withIndex("byIdNumber", (q: any) => q.eq("idNumber", args.idNumber))
      .first();

    if (existingCandidate) {
      throw new ConvexError({
        type: "DUPLICATE_ENTRY",
        message: TextEnum.CANDIDATE_ALREADY_EXISTS,
      });
    }

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
    gender: vGender,
    dateOfBirth: v.string(),
    phone: v.string(),
    sector: vSector,
    status: vCandidateStatus,
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.patch(args.id, {
      ...args,
      updatedAt: now,
    });
  },
});

// export const getCandidates = query({
//   args: {
//     filter: v.optional(v.object({
//       gender: v.optional(v.union(v.literal("male"), v.literal("female"), v.literal("all"))),
//       status: v.optional(vCandidatesStatus),
//       sector: v.optional(vSector),
//     })),
//     limit: v.optional(v.number()),
//   },
//   handler: async (ctx, args) => {
//     const limit = args.limit || 40;
//     let q = ctx.db.query("candidates");

//     if (args.filter === "gender") {
//       if (!args.gender) return [];
//       q = q.filter((q) => q.eq(q.field("gender"), args.gender));
//     }
// })
// export const getcandidtesByGender =

export const getCandidateById = query({
  args: { id: v.id("candidates") },
  handler: async (ctx, args) => {
    const candidate = await ctx.db.get(args.id);
    if (!candidate) {
      throw new Error("Candidate not found");
    }
    return candidate;
  },
});
