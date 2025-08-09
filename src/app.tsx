import { dataTaskLists } from "@/modules/task/data";
import { BoardList } from "./modules/components/board-list";

export function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <section className="mb-8 text-center text-3xl font-bold text-black">
        <h1>Bolisto App</h1>
      </section>

      <section className="space-y-4">
        <ul className="mx-auto flex max-w-6xl list-none flex-col gap-6 p-0 md:flex-row">
          {dataTaskLists.map((taskList) => (
            <li key={taskList.id} className="flex-1">
              <BoardList
                title={taskList.title}
                icon={taskList.icon}
                tasks={taskList.tasks}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
