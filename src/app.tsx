export function App() {
  return (
    <div>
      <h1>Bolisto App</h1>
      <Card task="Belajar React" />
      <Card task="Buat Component" />
      <Card task="Setup Project React" />
      <Card task="Belajar JavaScript" />
      <Card task="Buat Portfolio" />
    </div>
  );
}

export function add(a: number, b: number) {
  return a + b;
}

export function Card({ task }: { task: string }) {
  return (
    <div>
      <h1>{task}</h1>
    </div>
  );
}
