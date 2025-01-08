import { FC } from "react";
import { WelcomeSection } from "./WelcomeSection";

const Home: FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Ini halaman Home</h1>
      <WelcomeSection />
    </div>
  );
};

export default Home;
