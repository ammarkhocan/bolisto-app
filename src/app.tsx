export function App() {
  return (
    <div>
      <h1>Bolisto App</h1>
      <button>Submit</button>
      <Card />
    </div>
  );
}

export function Card() {
  const name = "Ammar Ismail Khocan ";

  return (
    <div>
      <h1>Nama saya : {name}</h1>
    </div>
  );
}
