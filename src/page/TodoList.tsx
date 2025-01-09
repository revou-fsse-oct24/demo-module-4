import React from "react";
import { useTodos } from "../context/TodoContext";

const TodoList: React.FC = () => {
  const {
    todos,
    loading,
    error,
    newTodoTitle,
    setNewTodoTitle,
    addTodo,
    updateTodo,
    deleteTodo,
  } = useTodos();

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] p-4 text-white">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] p-4 text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e] p-4">
      <div className="max-w-md mx-auto">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-grow px-4 py-2 bg-black text-white rounded-md placeholder-gray-400 border border-gray-700"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new todo"
          />
          <button
            className="px-6 py-2 text-white bg-[#6366f1] rounded-md hover:bg-[#4f46e5] font-medium"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-4 bg-white bg-opacity-5 rounded-md border border-gray-700"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => updateTodo(todo.id, e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <span
                  className={`text-white text-sm ${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.title}
                </span>
              </div>
              <button
                className="px-4 py-1 text-white bg-red-600 rounded-md hover:bg-red-700 text-sm"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
