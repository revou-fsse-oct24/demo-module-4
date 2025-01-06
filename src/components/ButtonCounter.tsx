import React from "react";

interface CounterProps {
  text: string;
  value: number;
  onClickProps: () => void;
}

// button reusable ini akan menerima text dan juga value + nya
const ButtonCounter: React.FC<CounterProps> = ({
  text,
  value,
  onClickProps,
}) => {
  console.log("props button counter", text, value);
  return (
    <div>
      <button onClick={onClickProps}>{text}</button>
    </div>
  );
};

export default ButtonCounter;
