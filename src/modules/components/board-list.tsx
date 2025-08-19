import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { TaskCard } from "@/modules/components/task-card";
import { Trash } from "lucide-react";
import { Input } from "@/components/ui/input";

export function BoardList({
  title,
  icon,
  tasks,
  onAddTask,
  onDeleteBoard,
  onDeleteTask,
}: {
  title: string;
  icon: string;
  tasks: { id: number; name: string }[];
  onAddTask?: () => void;
  onDeleteBoard?: () => void;
  onDeleteTask?: (taskId: number) => void;
}) {
  return (
    <div className="h-fit rounded-lg bg-white p-4 shadow-md">
      <h2 className="mb-4 flex items-center gap-2 border-b pb-2 text-lg font-semibold text-gray-800">
        {title} <span className="text-xl">{icon}</span>
        <Trash
          className="ml-auto cursor-pointer text-gray-500 hover:text-red-500"
          onClick={onDeleteBoard}
        >
          Delete
        </Trash>
      </h2>

      {tasks.length === 0 ? (
        <div className="mb-4 py-6 text-center">
          <p>📝</p>
          <p className="text-sm text-gray-500">No tasks in this board</p>
          <p className="mt-1 text-xs text-gray-400">
            Click "Add a Task" to create your first task
          </p>
        </div>
      ) : (
        <ul className="list-none space-y-2 p-0">
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskCard
                name={task.name}
                onDelete={() => onDeleteTask?.(task.id)}
              />
            </li>
          ))}
        </ul>
      )}

      <div className="pt-4">
        <Input type="name" placeholder="Add a Task" />
        <Button variant="ghost" onClick={onAddTask}>
          <PlusIcon />
          Add a Task
        </Button>
      </div>
    </div>
  );
}
