import { BoardList } from "@/modules/components/board-list";
import { dataTaskLists, type BoardLists } from "@/modules/task/data";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function App() {
  // const [boards, setBoardLists] = useState(dataTaskLists);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [boards, setBoardLists] = useState(() => {
    const storedBoards = localStorage.getItem("boards");
    return storedBoards
      ? (JSON.parse(storedBoards) as BoardLists[])
      : dataTaskLists;
  });

  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);
  //
  console.log({ boards });
  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const boardId = Number(formData.get("boardId"));
    if (!boardId) return;

    const name = formData.get("name")?.toString();
    if (!name) return;

    const totalTasks = boards.reduce(
      (total, board) => total + board.tasks.length,
      0,
    );

    const newTask = {
      id: totalTasks + 1,
      name: name,
    };

    const newTaskLists = boards.map((board) => {
      if (board.id === boardId) {
        return {
          ...board,
          tasks: [...board.tasks, newTask],
        };
      }
      return board;
    });

    setBoardLists(newTaskLists);
    event.currentTarget.reset();
  };

  const deleteTask = (boardId: number, taskId: number) => {
    const newTaskLists = boards.map((board) => {
      if (board.id === boardId) {
        const newTasks = board.tasks.filter((task) => task.id !== taskId);
        return {
          ...board,
          tasks: newTasks,
        };
      }
      return board;
    });

    setBoardLists(newTaskLists);
  };

  const deleteBoard = (boardId: number) => {
    const newTaskLists = boards.filter((board) => board.id !== boardId);
    setBoardLists(newTaskLists);
  };

  const handleAddBoardList = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const boardTitle = formData.get("board-title")?.toString().trim();
    const boardIcon = formData.get("board-icon")?.toString().trim();

    if (!boardTitle) {
      return;
    }

    const newBoard = {
      id: boards[boards.length - 1].id + 1,
      title: boardTitle,
      icon: boardIcon || "📋",
      tasks: [],
    };

    setBoardLists([...boards, newBoard]);
    event.currentTarget.reset();
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <section className="mb-8 text-center text-3xl font-bold text-black">
        <h1>Bolisto App</h1>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Add Another List</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={handleAddBoardList}>
              <DialogHeader>
                <DialogTitle>Add New Board List</DialogTitle>
                <DialogDescription>
                  Create a new board List with your preferred name and icon.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="grid gap-3">
                  <Label htmlFor="board-title">Board List Name</Label>
                  <Input
                    id="board-title"
                    name="board-title"
                    placeholder="Example: In Progress, Review, Done"
                    required
                    autoFocus
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="board-icon">Board List Icon (optional)</Label>
                  <Input
                    id="board-icon"
                    name="board-icon"
                    placeholder="Example: 🚀, ⏳, ✅, 📝"
                  />
                </div>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Add Board List</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </section>

      <section className="space-y-4">
        {boards.length === 0 ? (
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
            {boards.map((board) => (
              <li key={board.id} className="flex-1">
                <BoardList
                  boardId={board.id}
                  title={board.title}
                  icon={board.icon}
                  tasks={board.tasks}
                  onAddTask={addTask}
                  onDeleteBoard={() => deleteBoard(board.id)}
                  onDeleteTask={(taskId) => deleteTask(board.id, taskId)}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
