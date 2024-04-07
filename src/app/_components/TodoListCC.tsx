/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import TodoItem from "./TodoItem";
import { api } from "~/trpc/react";
import CreateTodo from "./CreateTodo";

type Props = {
  children: React.ReactNode;
};

export default function TodoListCC({ children }: Props) {
  const { data, isLoading, isError } = api.todo.getAll.useQuery();
  // ここでdataの型は、以下の型に推論される。
  // type Todo = inferRouterOutputs<AppRouter>["todo"]["getAll"][0];

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
