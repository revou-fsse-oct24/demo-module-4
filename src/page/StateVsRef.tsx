import React, { useRef, useState, ChangeEvent } from "react";

const StateVsRefExample = () => {
  // State values (will cause re-renders)
  const [stateValue, setStateValue] = useState<string>("");
  const [renderCount, setRenderCount] = useState<number>(0);
  console.log("stateValue", stateValue);
  console.log("renderCount", renderCount);

  // Ref values (won't cause re-renders)
  const refValue = useRef<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Update render count on each render
  React.useEffect(() => {
    setRenderCount((prev) => prev + 1);
  }, [stateValue]); // Only count re-renders from state changes

  const handleStateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStateValue(e.target.value);
  };

  const handleRefChange = (e: ChangeEvent<HTMLInputElement>) => {
    refValue.current = e.target.value;
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-xl text-gray-100">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">
          useRef vs useState Example
        </h1>
        <p className="text-sm text-gray-400 mt-2">
          Number of renders:{" "}
          <span className="text-blue-400 font-bold">{renderCount}</span>
        </p>
      </div>

      {/* State Input Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-400 mb-4">
          useState Form
        </h2>
        <div className="flex gap-4 mb-2">
          <input
            type="text"
            value={stateValue}
            onChange={handleStateChange}
            placeholder="Type to trigger re-render..."
            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <p className="text-sm text-gray-400">
          This input uses useState. Watch the render count increase as you type!
        </p>
        <div className="mt-2 p-3 bg-gray-800 rounded-lg border border-gray-700">
          <p>
            State Value:{" "}
            <span className="font-medium text-white">
              {stateValue || "(empty)"}
            </span>
          </p>
        </div>
      </div>

      {/* Ref Input Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-400 mb-4">
          useRef Form
        </h2>
        <div className="flex gap-4 mb-2">
          <input
            ref={inputRef}
            type="text"
            onChange={handleRefChange}
            placeholder="Type without re-renders..."
            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={focusInput}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Focus
          </button>
        </div>
        <p className="text-sm text-gray-400">
          This input uses useRef. Type here and notice the render count doesn't
          change!
        </p>
        <div className="mt-2 p-3 bg-gray-800 rounded-lg border border-gray-700">
          <p>
            Ref Value:{" "}
            <span className="font-medium text-white">
              {refValue.current || "(empty)"}
            </span>
          </p>
        </div>
      </div>

      {/* Learning Points */}
      <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
        <h3 className="text-lg font-medium text-white mb-2">
          Key Differences:
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
          <li>useState triggers a re-render when the value changes</li>
          <li>useRef updates happen without triggering re-renders</li>
          <li>useState is for values that should update the UI</li>
          <li>
            useRef is for values that should persist without updating the UI
          </li>
          <li>Both can store values, but they serve different purposes</li>
        </ul>
      </div>

      {/* Test Instructions */}
      <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <h3 className="text-lg font-medium text-white mb-2">Try This:</h3>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-300">
          <li>
            Type in the useState input and watch the render count increase
          </li>
          <li>
            Type in the useRef input and notice the render count stays the same
          </li>
          <li>Both store values, but only useState triggers UI updates</li>
          <li>
            Click the Focus button to see useRef's DOM manipulation capability
          </li>
        </ol>
      </div>
    </div>
  );
};

export default StateVsRefExample;
