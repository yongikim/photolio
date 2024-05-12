import Link from "next/link";
import { MdOutlineOpenInNew } from "react-icons/md";

export const OpenInNew = ({ photoId }: { photoId: string }) => {
  const photoUrl = `/photos/${photoId}`;
  return (
    <Link href={photoUrl} target="_blank">
      <MdOutlineOpenInNew
        className="h-6 w-6 cursor-pointer text-white"
      />
    </Link>
  );
};
