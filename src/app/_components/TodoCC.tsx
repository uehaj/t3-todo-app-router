/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import type { inferRouterOutputs } from "@trpc/server";
import Buttons from "./Buttons";
import type { AppRouter } from "~/server/api/root";
import { api } from "~/trpc/react";
import CreateTodo from "./CreateTodo";

type Props = {
  //  todos: inferRouterOutputs<AppRouter>["todo"]["getAll"];
  children: React.ReactNode;
};

type Todo = inferRouterOutputs<AppRouter>["todo"]["getAll"][0];

export default function TodoCC({ children }: Props) {
  const { data, isLoading, isError } = api.todo.getAll.useQuery();

  return (
    <div>
      {data ? (
        <>
          <CreateTodo></CreateTodo>
          <ul id="taskList" className="list-inside list-disc">
            {data?.map((todo) => (
              <li
                className="mb-2 flex items-center rounded bg-white p-2"
                key={todo.id}
              >
                <Buttons todo={todo} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        children
      )}
    </div>
    // <ul id="taskList" className="list-inside list-disc">
    //   {todos?.data?.map((todo) => (
    //     <li
    //       className="mb-2 flex items-center rounded bg-white p-2"
    //       key={todo.id}
    //     >
    //       <Buttons todo={todo} />
    //     </li>
    //   ))}
    // </ul>
  );
}
