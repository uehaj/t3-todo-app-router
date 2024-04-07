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
        className="shadow-neon mb-4 mr-4 flex-grow rounded border-2 bg-slate-950 p-2"
        type="text"
        name="text"
        placeholder="新しいタスクを入力"
      />
      <button className="shadow-neon border-2 mb-4 rounded border-blue-400 bg-slate-950 px-4 py-2 font-bold text-blue-500 hover:bg-blue-700">
        タスクを追加
      </button>
    </form>
  );
}
