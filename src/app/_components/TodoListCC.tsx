/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import type { inferRouterOutputs } from "@trpc/server";
import TodoItem from "./TodoItem";
import type { AppRouter } from "~/server/api/root";
import { api } from "~/trpc/react";
import CreateTodo from "./CreateTodo";

type Props = {
  children: React.ReactNode;
};

// type Todo = inferRouterOutputs<AppRouter>["todo"]["getAll"][0];

export default function TodoListCC({ children }: Props) {
  const { data, isLoading, isError } = api.todo.getAll.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong...</div>;
  }

  return (
    <div>
      {data ? (
        <>
          <CreateTodo></CreateTodo>
          <ul id="taskList" className="shadow-neon list-inside list-disc">
            {data?.map((todo) => (
              <li
                className="mb-2 flex items-center rounded p-2 text-white"
                key={todo.id}
              >
                <TodoItem todo={todo} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        children
      )}
    </div>
  );
}
