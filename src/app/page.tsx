import Image from "next/image";
import { Upload } from "./upload";
import { LoginOrLogout } from "./logout";

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
    lastEvaluatedKey: string;
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
    <main className="pt-16 pl-16 pr-16 pb-24">
      <div className="flex flex-row justify-end gap-14">
        <Upload />
        <LoginOrLogout />
      </div>
      <div className="pt-24 flex flex-row flex-wrap items-start justify-center  gap-14">
        {data["photos"].map((photo) => {
          const height = 300;
          const width = (photo.width / photo.height) * height;
          return (
            <Image
              unoptimized
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
