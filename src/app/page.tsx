import { Upload } from "../components/Upload";
import { Logout } from "../components/Logout";
import { PhotoCard } from "@/components/PhotoCard";
import { Select } from "@/components/Select";
import { Delete } from "@/components/Delete";
import { getPhotos } from "@/lib/getPhotos";

export default async function Home() {
  const data = await getPhotos();

  return (
    <main className="pt-8 min-h-screen pl-20 pr-20 pb-24">
      <div className="flex flex-row justify-end gap-8 h-10">
        <Delete />
        <Select />
        <Upload />
        <Logout />
      </div>
      <div className="pt-16 flex flex-row flex-wrap items-start justify-center gap-2">
        {data["photos"].map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </main>
  );
}
