"use client";

import { useAuth } from "@/contexts/auth";
import { useRef } from "react";

const convertBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export const Upload = () => {
  const { isAuthenticated, idToken } = useAuth();
  const hiddenFileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const encoded = await Promise.all(
      Array.from(files).map((file) => convertBase64(file))
    );

    const photos = encoded.map((base64) => ({
      imageBase64: base64,
    }));

    const res = await fetch("https://photolio-api.yongikim.com/photos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({ photos }),
    });

    if (res.ok) {
      location.reload();
    } else {
      console.error("Error uploading photos");
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
