import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../context/counter";

function Increment() {
  const dispatch = useDispatch();
  const [incValue, setIncValue] = useState(0);
  return (
    <div className="counter-inc">
      <input
        onChange={(e) => setIncValue(e.target.value)}
        type="number"
        placeholder="increment"
      />
      <button onClick={() => dispatch(increment(+incValue))}>Inc</button>
    </div>
  );
}

export default Increment;
