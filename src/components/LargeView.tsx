"use client";
import Image from "next/image";
import { useLargeView } from "@/contexts/largeView";
import { Photo } from "@/lib/photo";
import { Expand } from "./Expand";
import { useEffect, useRef } from "react";
import { CloseLargeView } from "./CloseLargeView";
import { skeleton } from "@/lib/skeleton";
import { toBase64 } from "@/lib/toBase64";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

const getHeightAndWidth = ({
  photo,
  scale = 0.9,
}: {
  photo: Photo;
  scale: number;
}) => {
  let height = scale * window.innerHeight;
  let width = (photo.width / photo.height) * height;

  return { height, width };
};

export const LargeView = () => {
  const { photo, setPhoto } = useLargeView();
  const scale = 0.85;

  const { height, width } = photo
    ? getHeightAndWidth({ photo, scale })
    : { height: 0, width: 0 };

  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const handleAllClick = (e: MouseEvent) => {
      if (!el?.contains(e.target as Node)) {
        // When outside of the element is clicked
        setPhoto(null);
      }
    };

    document.addEventListener("click", handleAllClick);

    return () => {
      document.removeEventListener("click", handleAllClick);
    };
  }, [imageRef, photo]);

  const placeholder: PlaceholderValue = `data:image/svg+xml;base64,${toBase64(
    skeleton(width * scale, height * scale)
  )}`;

  return (
    photo && (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
        <div className="relative">
          <div className="absolute -top-8 right-14">
            <Expand photoId={photo.id} />
          </div>
          <div className="absolute -top-8 right-2">
            <CloseLargeView />
          </div>
          <div className="border-8 border-white">
            <Image
              ref={imageRef}
              key={photo?.url}
              src={photo?.url}
              alt="Large view"
              height={height}
              width={width}
              className="max-h-full max-w-full"
              placeholder={placeholder}
            />
          </div>
        </div>
      </div>
    )
  );
};
