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
  // 上記の型は、Create T3 App ver 7.32.0では
  // type Todo = RouterOutputs["todo"]["getAll"][0]
  // でも参照できる。

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
          <CreateTodo />
          <ul id="taskList" className="list-inside list-disc shadow-neon">
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
