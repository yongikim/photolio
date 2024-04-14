"use client";
import Image from "next/image";
import { Photo } from "@/lib/photo";
import { usePhotoSelection } from "@/contexts/photoSelection";
import { CheckMark } from "./CheckMark";
import { useLargeView } from "@/contexts/largeView";

type Props = {
  photo: Photo;
};

export const PhotoCard = ({ photo }: Props) => {
  const height = 280;
  const width = (photo.width / photo.height) * height;

  const { selectedPhotos, addPhoto, removePhoto, enabled } =
    usePhotoSelection();

  const { setPhoto: setPhotoForLargeView } = useLargeView();

  const selected = selectedPhotos.includes(photo.id);

  const handleSelection = () => {
    if (selected) {
      removePhoto(photo.id);
    } else {
      addPhoto(photo.id);
    }
  };

  const handleView = () => {
    setPhotoForLargeView(photo);
  };

  const handleClick = enabled ? handleSelection : handleView;

  return (
    <div className="relative">
      {selected && <CheckMark />}
      <Image
        className={`hover:opacity-60 duration-300 hover:cursor-pointer ${
          selected && "opacity-60"
        }`}
        key={photo.id}
        src={photo.url}
        alt={photo.title || "Photo"}
        width={width}
        height={height}
        onClick={handleClick}
        priority
      />
    </div>
  );
};
