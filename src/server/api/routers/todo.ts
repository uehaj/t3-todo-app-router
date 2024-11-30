import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const TodoSchema = z.object({
  id: z.string(),
  done: z.boolean(),
  text: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const todoRouter = createTRPCRouter({
  getAll: publicProcedure
    .meta({ openapi: { method: "GET", path: "/todo", description: "Get all todo items" } })
    .input(z.void())
    .output(z.array(TodoSchema))
    .query(async ({ ctx }) => {
    return ctx.db.todo.findMany({ orderBy: [{ createdAt: "desc" }] });
  }),
  add: publicProcedure
    .meta({ openapi: { method: 'POST', path: '/todo', description: "Add a todo item" } })
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .output(TodoSchema)
    .mutation(async ({ ctx, input }) => {
      const { text } = input;
      return ctx.db.todo.create({
        data: {
          done: false,
          text,
        },
      });
    }),
  delete: publicProcedure
    .meta({ openapi: { method: "DELETE", path: "/todo/{id}", description: "Delete a todo item" } })
    .input(z.object({ id: z.string() }))
    .output(TodoSchema)
    .mutation(({ ctx, input }) => {
      const { id } = input;
      return ctx.db.todo.delete({ where: { id } });
    }),
  update: publicProcedure
    .meta({ openapi: { method: "PUT", path: "/todo/{id}", description: "To be done a todo item" } })
    .input(z.object({ id: z.string(), done: z.boolean().optional(), text: z.string().optional() }))
    .output(TodoSchema)
    .mutation(({ ctx, input }) => {
      const { id, ...rest } = input;
      console.log(`id=`, id, ` rest=`, rest);
      return ctx.db.todo.update({ where: { id }, data: rest });
    }),
});
