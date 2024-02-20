"use client";
import { AuthContext, useAuth } from "@/contexts/auth";

export default function LoginPage() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  console.log("isAuthenticated", isAuthenticated);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Login</h1>
      {isAuthenticated && <p>you are already logged in.</p>}
      <button
        onClick={() => {
          console.log("login");
          setIsAuthenticated(true);
        }}
      >
        Login
      </button>
    </main>
  );
}
