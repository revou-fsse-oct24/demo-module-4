import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  console.log("email", email);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission
    console.log("Login form submitted");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold text-white text-center">
          Welcome Back
        </h2>
        <p className="text-center text-gray-300">Please sign in to continue</p>
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={handleSubmit} // Pass the handleSubmit function
        />
      </div>
    </div>
  );
};

export default Login;
