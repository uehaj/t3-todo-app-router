import { api } from "~/trpc/server";
import TodoItem from "~/app/_components/TodoItem";
import CreateTodo from "./CreateTodo";

export default async function TodoListSC() {
  const todos = await api.todo.getAll();
  return (
    <>
      <CreateTodo />
      <ul
        id="taskList"
        className="list-inside list-disc bg-blue-800 shadow-neon"
      >
        {todos.map((todo) => (
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
