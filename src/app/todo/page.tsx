/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export default function TodoApp() {
  return (
    <main className="min-h-screen bg-slate-950 p-2">
      <div className="container flex justify-center">
        <h1 className="text-2xl tracking-tight">
          <div className="space-y-4">
            <div className="shadow-neon flex items-center justify-center rounded-lg border-2 border-sky-200 p-2 text-sky-200">
              Todo App
            </div>
            <div className="shadow-neon flex items-center justify-center rounded-lg border-2 border-amber-200 p-2 text-amber-200">
              Todo App
            </div>
          </div>
        </h1>
      </div>
    </main>
  );
}
