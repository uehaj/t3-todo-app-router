"use client";

import { useRef } from "react";
import { Button } from "./Button";
import { addTodo } from "~/app/_actions/todo";

type Props = {
  onCreated: (formData: FormData) => void;
  reload: () => void;
};

export default function CreateTodo({ onCreated, reload }: Props) {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      className="flex"
      action={async (formData) => {
        onCreated(formData);
        ref.current?.reset();
        await addTodo(formData);
        reload();
      }}
      ref={ref}
    >
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
