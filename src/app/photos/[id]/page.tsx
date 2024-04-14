import { getPhoto } from "@/lib/getPhoto";
import Image from "next/image";

export default async function Photo({ params }: { params: { id: string } }) {
  const data = await getPhoto(params.id);
  const photo = data.photos[0];

  return (
    <>
      <Image
        src={photo.url}
        alt={photo.title}
        width={photo.width}
        height={photo.height}
      />
    </>
  );
}
