// import { useDispatch } from "react";
import useCounter from "../store1.js";

const Button = () => {
  //   const dispatch = useDispatch();
  const { inc } = useCounter();

  return (
    <>
      {/* <button onClick={() => dispatch(increment())}>+</button> */}
      <button onClick={inc}>+</button>
    </>
  );
};

export default Button;
