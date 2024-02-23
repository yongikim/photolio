"use client";

import { useAuth } from "@/contexts/auth";

export const Logout = () => {
  const { isAuthenticated, signOut, authenticate } = useAuth();

  return (
    isAuthenticated && (
      <button
        onClick={async () => {
          await signOut();
          await authenticate();
        }}
      >
        Logout
      </button>
    )
  );
};
