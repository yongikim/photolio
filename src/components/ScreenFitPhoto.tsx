"use client"
import { Photo } from "@/lib/photo";
import Image from "next/image";

const getScreenFitSize = (photo: Photo): ({ width: number; height: number }) => {
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
  const { width: photoWidth, height: photoHeight } = photo;

  let width: number;
  let height: number;

  if (photoWidth >= photoHeight) {
    // modify the width first
    width = windowWidth;
    height = photoHeight * windowWidth / photoWidth;
    if (height > windowHeight) {
      // photo should still be smaller in height
      width = width * windowHeight / height;
      height = windowHeight;
    }
  } else {
    // modify the height first
    height = windowHeight;
    width = photoWidth * windowHeight / photoHeight;
    if (width > windowWidth) {
      // photo should still be smaller in width
      height = height * windowWidth / width;
      width = windowWidth;
    }
  }

  return {
    width, height
  }
}

export const ScreenFitPhoto = ({ photo }: { photo: Photo }) => {
  const { width, height } = getScreenFitSize(photo)
  const scale = .9;

  return (
    <>
      <Image
        src={photo.url}
        alt={photo.title}
        width={width * scale}
        height={height * scale}
      />
    </>
  );
}