import { createContext, useContext, FC, ReactNode } from "react";

// Define the user data structure
interface UserData {
  username: string;
  role: string;
  lastLogin: string;
}

// Define the context structure
interface UserContextType {
  userData: UserData | null;
}

// Create context with initial value
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const userData: UserData = {
    username: "John",
    role: "user",
    lastLogin: "2024-01-08",
  };

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
