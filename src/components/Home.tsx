import { FC } from "react";
import { WelcomeSection } from "./WelcomeSection";

interface UserData {
  username: string;
  role: string;
  lastLogin: string;
}

const Home: FC = () => {
  const userData: UserData = {
    username: "John",
    role: "user",
    lastLogin: "2024-01-08",
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Ini halaman Home</h1>
      <WelcomeSection userData={userData} />
    </div>
  );
};

export default Home;
