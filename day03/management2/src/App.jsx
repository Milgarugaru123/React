import OneDepth from "./organism/OneDepth";
// import { useSelector } from "react";
import useCounter from "./store1.js";

const App = () => {
  //   const count = useSelector((state) => state.counter.value);
  const { count } = useCounter();

  return (
    <>
      <span>{count}</span>
      <OneDepth />
    </>
  );
};

export default App;
