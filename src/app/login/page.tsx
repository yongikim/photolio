"use client";
import { useAuth } from "@/contexts/auth";
import Link from "next/link";

export default function LoginPage() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
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
      <Link href="/">Home</Link>
    </main>
  );
}
