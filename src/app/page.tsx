/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/trpc/server";
import CreateTodo from "./_components/CreateTodo";
import Buttons from "./_components/Buttons";
import TodoList from "./_components/TodoList";

const TodoApp: NextPage = async () => {
  // const todos = await api.todo.getAll();

  return (
    <>
      <Head>
        <title>TodoApp</title>
        <meta name="description" content="TodoApp by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-4xl font-bold">Todoアプリ</h1>
        <div>
          <CreateTodo />
        </div>
        <TodoList></TodoList>
      </div>
    </>
  );
};
export default TodoApp;
