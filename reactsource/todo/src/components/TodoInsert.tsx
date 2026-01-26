import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import type { UpsertTodo } from "../types/todo";

const TodoInsert = ({
  onAddTodo,
}: {
  onAddTodo: (todo: UpsertTodo) => void;
}) => {
  const [form, setForm] = useState({
    title: "",
    completed: false,
    important: false,
  });

  const { title, important } = form;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, type, checked } = e.target;

    // setForm({
    //   ...form,
    //   [name]: type === "checkbox" ? checked : value,
    // });

    setForm((prev) => ({
      ...prev, // 이전 폼 의미
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 부모 함수 호출
    onAddTodo(form);
    // onAddTodo({
    //   title: title,
    //   completed: false,
    //   important: important,
    // });
    // 사용자 입력값 초기화
    setForm({
      ...form,
      title: "",
      completed: false,
      important: false,
    });
  };

  return (
    <form className="flex bg-black" onSubmit={handleSubmit}>
      <input
        type="checkbox"
        name="important"
        className="mx-2 grow-0 p-2 text-gray-400 placeholder:text-gray-400 focus:outline-none"
        onChange={handleFormChange}
        checked={important}
      />
      <input
        type="text"
        name="title"
        placeholder="할 일을 입력하세요"
        className="grow p-2 text-gray-400 placeholder:text-gray-400 focus:outline-none"
        onChange={handleFormChange}
        value={title}
      />
      <button
        type="submit"
        className="cursor-pointer bg-gray-300 p-2 hover:bg-gray-500"
      >
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
