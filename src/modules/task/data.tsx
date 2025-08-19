export type Task = {
  id: number;
  name: string;
};

// same with Boards
export type DataTaskList = {
  id: number;
  title: string;
  icon: string;
  tasks: Task[];
};

export const dataTaskLists: DataTaskList[] = [
  {
    id: 1,
    title: "Todo",
    icon: "📋",
    tasks: [
      { id: 1, name: "Update Web Portfolio" },
      { id: 2, name: "Belajar React" },
      { id: 3, name: "Belajar TypeScript" },
    ],
  },
  {
    id: 2,
    title: "Doing",
    icon: "⏳",
    tasks: [
      { id: 1, name: "Buat Komponen React" },
      { id: 2, name: "Buat Skripsi" },
    ],
  },
  {
    id: 3,
    title: "Done",
    icon: "✅",
    tasks: [
      { id: 1, name: "Setup Project React dengan Vite" },
      { id: 2, name: "Belajar JavaScript" },
    ],
  },
];
