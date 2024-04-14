import { CgArrowsExpandRight } from "react-icons/cg";

export const Expand = ({ photoId }: { photoId: string }) => {
  return (
    <div className="absolute -top-8 right-14">
      <CgArrowsExpandRight
        onClick={() => {
          window.location.href = `/photos/${photoId}`;
        }}
        className="h-6 w-6 cursor-pointer"
      />
    </div>
  );
};
