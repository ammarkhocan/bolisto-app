const taskLists = [
  {
    id: 1,
    title: "Todo",
    icon: "📋",
    tasks: ["Update Web Portfolio", "Belajar React", "Belajar TypeScript"],
  },
  {
    id: 2,
    title: "Doing",
    icon: "⏳",
    tasks: ["Buat Komponen React", "Buat Skripsi"],
  },
  {
    id: 3,
    title: "Done",
    icon: "✅",
    tasks: ["Setup Project React dengan Vite", "Belajar JavaScript"],
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
  tasks: string[];
}) {
  return (
    <div>
      <h2>
        {title} {icon}
      </h2>
      {tasks.map((task, id) => (
        <p key={id}>{task}</p>
      ))}
    </div>
  );
}
