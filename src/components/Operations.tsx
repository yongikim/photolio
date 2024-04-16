"use client";
import { useAuth } from "@/contexts/auth";
import { Delete } from "./Delete";
import { Logout } from "./Logout";
import { Select } from "./Select";
import { Upload } from "./Upload";

export const Operations = () => {
  const { isAuthenticated } = useAuth();

  return (
    isAuthenticated && (
      <div className="flex flex-row justify-end gap-8 h-10">
        <Delete />
        <Select />
        <Upload />
        <Logout />
      </div>
    )
  );
};
