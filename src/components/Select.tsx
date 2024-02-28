"use client";
import { usePhotoSelection } from "@/contexts/photoSelection";

export const Select = () => {
  const { enabled, enable, disable } = usePhotoSelection();
  const handleClick = () => {
    if (enabled) {
      disable();
    } else {
      enable();
    }
  };
  const buttonText = enabled ? "Cancel" : "Select";

  return <button onClick={handleClick}>{buttonText}</button>;
};
