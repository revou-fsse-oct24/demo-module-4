import { useState } from "react";
import ButtonCounter from "./ButtonCounter";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("console", count);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>

      <ButtonCounter
        text="Increment"
        value={count}
        onClickProps={handleClick}
      />
      <ButtonCounter text="Decrement" value={-1} onClickProps={handleClick} />
      <ButtonCounter
        text="Increment 10"
        value={10}
        onClickProps={handleClick}
      />
      <ButtonCounter
        text="Decrement 10"
        value={-10}
        onClickProps={handleClick}
      />
    </div>
  );
};

export default Counter;
