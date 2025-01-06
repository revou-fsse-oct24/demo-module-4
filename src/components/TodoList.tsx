import React, { useState, useEffect } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    console.log("Current todos:", todos);
  }, [todos]);

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      console.log("Fetched todos:", data);
      setTodos(data.slice(0, 10));
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async () => {
    if (!newTodoTitle) return;

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newTodoTitle,
            completed: false,
            userId: 1,
          }),
        }
      );

      const data = await response.json();
      console.log("Added todo:", data);

      const newTodo = {
        ...data,
        id: todos.length + 1,
      };

      setTodos([...todos, newTodo]);
      setNewTodoTitle("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const updateTodo = async (id: number, completed: boolean) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            completed,
          }),
        }
      );

      const data = await response.json();
      console.log("Updated todo:", data);

      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Deleted todo with id:", id);
        setTodos(todos.filter((todo) => todo.id !== id));
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

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
