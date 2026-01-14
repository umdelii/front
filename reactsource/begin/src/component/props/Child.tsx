// type or interface

type ChildProps = {
  name: string;
  color: string;
  age?: number;
};

// 구조분해할당
function Child({ name, color, age = 20 }: ChildProps) {
  // function Child(props: ChildProps) {
  name += " from Parent";

  // Cannot assign to read only property 'name' of object
  // props => readonly 修正不可能
  // props.name += " from Parent";
  return (
    <>
      <h1 className="text-3xl">자식 컴포넌트</h1>
      <h2 className="text-xl">{name}</h2>
      <h2 className="text-xl text-red-600">{color}</h2>
      <h2 className="text-xl">{age}</h2>
      {/* <h2 className="text-xl">{props.name}</h2>
      <h2 className="text-xl text-red-600">{props.color}</h2> */}
    </>
  );
}

export default Child;
