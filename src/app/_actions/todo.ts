"use server";
import { revalidatePath } from "next/cache";

// import { z } from "zod";
import { db } from "~/server/db";

export type Todo = Exclude<
  Awaited<ReturnType<typeof db.todo.findUnique>>,
  null
>;

export async function getAllTodo(_formData: FormData) {
  return db.todo.findMany({ orderBy: [{ createdAt: "desc" }] });
}

export async function addTodo(formData: FormData) {
  //  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.todo.create({
    data: {
      done: false,
      text: formData.get("text") as string,
    },
  });
}

export async function deleteTodo(_formData: FormData, id: string) {
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.todo.delete({ where: { id } });
}

export async function doneTodo(_formData: FormData, id: string, done: boolean) {
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.todo.update({ where: { id }, data: { done } });
}
