import React, { useState } from "react";
import { decrement } from "../../context/counter";
import { useDispatch, useSelector } from "react-redux";

function Decrement() {
  const dispatch = useDispatch();
  const nullValue = useSelector((state) => state.counter.value);
  const [decValue, setDecValue] = useState(0);
  return (
    <div className="counter-dec">
      <input
        onChange={(e) => setDecValue(e.target.value)}
        type="number"
        placeholder="decrement"
      />
      <button
        disabled={nullValue === 0}
        onClick={() => dispatch(decrement(+decValue))}
      >
        Dec
      </button>
    </div>
  );
}

export default Decrement;
