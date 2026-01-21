function Button() {
  // 버튼 클릭 시 alert()

  const handleClick = () => alert("ボタンクリック！");

  return (
    <>
      <button className="bg-green-500 p-4" onClick={handleClick}>
        ボタン
      </button>
    </>
  );
}

export default Button;
