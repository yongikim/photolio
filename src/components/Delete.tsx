"use client";
import { useAuth } from "@/contexts/auth";
import { usePhotoSelection } from "@/contexts/photoSelection";
import { deletePhotos } from "@/lib/deletePhotos";

export const Delete = () => {
  const { enabled, disable, selectedPhotos } = usePhotoSelection();
  const { idToken } = useAuth();

  const albumId = "all";

  const handleClick = async () => {
    if (confirm("Are you sure you want to delete these photos?")) {
      try {
        await deletePhotos({ idToken, albumId, photoIds: selectedPhotos });
        disable();
        location.reload();
      } catch (error) {
        console.error("Error deleting photos", error);
      }
    }
  };

  return (
    enabled &&
    selectedPhotos.length > 0 && <button onClick={handleClick}>Delete</button>
  );
};
