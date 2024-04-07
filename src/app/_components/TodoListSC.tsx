/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "~/trpc/server";

export default async function TodoListSC() {
  const todos = await api.todo.getAll();
  return (
    <>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="mb-2 flex items-center rounded bg-blue-100 p-2"
        >
          <input type="checkbox" className="mr-2" checked={todo.done} />
          <span className={todo.done ? "line-through" : "blue-500"}>
            {todo.text}
          </span>
          <button className="ml-auto rounded bg-red-500 px-2 py-1 font-bold text-white hover:bg-red-700">
            ×
          </button>
        </li>
      ))}
    </>
  );
}
