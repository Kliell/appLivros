import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const register = mutation({
  args: { nome: v.string(), senha: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert("users", { nome: args.nome, senha: args.senha });
  },
});