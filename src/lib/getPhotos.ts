import { Photo } from "./photo";

type GetPhotosResponse = {
  photos: Photo[];
  meta: {
    total: number;
    limit: number;
    lastEvaluatedKey?: string;
  };
};

export async function getPhotos(): Promise<GetPhotosResponse> {
  const res = await fetch("https://photolio-api.yongikim.com/photos", {
    next: { tags: ["get_photos"] },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}
