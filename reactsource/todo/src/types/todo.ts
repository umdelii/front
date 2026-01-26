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

export type Todos = {
  todos: PageResult<Todo>;
  onDeleteTodo: (id: number) => void;
  onChangeTodo: (todo: UpsertTodo) => void;
};

export type ListItemProps = Omit<Todos, "todos"> & {
  todo: Todo;
};

// create용 (직접 데이터 삽입 시 사용)
export type TodoCreate = Omit<Todo, "createDate" | "updateDate">;

// 서버 연동 데이터 타입
// create , update
export type UpsertTodo = Omit<Todo, "id" | "createDate" | "updateDate"> & {
  id?: number;
};
// read(서버로부터 넘어오는 데이터 담기) = type Todo와 동일

// read 요청시 parameter 타입 지정
export type ReadParam = "" | "true" | "false";

export function toCompleteQuery(completed: ReadParam): ReadParam {
  return completed ? "true" : "false";
}

// 페이지 나누기 타입
// 서버 : PageResultDTO
export type PageRequesttDTO = {
  page: number;
  size: number;
};
export type PageResult<T> = {
  dtoList: T[];
  pageNumList: number[];
  pageRequestDTO: PageRequesttDTO;
  prev: boolean;
  next: boolean;
  prevPage: number;
  nextPage: number;
  totalPage: number;
  current: number;
  totalCount: number;
};
