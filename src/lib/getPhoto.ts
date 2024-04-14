import { Photo } from "./photo";

type GetPhotoResponse = {
  photos: Photo[];
  meta: {
    total: number;
    limit: number;
    lastEvaluatedKey?: string;
  };
};

export async function getPhoto(id: string): Promise<GetPhotoResponse> {
  const res = await fetch(`https://photolio-api.yongikim.com/photos/${id}`, {
    next: { tags: [`photos/${id}`] },
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}
