"use client";
import Image from "next/image";
import { useLargeView } from "@/contexts/largeView";
import { Photo } from "@/lib/photo";

function skeleton(w: number, h: number) {
  return `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#d1d5db" offset="20%" />
          <stop stop-color="#f3f4f6" offset="50%" />
          <stop stop-color="#d1d5db" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#d1d5db" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
    </svg>`;
}

function toBase64(str: string) {
  if (typeof window === "undefined") {
    return Buffer.from(str).toString("base64");
  } else {
    return window.btoa(str);
  }
}

const getHeightAndWidth = ({
  photo,
  scale = 0.9,
}: {
  photo: Photo;
  scale: number;
}) => {
  const height = scale * window.innerHeight;
  const width = (photo.width / photo.height) * height;

  return { height, width };
};

export const LargeView = () => {
  const { photo, setPhoto } = useLargeView();

  if (!photo) return null;

  const { height, width } = photo
    ? getHeightAndWidth({ photo, scale: 0.9 })
    : { height: 0, width: 0 };

  return (
    photo && (
      <div
        className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
        onClick={() => setPhoto(null)}
      >
        <Image
          key={photo?.url}
          src={photo?.url}
          alt="Large view"
          height={height}
          width={width}
          className="max-h-full max-w-full"
          placeholder={`data:image/svg+xml;base64,${toBase64(
            skeleton(width * 0.9, height * 0.9)
          )}`}
        />
      </div>
    )
  );
};
