import React from "react";
import { useSelector } from "react-redux";

function Result() {
  let count = useSelector((state) => state.counter.value);
  return <h2>{count}</h2>;
}

export default Result;
