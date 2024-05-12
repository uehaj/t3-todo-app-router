"use client";

import { api } from "~/trpc/react";
import TodoItem from "./TodoItem";
import CreateTodo from "./CreateTodo";

export default function TodoList() {
  const [todos] = api.todo.getAll.useSuspenseQuery();
  return (
    <>
      <CreateTodo />
      <ul id="taskList" className="list-inside list-disc shadow-neon">
        {todos?.map((todo) => (
          <li
            key={todo.id}
            className="mb-2 flex items-center rounded p-2 text-white"
          >
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </>
  );
}
