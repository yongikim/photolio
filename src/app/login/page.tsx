"use client";
import { useAuth } from "@/contexts/auth";
import { useState } from "react";

export default function LoginPage() {
  const { isAuthenticated, signIn } = useAuth();

  if (isAuthenticated) {
    location.href = "/";
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const { isSignedIn } = await signIn({ username, password });
      if (isSignedIn) {
        location.href = "/";
      }
    } catch {
      console.error("Error signing in");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 border border-gray-300 rounded-md text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 border border-gray-300 rounded-md text-black"
        />
        <button
          onClick={() => {
            handleLogin();
          }}
          className="p-3 bg-blue-500 text-white rounded-md"
        >
          Login
        </button>
      </div>
    </main>
  );
}
