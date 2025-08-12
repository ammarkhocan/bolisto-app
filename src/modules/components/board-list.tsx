import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { TaskCard } from "@/modules/components/task-card";

export function BoardList({
  title,
  icon,
  tasks,
  onAddTask,
}: {
  title: string;
  icon: string;
  tasks: { id: number; name: string }[];
  onAddTask?: () => void;
}) {
  return (
    <div className="h-fit rounded-lg bg-white p-4 shadow-md">
      <h2 className="mb-4 flex items-center gap-2 border-b pb-2 text-lg font-semibold text-gray-800">
        {title} <span className="text-xl">{icon}</span>
      </h2>

      <ul className="list-none space-y-2 p-0">
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskCard name={task.name} />
          </li>
        ))}
      </ul>

      <div className="pt-4">
        <Button variant="ghost" onClick={onAddTask}>
          <PlusIcon />
          Add a card
        </Button>
      </div>
    </div>
  );
}
