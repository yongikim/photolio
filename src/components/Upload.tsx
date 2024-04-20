"use client";

import revalidateAllPhotos from "@/app/actions/revalidateAllPhotos";
import { useAuth } from "@/contexts/auth";
import { uploadPhotos } from "@/lib/uploadPhotos";
import { useRef } from "react";
import { toast } from "sonner";

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
      toast("Uploading photos...");
      await uploadPhotos({ idToken, files });
      toast.success("Upload complete!");
      await revalidateAllPhotos();
    } catch (error) {
      toast.error("Error uploading photos");
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
