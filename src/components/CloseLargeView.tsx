import { useLargeView } from "@/contexts/largeView";
import { GrClose } from "react-icons/gr";

export const CloseLargeView = () => {
  const { setPhoto } = useLargeView();

  const handleClick = () => {
    setPhoto(null);
  };

  return (
    <GrClose
      onClick={handleClick}
      className="h-6 w-6 cursor-pointer text-white"
    />
  );
};
