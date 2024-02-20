import Image from "next/image";

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
    <main className="flex flex-row flex-wrap items-start justify-start p-24 gap-10">
      {data["photos"].map((photo) => {
        const width = Math.min(photo.width, 300);
        const height = (photo.height / photo.width) * width;
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
    </main>
  );
}
