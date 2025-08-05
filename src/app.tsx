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
    <div>
      <h1>Bolisto App</h1>
      <ul>
        {taskLists.map((taskList) => (
          <li key={taskList.id}>
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
    <div>
      <h2>
        {title} {icon}
      </h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>{task.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
