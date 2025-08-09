import { dataTaskLists } from "@/modules/task/data";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <section className="mb-8 text-center text-3xl font-bold text-black">
        <h1>Bolisto App</h1>
      </section>

      <section className="space-y-4">
        <ul className="mx-auto flex max-w-6xl list-none flex-col gap-6 p-0 md:flex-row">
          {dataTaskLists.map((taskList) => (
            <li key={taskList.id} className="flex-1">
              <List
                title={taskList.title}
                icon={taskList.icon}
                tasks={taskList.tasks}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export function List({
  title,
  icon,
  tasks,
}: {
  title: string;
  icon: string;
  tasks: { id: number; name: string }[];
}) {
  return (
    <div className="h-fit rounded-lg bg-white p-4 shadow-md">
      <h2 className="mb-4 flex items-center gap-2 border-b pb-2 text-lg font-semibold text-gray-800">
        {title} <span className="text-xl">{icon}</span>
      </h2>

      <ul className="list-none space-y-2 p-0">
        {tasks.map((task) => (
          <li key={task.id}>
            {/* TODO: Card */}
            <TaskCard name={task.name} />
          </li>
        ))}
      </ul>

      <div className="pt-4">
        <Button variant="ghost">
          <PlusIcon />
          Add a card
        </Button>
      </div>
    </div>
  );
}

// TODO: Card component
export function TaskCard({ name }: { name: string }) {
  return (
    <Card className="border-border/60 bg-card border border-l-4 border-l-red-400 transition hover:shadow-sm">
      <CardContent className="p-1">
        <p className="text-card-foreground cursor-pointer text-sm">{name}</p>
      </CardContent>
    </Card>
  );
}
