"use client";

import TodoItem from "./TodoItem";
import CreateTodo from "./CreateTodo";
import { type Todo, getAllTodo } from "~/app/_actions/todo";
import { useEffect, useOptimistic, useState, useTransition } from "react";

export default function TodoList() {
  const [isPending, startTransition] = useTransition();
  const [todos, setTodos] = useState<Todo[]>([]);

  const [optimisticTodos, addOptimisticTodo] = useOptimistic<
    Todo[] | undefined,
    Todo
  >(todos, (state, newTodo) => (state ? [newTodo, ...state] : []));

  useEffect(() => {
    startTransition(async () => {
      setTodos(await getAllTodo({} as FormData));
    });
  }, []);

  async function reload() {
    setTodos(await getAllTodo({} as FormData));
  }

  return (
    <>
      <CreateTodo
        onCreated={async (formData: FormData) => {
          const todo = Object.fromEntries(
            formData.entries(),
          ) as unknown as Todo;
          addOptimisticTodo(todo);
        }}
        reload={reload}
      />
      <ul id="taskList" className="list-inside list-disc shadow-neon">
        {optimisticTodos?.map((todo) => (
          <li
            key={todo.id}
            className="mb-2 flex items-center rounded p-2 text-white"
          >
            <TodoItem todo={todo} reload={reload} />
          </li>
        ))}
      </ul>
    </>
  );
}
