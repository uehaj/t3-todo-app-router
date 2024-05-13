"use client";

import { Button } from "./Button";
import { deleteTodo, doneTodo, type Todo } from "~/app/_actions/todo";
import { useOptimistic, useTransition } from "react";

type Props = {
  todo: Todo;
  reload: () => void;
};

export default function TodoItem({ todo, reload }: Props) {
  const [isPending, startTransition] = useTransition();

  function handleDeleteTodo(id: string) {
    startTransition(async () => {
      await deleteTodo({} as FormData, id);
    });
    reload();
  }

  const [optimisticDone, setOptimisticDone] = useOptimistic<boolean, boolean>(
    todo.done,
    (state, newDone) => newDone,
  );

  function handleDoneTodo(id: string, done: boolean) {
    startTransition(async () => {
      setOptimisticDone(done);
      await doneTodo({} as FormData, id, done);
    });
    reload();
  }

  return (
    <>
      <input
        type="checkbox"
        className="ml-2 mr-4 accent-pink-500 shadow-neon"
        checked={optimisticDone}
        onChange={() => handleDoneTodo(todo.id, !todo.done)}
      />
      <span className={todo.done ? "line-through" : ""}>{todo.text}</span>
      <Button
        variant={"danger"}
        size={"sm"}
        className={"ml-auto"}
        onClick={() => handleDeleteTodo(todo.id)}
      >
        ×
      </Button>
    </>
  );
}
