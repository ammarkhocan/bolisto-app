const taskList = [
  { id: 1, title: "Todo", isTodoColumn: true },
  { id: 2, title: "Doing", isTodoColumn: false },
  { id: 3, title: "Done", isTodoColumn: false },
];

export function App() {
  return (
    <div>
      <h1>Bolisto App</h1>

      <ul>
        {taskList.map((column) => (
          <li key={column.id}>
            <Card title={column.title} isTodoColumn={column.isTodoColumn} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Card({
  title,
  isTodoColumn,
}: {
  title: string;
  isTodoColumn?: boolean;
}) {
  if (isTodoColumn) {
    return (
      <div>
        <h2>{title} 📋</h2>
        <p>Update Web Portfolio</p>
        <p>Belajar React</p>
        <p>Belajar TypeScript</p>
      </div>
    );
  }

  if (title === "Doing") {
    return (
      <div>
        <h2>{title} ⏳</h2>
        <p>Buat Komponen React</p>
        <p>Buat Skripsi</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{title} ✅</h2>
      <p>Setup Project React dengan Vite</p>
      <p>Belajar JavaScript</p>
    </div>
  );
}
