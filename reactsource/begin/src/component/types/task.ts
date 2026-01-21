export type TaskProps = {
  id: number;
  text: string;
  done: boolean;
};

export type TaskList = {
  tasks: TaskProps[];
  onDeleteTask: (id: number) => void;
  onChangeTask: (task: TaskProps) => void;
};

// 기존에 선언된 타입에서 제외한 타입 선언 :Omit
export type TaskItem = Omit<TaskList, "tasks"> & {
  task: TaskProps;
};
