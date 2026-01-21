export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  important: boolean;
  createDate: Date;
  updateDate: Date;
};

export const initailTodos = [
  {
    id: 1,
    title: "react 기초 알아보기",
    completed: true,
    important: true,
    createDate: new Date(),
    updateDate: new Date(),
  },
  {
    id: 2,
    title: "typescript 기초 알아보기",
    completed: false,
    important: true,
    createDate: new Date(),
    updateDate: new Date(),
  },
  {
    id: 3,
    title: "java 기초 알아보기",
    completed: true,
    important: false,
    createDate: new Date(),
    updateDate: new Date(),
  },
];

// create용
export type TodoCreate = Omit<Todo, "createDate" | "updateDate">;
