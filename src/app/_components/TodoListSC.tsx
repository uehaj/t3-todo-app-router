import { api } from "~/trpc/server";
import { Button } from "./Button";

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
          <Button variant={"danger"}>×</Button>
        </li>
      ))}
    </>
  );
}
