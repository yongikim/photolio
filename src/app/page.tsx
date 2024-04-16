import { Upload } from "../components/Upload";
import { Logout } from "../components/Logout";
import { PhotoCard } from "@/components/PhotoCard";
import { Select } from "@/components/Select";
import { Delete } from "@/components/Delete";
import { getPhotos } from "@/lib/getPhotos";
import { LargeView } from "@/components/LargeView";
import { Operations } from "@/components/Operations";

export default async function Home() {
  const data = await getPhotos();

  return (
    <main className="min-h-screen pl-2 pr-2 pt-6 md:pt-10 md:pl-20 md:pr-20 pb-24">
      <Operations />
      <div className="flex flex-row flex-wrap items-start justify-center gap-2">
        {data["photos"].map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
        <LargeView />
      </div>
    </main>
  );
}
