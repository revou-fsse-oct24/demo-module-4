import { FC } from "react";
import { UserGreeting } from "./UserGreeting";

interface UserData {
  username: string;
  role: string;
  lastLogin: string;
}

interface WelcomeSectionProps {
  userData: UserData;
}

export const WelcomeSection: FC<WelcomeSectionProps> = ({ userData }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <UserGreeting userData={userData} />
    </div>
  );
};
