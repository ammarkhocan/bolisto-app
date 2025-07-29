export function App() {
  return (
    <div>
      <h1>Bolisto App</h1>
      <Card task="To Do" todo />
      <Card task="Doing" />
      <Card task="Done" />
    </div>
  );
}

export function Card({ task, todo }: { task: string; todo?: boolean }) {
  if (todo) {
    return (
      <div>
        <h1>{task} 📋</h1>
        <p>Update Web Portfolio</p>
        <p>Belajar React</p>
        <p>Belajar TypeScript</p>
      </div>
    );
  }

  if (task === "Done") {
    return (
      <div>
        <h1>{task} ✅</h1>
        <p>Setup Project React with Vite </p>
        <p>Belajar JavaScript </p>
      </div>
    );
  }

  return (
    <div>
      <h1>{task} ⏳</h1>
      <p>Buat Component</p>
    </div>
  );
}
