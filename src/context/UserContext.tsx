import { createContext, ReactNode, FC, useContext } from "react";

// Masukin data structure
interface UserData {
  username: string;
  role: string;
  lastLogin: string;
}

// Masukan context data structure
interface UserContextType {
  userData: UserData | null;
}

// buat context initial value
const UserContext = createContext<UserContextType | null>(null);

// buat provider componentnya
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const userData: UserData = {
    username: "mr bean",
    role: "user",
    lastLogin: "2024-01-08",
  };

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within UserProvider ");
  }

  return context;
};
