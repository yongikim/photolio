import Image from "next/image";
import { Upload } from "../components/upload";
import { Logout } from "../components/logout";

type GetPhotosResponse = {
  photos: {
    id: number;
    title: string;
    url: string;
    width: number;
    height: number;
  }[];
  meta: {
    total: number;
    limit: number;
    lastEvaluatedKey?: string;
  };
};

async function getPhotos(): Promise<GetPhotosResponse> {
  const res = await fetch("https://photolio-api.yongikim.com/photos");

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}

export default async function Home() {
  const data = await getPhotos();

  return (
    <main className="pt-8 min-h-screen pl-20 pr-20 pb-24">
      <div className="flex flex-row justify-end gap-8 h-10">
        <Upload />
        <Logout />
      </div>
      <div className="pt-16 flex flex-row flex-wrap items-start justify-center  gap-2">
        {data["photos"].map((photo) => {
          const height = 280;
          const width = (photo.width / photo.height) * height;
          return (
            <Image
              key={photo.id}
              src={photo.url}
              alt={photo.title || "Photo"}
              width={width}
              height={height}
              priority
            />
          );
        })}
      </div>
    </main>
  );
}
