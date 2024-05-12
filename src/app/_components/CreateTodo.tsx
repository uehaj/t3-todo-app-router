"use client";

import type { FormEvent } from "react";
import { api } from "~/trpc/react";
import { Button } from "./Button";

export default function CreateTodo() {
  const utils = api.useUtils();

  const { mutateAsync: todoAddAsync } = api.todo.add.useMutation({
    onSettled: () => {
      void utils.todo.invalidate();
    },
  });
  function handleAddTodo(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    form.reset();
    void todoAddAsync(formJson as { text: string });
  }
  return (
    <form className="flex" onSubmit={handleAddTodo}>
      <input
        className="mb-4 mr-4 flex-grow rounded border-2 bg-slate-950 p-2 text-white shadow-neon"
        type="text"
        name="text"
        placeholder="新しいタスクを入力"
      />
      <Button type="submit">タスクを追加</Button>
    </form>
  );
}
