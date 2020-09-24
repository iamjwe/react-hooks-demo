import React, { useState } from "react";

export default function FuncComp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times (FuncComp)</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}