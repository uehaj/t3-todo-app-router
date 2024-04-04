/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import type { inferRouterOutputs } from "@trpc/server";
import Buttons from "./Buttons";
import type { AppRouter } from "~/server/api/root";
import { api } from "~/trpc/react";

type Props = {
  //  todos: inferRouterOutputs<AppRouter>["todo"]["getAll"];
};

type Todo = inferRouterOutputs<AppRouter>["todo"]["getAll"][0];

export default function TodoList() {
  const todos = api.todo.getAll.useQuery();

  return (
    <ul id="taskList" className="list-inside list-disc">
      {todos?.data?.map((todo) => (
        <li
          className="mb-2 flex items-center rounded bg-white p-2"
          key={todo.id}
        >
          <Buttons todo={todo} />
        </li>
      ))}
    </ul>
  );
}
