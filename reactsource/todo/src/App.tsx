import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import TodoTeamplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import {
  type PageResult,
  type ReadParam,
  type Todo,
  type UpsertTodo,
} from "./types/todo";
import { createTodo, deleteTodo, fetchTodos, updateTodo } from "./api/fetch";
import ReactPaginate from "react-paginate";

// 초기화 작업
const initialPageState: PageResult<Todo> = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: { page: 0, size: 10 },
  prev: false,
  next: false,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
  totalCount: 0,
};

function App() {
  const [todos, setTodos] = useState<PageResult<Todo>>(initialPageState);
  const [isCompleted, setIsCompleted] = useState<ReadParam>("");
  // 화면 강제 전환용 useState
  const [refreshKey, setRefreshKey] = useState(0);
  const forceReload = () => setRefreshKey((k) => k + 1);

  // 페이지 나누기 현재 페이지 저장용
  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * todos.pageRequestDTO.size;
  console.log(`Loading items from ${currentPage} to ${offset}`);
  // 총 100페이지인데 10개씩 보여줄거다
  // numList와 역할 동일하나 해당 라이브러리는 자동으로 -1을 해주기에 따로 사용
  const pageCount = Math.ceil(todos.totalCount / todos.pageRequestDTO.size);

  // 페이지 번호 클릭 시 호출
  const handlePageClick = (event: { selected: number }) => {
    console.log(`User requested page number ${event.selected}`);
    setCurrentPage(event.selected);
  };

  const getList = useCallback(async (completed: ReadParam, page: number) => {
    // async arrow away => 비동기함수를 동기함수처럼 만드는
    try {
      const data = await fetchTodos(completed, page);
      setTodos(data);
    } catch (error) {
      console.log("fetchTodos error", error);
    }
  }, []);

  // 데이터 가져오기
  useEffect(() => {
    console.log("확인");
    getList(isCompleted, currentPage);
  }, [getList, refreshKey, currentPage]);

  // 일정 추가
  const handleAddTodo = async (todo: UpsertTodo) => {
    try {
      const result = await createTodo(todo);
      console.log("생성", result);
      setIsCompleted("");
      setCurrentPage(0);
      forceReload();
    } catch (error) {
      console.log("createTodo error", error);
    }
  };

  // 일정 완료(completed)
  const handleChangeTodo = async (todo: UpsertTodo) => {
    // completed
    // 인자로 넘어온 todo와 같은 todo를 찾아서 completed 업데이트
    // setTodos(todos.map((t) => (t.id == todo.id ? { ...t, ...todo } : t)));

    try {
      const result = await updateTodo(todo);
      console.log("수정", result);

      // list 요청
      setIsCompleted("");
      forceReload();
    } catch (error) {
      console.log("updateTodo error", error);
    }
  };

  // 일정 삭제
  const handleDeleteTodo = async (id: number) => {
    // setTodos(todos.filter((todo) => todo.id !== id)); // 서버 연동 후 사용불가
    try {
      const result = await deleteTodo(id);
      console.log("삭제 여부", result);

      // 리스트 호출 => getList()였지만 useEffect()사용
      // 전체 리스트
      setIsCompleted("");
      setCurrentPage(0);
      // 화면 강제 리렌더링
      forceReload();
    } catch (error) {
      console.log("deleteTodo error", error);
    }
  };

  // 완료/미완료 선택
  const handleCompleted = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const completed = e.target.value as ReadParam; // as : == 타입
    setIsCompleted(completed);
    forceReload();
    // getList(completed); // 직접 호출 but, useEffect() 자동 호출되게 만들어야함
  };

  return (
    <>
      <TodoTeamplate>
        <div className="flex p-3">
          <span className="flex-1 text-left text-orange-700">
            중요일정은 체크 클릭
          </span>
          <div className="shrink-0">
            <span>완료</span>
            <select
              name="completed"
              className="mx-2 rounded border border-gray-400"
              onChange={handleCompleted}
              value={isCompleted}
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
        <TodoInsert onAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onChangeTodo={handleChangeTodo}
        />
      </TodoTeamplate>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        forcePage={currentPage}
        containerClassName="flex justify-center gap-2 mt-4"
        pageClassName="px-3 py-1 border rounded cursor-pointer"
        activeClassName="bg-orange-500 text-white"
        previousClassName="px-3 py-1 border rounded cursor-pointer"
        nextClassName="px-3 py-1 border rounded cursor-pointer"
      />
    </>
  );
}

export default App;
