import React from "react";

function Child({ active, onClick }) {
  console.log("child rendered");

  return (
    <>
      <h1 className="text-3xl">Child : {active ? "Active" : "Not Active"}</h1>
      <button className="border bg-amber-600 p-3" onClick={onClick}>
        増加
      </button>
    </>
  );
}

export default React.memo(Child);
