import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../context/counter";

function Reset() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Reset;
