import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CounterButton() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
  );
}
