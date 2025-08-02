export function App() {
  return (
    <div>
      <h1>Bolisto App</h1>
      <Card title="Todo" icon="📋" />
      <Card title="Doing" icon="⏳" />
      <Card title="Done" icon="✅" />
    </div>
  );
}

export function Card({ title, icon }: { title: string; icon: string }) {
  return (
    <div>
      <h2>
        {title} {icon}
      </h2>

      {title === "Todo" && (
        <div>
          <p>Update Web Portfolio</p>
          <p>Belajar React</p>
          <p>Belajar TypeScript</p>
        </div>
      )}

      {title === "Doing" && (
        <div>
          <p>Buat Komponen React</p>
          <p>Buat Skripsi</p>
        </div>
      )}

      {title === "Done" && (
        <div>
          <p>Setup Project React dengan Vite</p>
          <p>Belajar JavaScript</p>
        </div>
      )}
    </div>
  );
}
