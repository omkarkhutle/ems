import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#D99D81]">
      <div className="border-2 rounded-xl border-orange-600 p-20 bg-[#FFE8B6]">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="text-black outline-none bg-transparent border-2 border-orange-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-350"
            type="email"
            placeholder="you@example.com"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="text-black outline-none bg-transparent border-2 border-orange-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-350"
            type="password"
            placeholder="Enter your password"
          />
          <button className="mt-7 text-white border-none shadow-lg hover:bg-orange-700 focus:ring-2 focus:ring-orange-600 focus:outline-none font-semibold bg-orange-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
