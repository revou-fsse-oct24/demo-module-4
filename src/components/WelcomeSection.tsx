import { FC } from "react";
import { UserGreeting } from "./UserGreeting";

export const WelcomeSection: FC = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <UserGreeting />
    </div>
  );
};
