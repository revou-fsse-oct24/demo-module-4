import React from "react";
import "../App.css";

interface GreetingProps {
  name: string;
}

const Greetings: React.FC<GreetingProps> = ({ name }) => {
  return (
    <h1 className="red-text bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Hello, {name}!
    </h1>
  );
};

export default Greetings;
