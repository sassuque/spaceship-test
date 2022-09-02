import { z } from "zod";
import { createRouter } from "./context";

export const todoRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.todo.findMany();
    },
  })
  .query("get", {
    input: z.object({
      id: z.number().optional(),
    }),
    async resolve({ ctx, input }) {
      return undefined;
    },
  })
  .mutation("create", {
    input: z.object({
      title: z.string(),
      description: z.string(),
    }),
    async resolve({ ctx, input }) {
      return null;
    },
  });
