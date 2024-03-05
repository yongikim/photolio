"use client";

import revalidateAllPhotos from "@/app/actions/revalidateAllPhotos";
import { useAuth } from "@/contexts/auth";
import { uploadPhotos } from "@/lib/uploadPhotos";
import { useRef } from "react";

export const Upload = () => {
  const { isAuthenticated, idToken } = useAuth();
  const hiddenFileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    try {
      await uploadPhotos({ idToken, files });
      await revalidateAllPhotos();
      location.reload();
    } catch (error) {
      console.error("Error uploading photos", error);
    }
  };

  return (
    isAuthenticated && (
      <>
        <input
          type="file"
          accept="image/jpeg"
          style={{ display: "none" }}
          ref={hiddenFileInputRef}
          onChange={handleFileChange}
          multiple
        />
        <button onClick={handleClick}>Upload</button>
      </>
    )
  );
};
