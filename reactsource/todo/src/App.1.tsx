import { useState, useRef } from "react";
import { type TodoCreate, initailTodos } from "./types/todo";

export function App() {
  const [todos, setTodos] = useState<TodoCreate[]>(initailTodos);
  // const todosId = todos.length + 1;
  const nextId = useRef(4);
  console.log(todos);

  // 일정 추가
  const handleAddTodo = (title: string) => {
    // 기존 todos에 추가
    setTodos([
      ...todos,
      {
        id: nextId.current,
        title: title,
        completed: false,
        important: false,
      },
    ]);
    nextId.current += 1;
  };

  // 일정 완료(completed)
  const handleChangeTodo = (todo: TodoCreate) => {
    // completed
    // 인자로 넘어온 todo와 같은 todo를 찾아서 completed 업데이트
    setTodos(todos.map((t) => (t.id == todo.id ? { ...t, ...todo } : t)));
  };

  // 일정 삭제
  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoTeamplate2>
        <div className="flex p-3">
          <span className="flex-1 text-left text-orange-700">
            중요일정은 체크 클릭
          </span>
          <div className="shrink-0">
            <span>완료</span>
            <select
              name="completed"
              className="mx-2 rounded border border-gray-400"
            >
              {[
                { label: "전체", value: "" },
                { label: "완료", value: "true" },
                { label: "미완료", value: "false" },
              ].map((option, idx) => (
                <option value={option.value} key={idx}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <TodoInsert2 onAddTodo={handleAddTodo} />
        <TodoList2
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onChangeTodo={handleChangeTodo}
        />
      </TodoTeamplate2>
    </>
  );
}
