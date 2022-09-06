import { title } from "process";
import { z } from "zod";
import { createRouter } from "./context";

export const todoRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.todo.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
    },
  })
  .query("get", {
    input: z.object({
      id: z.number(),
    }),
    async resolve({ ctx, input }) {
     const teste = await ctx.prisma.todo.findUnique({
        where: {
          id: input.id
        }
      })
      // Buscar um TODO por sua primaryKey
      return teste;
    },
  })
  .mutation("create", {
    input: z.object({
      // title: ???,
      title: z.string(),
      // description: ???,
      description: z.string(),
    }),
    async resolve({ ctx, input }) {
      // Criar um TODO
      const user = await ctx.prisma.todo.create({
        data: {
          title: input.title,
          description: input.description,
        }
      })
      return user;
    },
  });
