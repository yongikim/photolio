"use client";
import revalidateAllPhotos from "@/app/actions/revalidateAllPhotos";
import { useAuth } from "@/contexts/auth";
import { usePhotoSelection } from "@/contexts/photoSelection";
import { deletePhotos } from "@/lib/deletePhotos";
import { revalidateTag } from "next/cache";

export const Delete = () => {
  const { isAuthenticated } = useAuth();
  const { enabled, disable, selectedPhotos } = usePhotoSelection();
  const { idToken } = useAuth();

  const albumId = "all";

  const handleClick = async () => {
    if (confirm("Are you sure you want to delete these photos?")) {
      try {
        await deletePhotos({ idToken, albumId, photoIds: selectedPhotos });
        disable();
        revalidateAllPhotos();
        location.reload();
      } catch (error) {
        console.error("Error deleting photos", error);
      }
    }
  };

  return (
    isAuthenticated &&
    enabled &&
    selectedPhotos.length > 0 && <button onClick={handleClick}>Delete</button>
  );
};
