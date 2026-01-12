"use server";
import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const sendImage = mutation({
  args: {
    candidateId: v.id("candidates"),
    storageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("candidateImages", {
      candidateId: args.candidateId,
      storageId: args.storageId,
      uploadedAt: Date.now(),
      format: "image",
    });
  },
});

export const getCandidateImagesByCandidateId = query({
  args: {
    candidateId: v.id("candidates"),
  },
  handler: async (ctx, args) => {
    const images = await ctx.db
      .query("candidateImages")
      .withIndex("byCandidateId", (q) => q.eq("candidateId", args.candidateId))
      .collect();
    return images;
  },
});
