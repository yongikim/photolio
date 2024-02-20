"use client";

import { useAuth } from "@/contexts/auth";
import Link from "next/link";

export const LoginOrLogout = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  return isAuthenticated ? (
    <button
      onClick={() => {
        setIsAuthenticated(false);
      }}
    >
      Logout
    </button>
  ) : (
    <Link href="/login">Login</Link>
  );
};
