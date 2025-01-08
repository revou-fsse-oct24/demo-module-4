import { FC } from "react";
import { useUser } from "../context/UserContext";

export const UserGreeting: FC = () => {
  const { userData } = useUser();

  if (!userData) {
    return null;
  }

  return (
    <div className="text-white">
      <p>Welcome back, {userData.username}!</p>
      <p className="text-sm text-gray-400">Role: {userData.role}</p>
      <p className="text-sm text-gray-400">Last login: {userData.lastLogin}</p>
    </div>
  );
};
