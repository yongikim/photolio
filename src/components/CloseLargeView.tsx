import { useLargeView } from "@/contexts/largeView";
import { GrClose } from "react-icons/gr";

export const CloseLargeView = () => {
  const { setPhoto } = useLargeView();

  const handleClick = () => {
    setPhoto(null);
  };

  return (
    <div className="absolute -top-8 right-2">
      <GrClose onClick={handleClick} className="h-6 w-6 cursor-pointer" />
    </div>
  );
};
