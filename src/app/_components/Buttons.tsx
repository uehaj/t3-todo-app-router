/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { api } from "~/trpc/react";
import type { AppRouter } from "~/server/api/root";
import type { inferRouterOutputs } from "@trpc/server";

type Props = {
  todo: inferRouterOutputs<AppRouter>["todo"]["getAll"][0];
};

export default function Buttons({ todo }: Props) {
  const utils = api.useUtils();
  const { mutateAsync: todoDeleteAsync } = api.todo.delete.useMutation({
    onSettled: () => {
      void utils.todo.invalidate();
    },
  });
  const { mutateAsync: todoDoneAsync } = api.todo.done.useMutation({
    onSettled: () => {
      void utils.todo.invalidate();
    },
  });
  function handleDeleteTodo(id: string) {
    void todoDeleteAsync({ id });
  }
  function handleDoneTodo(id: string, done: boolean) {
    void todoDoneAsync({ id, done });
  }

  return (
    <>
      <input
        type="checkbox"
        className="mr-2"
        checked={todo.done}
        onChange={() => handleDoneTodo(todo.id, !todo.done)}
      />
      <span className={todo.done ? "line-through" : ""}>{todo.text}</span>
      <button
        className="ml-auto rounded bg-red-500 px-2 py-1 font-bold text-white hover:bg-red-700"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        ×
      </button>
    </>
  );
}
