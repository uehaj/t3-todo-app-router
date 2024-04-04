"use client";

import type { FormEvent } from "react";
import { api } from "~/trpc/react";

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
        className="mb-4 mr-4 flex-grow rounded border p-2"
        type="text"
        name="text"
        placeholder="新しいタスクを入力"
      />
      <button className="mb-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        タスクを追加
      </button>
    </form>
  );
}
