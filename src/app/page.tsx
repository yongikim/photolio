import { PhotoCard } from "@/components/PhotoCard";
import { getPhotos } from "@/lib/getPhotos";
import { LargeView } from "@/components/LargeView";
import { Operations } from "@/components/Operations";

export default async function Home() {
  const data = await getPhotos();

  return (
    <>
      <Operations />
      <div className="flex flex-row flex-wrap items-start justify-center gap-2">
        {data["photos"].map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
        <LargeView />
      </div>
    </>
  );
}
