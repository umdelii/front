import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import type { Todo, TodoCreate } from "../types/todo";
import { useState } from "react";

const TodoListItem2 = ({ todo, onDeleteTodo, onChangeTodo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  const checkClick = () => {
    setIsCompleted(!isCompleted);
    onChangeTodo({
      ...todo,
      completed: !isCompleted,
    });
  };

  return (
    <div className="flex items-center p-4 even:bg-gray-200">
      <div className="flex grow items-center">
        {isCompleted ? (
          <MdCheckBox onClick={checkClick} />
        ) : (
          <MdCheckBoxOutlineBlank onClick={checkClick} />
        )}
        <div
          className={`ml-2 flex-1 ${isCompleted ? "text-gray-400 line-through" : ""}`}
        >
          {todo.title}
        </div>
      </div>
      <div className="flex cursor-pointer items-center text-2xl text-red-300 hover:text-red-600">
        <MdRemoveCircleOutline onClick={() => onDeleteTodo(todo.id)} />
      </div>
    </div>
  );
};

export default TodoListItem2;
