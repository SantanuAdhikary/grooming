import React, { useState } from "react";

const UsestateExample = () => {
  let [count, setCount] = useState(0);

  let [userName, setUserName] = useState("santanu");

  let value = 0;

  let increase = () => {
    value++;
    console.log(value);
  };

  let increment = () => {
    setCount((count = count + 1));
  };

  return (
    <>
      <h2> usestate example</h2>

      <h3> {value} </h3>

      <button onClick={increase}>increase</button>

      <h2> {count}</h2>

      <button onClick={increment}> increment</button>
      <button onClick={() => setCount((count = count - 1))}> decrement</button>

      <h3> {userName}</h3>

      <button onClick={() => setUserName("adhikary")}>changeName</button>
    </>
  );
};

export default UsestateExample;
