import { type NextPage } from "next";
import TodoList from "~/app/_components/TodoList";

const TodoApp: NextPage = async () => {
  return (
    <main className="min-h-screen bg-slate-950 p-2">
      <div className="container mx-auto flex flex-col p-4">
        <h1 className="border-2 border-amber-500 p-3 text-center text-4xl font-bold text-amber-500 shadow-neon">
          Todoアプリ
        </h1>
        <br />
        <TodoList />
      </div>
    </main>
  );
};
export default TodoApp;
