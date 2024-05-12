import { MdOutlineOpenInNew } from "react-icons/md";

export const OpenInNew = ({ photoId }: { photoId: string }) => {
  return (
    <MdOutlineOpenInNew
      onClick={() => {
        open(`/photos/${photoId}`);
      }}
      className="h-6 w-6 cursor-pointer text-white"
    />
  );
};
