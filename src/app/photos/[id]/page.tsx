import { ScreenFitPhoto } from "@/components/ScreenFitPhoto";
import { getPhoto } from "@/lib/getPhoto";

export default async function Photo({ params }: { params: { id: string } }) {
  const data = await getPhoto(params.id);
  const photo = data.photos[0];

  return (
    <ScreenFitPhoto photo={photo}/>
  );
}
