import { FC } from "react";

interface UserData {
  username: string;
  role: string;
  lastLogin: string;
}

interface UserGreetingProps {
  userData: UserData;
}

export const UserGreeting: FC<UserGreetingProps> = ({ userData }) => {
  return (
    <div className="text-white">
      <p>Welcome back, {userData.username}!</p>
      <p className="text-sm text-gray-400">Role: {userData.role}</p>
      <p className="text-sm text-gray-400">Last login: {userData.lastLogin}</p>
    </div>
  );
};
