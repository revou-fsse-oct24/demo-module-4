import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

// Types
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoContextType {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  newTodoTitle: string;
  setNewTodoTitle: (title: string) => void;
  fetchTodos: () => Promise<void>;
  addTodo: () => Promise<void>;
  updateTodo: (id: number, completed: boolean) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
}

// Create context
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Provider props
interface TodoProviderProps {
  children: ReactNode;
}

// Provider component
export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");

  const fetchTodos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data.slice(0, 10));
    } catch (error) {
      setError("Error fetching todos");
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async () => {
    if (!newTodoTitle) return;

    setLoading(true);
    setError(null);
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
      const newTodo = {
        ...data,
        id: todos.length + 1,
      };

      setTodos([...todos, newTodo]);
      setNewTodoTitle("");
    } catch (error) {
      setError("Error adding todo");
      console.error("Error adding todo:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateTodo = async (id: number, completed: boolean) => {
    setLoading(true);
    setError(null);
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

      await response.json();
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
      );
    } catch (error) {
      setError("Error updating todo");
      console.error("Error updating todo:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setTodos(todos.filter((todo) => todo.id !== id));
      }
    } catch (error) {
      setError("Error deleting todo");
      console.error("Error deleting todo:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const value = {
    todos,
    loading,
    error,
    newTodoTitle,
    setNewTodoTitle,
    fetchTodos,
    addTodo,
    updateTodo,
    deleteTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

// Custom hook
export const useTodos = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};
