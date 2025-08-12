import { Button } from "@/components/ui/button";

export function AddButton() {
  function handleClick() {
    console.log("test");
  }

  return <Button onClick={handleClick}>Add thing</Button>;
}
