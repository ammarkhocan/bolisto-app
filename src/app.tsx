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
      <div className="text-3xl font-bold text-center mb-8 text-blue-600">
        <h1>Bolisto App</h1>
      </div>
      <ul className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto list-none p-0">
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
    <div className="bg-white rounded-lg shadow-md p-4 h-fit">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800 border-b pb-2">
        {title} <span className="text-xl">{icon}</span>
      </h2>
      <ul className="space-y-2 list-none p-0">
        {tasks.map((task) => (
          <li key={task.id}>
            <p className="bg-gray-50 p-3 rounded border-l-4 border-red-400 hover:bg-gray-100 transition-colors cursor-pointer">
              {task.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
