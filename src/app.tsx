const taskLists = [
  {
    id: 1,
    title: "Todo",
    icon: "📋",
    tasks: [
      { id: 1, name: "Update Web Portfolio" },
      { id: 2, name: "Belajar React" },
      { id: 3, name: "Belajar TypeScript" },
    ],
  },
  {
    id: 2,
    title: "Doing",
    icon: "⏳",
    tasks: [
      { id: 1, name: "Buat Komponen React" },
      { id: 2, name: "Buat Skripsi" },
    ],
  },
  {
    id: 3,
    title: "Done",
    icon: "✅",
    tasks: [
      { id: 1, name: "Setup Project React dengan Vite" },
      { id: 2, name: "Belajar JavaScript" },
    ],
  },
];

export function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-8 text-center text-3xl font-bold text-blue-600">
        <h1>Bolisto App</h1>
      </div>
      <ul className="mx-auto flex max-w-6xl list-none flex-col gap-6 p-0 md:flex-row">
        {taskLists.map((taskList) => (
          <li key={taskList.id} className="flex-1">
            <Card
              title={taskList.title}
              icon={taskList.icon}
              tasks={taskList.tasks}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Card({
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
            <p className="cursor-pointer rounded border-l-4 border-red-400 bg-gray-50 p-3 transition-colors hover:bg-gray-100">
              {task.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
