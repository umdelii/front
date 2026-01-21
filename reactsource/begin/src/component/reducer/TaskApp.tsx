import { useEffect, useReducer } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import type { TaskProps } from "../types/task";
import { taskReducer } from "./taskReducer";

const initialTask = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "lennon Wall pic", done: true },
];
let nextId = 3;

function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTask);

  // 여행계획 추가
  const handleAddTask = (text: string) => {
    // tasks에 추가
    dispatch({
      type: "ADD",
      id: nextId++,
      text: text,
      done: false,
    });
    console.log("add task");
  };
  // 여행계획 수정
  const handleChangeTask = (task: TaskProps) => {
    console.log(task);
    // 수정할 task 찾고 변경
    dispatch({ type: "CHANGE", task: task });
  };
  // 여행계획 삭제
  const handleDeleteTask = (taskId: number) => {
    // 방법 1. tasks에서 id에 해당하는 task 제거
    // 방법 2. tasks에서 id와 일치하지 않는 task 추출해서 새로운 배열 생성 : map(), filter()
    dispatch({ type: "DELETE", id: taskId });
    console.log("delete task");
  };

  // task 상태 확인용
  useEffect(() => {
    console.log("업데이트 된 tasks ", tasks);
  }, [tasks]);

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-2xl space-y-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-center text-2xl font-semibold">行く旅行先</h2>
          {/* 데이터 입력 */}
          <AddTask onAddTask={() => handleAddTask} />
          {/* 리스트 */}
          <ListTask
            tasks={tasks}
            onDeleteTask={() => handleDeleteTask}
            onChangeTask={() => handleChangeTask}
          />
        </div>
      </div>
    </>
  );
}

export default TaskApp;
