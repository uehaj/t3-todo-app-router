/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextPage } from "next";
import Head from "next/head";
import CreateTodo from "./_components/CreateTodo";
import { Suspense } from "react";
import TodoSC from "./_components/TodoSC";
import TodoCC from "./_components/TodoCC";

const TodoApp: NextPage = async () => {
  return (
    <>
      <Head>
        <title>TodoApp</title>
        <meta name="description" content="TodoApp by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-4xl font-bold">Todoアプリ</h1>
        <TodoCC>
          <CreateTodo></CreateTodo>
          <ul id="taskList" className="list-inside list-disc">
            <Suspense fallback={<div>Loading...</div>}>
              <TodoSC />
            </Suspense>
          </ul>
        </TodoCC>
      </div>
    </>
  );
};
export default TodoApp;
