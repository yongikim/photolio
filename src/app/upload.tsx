"use client";

import { useAuth } from "@/contexts/auth";

export const Upload = () => {
  const { isAuthenticated } = useAuth();

  return <div>{isAuthenticated && <h1>Upload</h1>}</div>;
};
