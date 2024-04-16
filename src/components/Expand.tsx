import { CgArrowsExpandRight } from "react-icons/cg";

export const Expand = ({ photoId }: { photoId: string }) => {
  return (
    <CgArrowsExpandRight
      onClick={() => {
        window.location.href = `/photos/${photoId}`;
      }}
      className="h-6 w-6 cursor-pointer text-white"
    />
  );
};
