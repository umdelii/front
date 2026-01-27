export const TodoItem = () => {
  return (
    <div>
      <input type="checkbox" />
      <span>
        <button className="bg-red-500 p-4">삭제</button>
      </span>
    </div>
  );
};

function Todos() {
  return (
    <>
      <form action="" method="post">
        <input type="text" className="border p-3" />
        <button className="bg-blue-500 p-4">등록</button>
      </form>
    </>
  );
}

export default Todos;
