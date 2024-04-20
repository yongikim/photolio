"use client";
import revalidateAllPhotos from "@/app/actions/revalidateAllPhotos";
import { useAuth } from "@/contexts/auth";
import { usePhotoSelection } from "@/contexts/photoSelection";
import { deletePhotos } from "@/lib/deletePhotos";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

export const Delete = () => {
  const { isAuthenticated } = useAuth();
  const { enabled, disable, selectedPhotos } = usePhotoSelection();
  const { idToken } = useAuth();

  const albumId = "all";

  const handleClick = async () => {
    try {
      toast("Deleting photos...");
      await deletePhotos({ idToken, albumId, photoIds: selectedPhotos });
      toast.success("Photos deleted!");
      disable();
      await revalidateAllPhotos();
    } catch (error) {
      toast.error("Error deleting photos");
    }
  };

  return (
    isAuthenticated &&
    enabled &&
    selectedPhotos.length > 0 && (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button>Delete</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete these photos?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action is irreversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleClick}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  );
};
