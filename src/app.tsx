import { BoardList } from "@/modules/components/board-list";
import { dataTaskLists } from "@/modules/task/data";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function App() {
  const [taskLists, setTaskLists] = useState(dataTaskLists);

  const addTask = (boardId: number) => {
    const newTask = {
      id: taskLists.length + 1,
      name: "New Task",
    };

    const newTaskLists = taskLists.map((board) => {
      if (board.id === boardId) {
        return { ...board, tasks: [...board.tasks, newTask] };
      }
      return board;
    });

    setTaskLists(newTaskLists);
  };

  // Fungsi untuk delete task
  const deleteTask = (boardId: number, taskId: number) => {
    const newTaskLists = taskLists.map((board) => {
      if (board.id === boardId) {
        const newTasks = board.tasks.filter((task) => task.id !== taskId);
        return { ...board, tasks: newTasks };
      }
      return board;
    });

    setTaskLists(newTaskLists);
  };

  const deleteBoard = (boardId: number) => {
    const newTaskLists = taskLists.filter((board) => board.id !== boardId);
    setTaskLists(newTaskLists);
  };

  const addTaskList = () => {
    const newTaskList = {
      id: taskLists.length + 1,
      title: "New Todo",
      icon: "",
      tasks: [],
    };

    setTaskLists([...taskLists, newTaskList]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <section className="mb-8 text-center text-3xl font-bold text-black">
        <h1>Bolisto App</h1>

        <Button onClick={addTaskList}>Add Another List</Button>
      </section>
      <section className="space-y-4">
        {taskLists.length === 0 ? (
          <div className="py-12 text-center">
            <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-gray-700">
                📝 Empty Board List
              </h2>
              <p className="mb-6 text-gray-500">
                No boards have been created yet. Click the "Add Another List"
                button to create your first board!
              </p>
            </div>
          </div>
        ) : (
          <ul className="mx-auto flex max-w-6xl list-none flex-col gap-6 p-0 md:flex-row">
            {taskLists.map((taskList) => (
              <li key={taskList.id} className="flex-1">
                <BoardList
                  title={taskList.title}
                  icon={taskList.icon}
                  tasks={taskList.tasks}
                  onAddTask={() => addTask(taskList.id)}
                  onDeleteBoard={() => deleteBoard(taskList.id)}
                  onDeleteTask={(taskId) => deleteTask(taskList.id, taskId)}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
