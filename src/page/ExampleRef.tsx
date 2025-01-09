import React, { useRef, useState, ChangeEvent } from "react";

const ExampleRef = () => {
  // Properly type the ref for HTMLInputElement
  const inputRef = useRef<HTMLInputElement>(null);
  const prevValueRef = useRef<string>("");
  const [value, setValue] = useState<string>("");

  const handleFocus = () => {
    // Now TypeScript knows inputRef.current might be null
    inputRef.current?.focus();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    prevValueRef.current = value;
    setValue(e.target.value);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-xl text-gray-100">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">useRef Example</h1>
      </div>

      {/* Input Section */}
      <div className="mb-8">
        <div className="flex gap-4 mb-2">
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Type something..."
            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleFocus}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Focus Input
          </button>
        </div>
        <p className="text-sm text-gray-400">
          Click the button to focus the input field. This demonstrates how
          useRef can reference DOM elements.
        </p>
      </div>

      {/* Value Display Section */}
      <div className="mb-8">
        <div className="space-y-2 mb-2">
          <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
            <p>
              Current Value:{" "}
              <span className="font-medium text-white">
                {value || "(empty)"}
              </span>
            </p>
          </div>
          <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
            <p>
              Previous Value:{" "}
              <span className="font-medium text-white">
                {prevValueRef.current || "(empty)"}
              </span>
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-400">
          Type in the input to see how useRef keeps track of the previous value
          between renders.
        </p>
      </div>

      {/* Learning Points */}
      <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
        <h3 className="text-lg font-medium text-white mb-2">
          Key Learning Points:
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
          <li>
            useRef creates a mutable reference that persists across renders
          </li>
          <li>
            It can be used to reference DOM elements (like focusing an input)
          </li>
          <li>Unlike useState, updating a ref doesn't trigger a re-render</li>
          <li>The ref value is accessed through the .current property</li>
        </ul>
      </div>
    </div>
  );
};

export default ExampleRef;
