import React, { useState, useCallback } from "react";

// Child component that receives a callback function
interface ChildProps {
  onClick: () => void;
  label: string;
}

const Child = React.memo(({ onClick, label }: ChildProps) => {
  console.log(`${label} Child component rendered`);
  return (
    <div className="p-3 bg-gray-800 rounded-lg border border-gray-700 mb-2">
      <button
        onClick={onClick}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {label} Button
      </button>
      <p className="text-sm text-gray-400 mt-2">
        Check console to see when this component renders
      </p>
    </div>
  );
});

const ExampleCallback = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  // Memoized callback
  const memoizedHandleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // Empty dependency array since we're using the prev value

  // Non-memoized callback
  const nonMemoizedHandleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-xl text-gray-100">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">useCallback Example</h1>
      </div>

      {/* Input Section */}
      <div className="mb-8">
        <div className="flex gap-4 mb-2">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Type something..."
            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <p className="text-sm text-gray-400">
          Type in this input to trigger re-renders. Watch the console to see
          which child components re-render.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="mb-8">
        <Child onClick={memoizedHandleClick} label="Memoized" />
        <Child onClick={nonMemoizedHandleClick} label="Non-Memoized" />
        <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
          <p>
            Count: <span className="font-medium text-white">{count}</span>
          </p>
        </div>
      </div>

      {/* Learning Points */}
      <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
        <h3 className="text-lg font-medium text-white mb-2">
          Key Learning Points:
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
          <li>
            useCallback memoizes function definitions to prevent unnecessary
            re-renders
          </li>
          <li>
            The memoized button only re-renders when its dependencies change
          </li>
          <li>The non-memoized button re-renders on every parent update</li>
          <li>React.memo prevents re-renders if props haven't changed</li>
          <li>Open the console to see the rendering behavior in action</li>
        </ul>
      </div>

      {/* Visual Demonstration */}
      <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <h3 className="text-lg font-medium text-white mb-2">Try This:</h3>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-300">
          <li>Type in the input field above</li>
          <li>
            Notice in the console that only the Non-Memoized component
            re-renders
          </li>
          <li>Click both buttons to increment the counter</li>
          <li>
            Both achieve the same result, but with different performance
            characteristics
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ExampleCallback;
