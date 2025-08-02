import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/login", {
      email,
      name,
    });
    localStorage.setItem("user", JSON.stringify(res.data));
    navigate("/dashboard");
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">
          Login Portal
        </h1>

        <form onSubmit={handleSubmit} className="w-full">
          <input
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 cursor-pointer"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-gray-600 text-sm">
          <strong>Use this dummy users to login</strong>
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>Ravi:</strong>ravi@example.com
            </li>
            <li>
              <strong>Aisha:</strong>aisha@example.com
            </li>
            <li>
              <strong>Neha:</strong>neha@example.com
            </li>
            <li>
              <strong>Tina:</strong>tina@example.com
            </li>
          </ul>
          <p className="mt-4">
            Want to see more static users? check the full list in
            <a
              href="https://github.com/Sam200563/Intern-portal/blob/main/server/users.json"
              target="_blank"
              rel="noppener noreferrer"
              className="text-blue-600 underline"
            >
              Github Repo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
