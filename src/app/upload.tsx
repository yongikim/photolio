"use client";

import { useAuth } from "@/contexts/auth";

export const Upload = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated && <button>Upload</button>;
};
