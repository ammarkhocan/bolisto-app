import { dataTaskLists } from "@/modules/task/data";

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
              <List
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

export function List({
  title,
  icon,
  tasks,
}: {
  title: string;
  icon: string;
  tasks: { id: number; name: string }[];
}) {
  return (
    <div className="h-fit rounded-lg bg-white p-4 shadow-md">
      <h2 className="mb-4 flex items-center gap-2 border-b pb-2 text-lg font-semibold text-gray-800">
        {title} <span className="text-xl">{icon}</span>
      </h2>

      <ul className="list-none space-y-2 p-0">
        {tasks.map((task) => (
          <li key={task.id}>
            {/* TODO: Card */}
            <div>
              <p className="cursor-pointer rounded border-l-4 border-red-400 bg-gray-50 p-3 transition-colors hover:bg-gray-100">
                {task.name}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="pt-4">
        {/* TODO: Button component from shadcn */}
        <button>Add a card</button>
      </div>
    </div>
  );
}

// TODO: Card component
