"use client";
import { useAuth } from "@/contexts/auth";
import { usePhotoSelection } from "@/contexts/photoSelection";

export const Select = () => {
  const { isAuthenticated } = useAuth();
  const { enabled, enable, disable } = usePhotoSelection();
  const handleClick = () => {
    if (enabled) {
      disable();
    } else {
      enable();
    }
  };
  const buttonText = enabled ? "Cancel" : "Select";

  return isAuthenticated && <button onClick={handleClick}>{buttonText}</button>;
};
