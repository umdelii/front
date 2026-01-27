import Child4 from "./Child4";
import { UseToggle } from "./useToggle";

function Child3() {
  const { isOn } = UseToggle();

  return (
    <>
      <h2>Child3</h2>
      <p>Toggle {isOn ? "ON" : "OFF"}</p>
      <Child4 />
    </>
  );
}

export default Child3;
