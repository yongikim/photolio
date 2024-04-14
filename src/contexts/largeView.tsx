"use client";
import { Photo } from "@/lib/photo";
import { ReactNode, createContext, useContext, useState } from "react";

type LargeViewContextType = {
  photo: Photo | null;
  setPhoto: (photo: Photo | null) => void;
};

const LargeViewContext = createContext<LargeViewContextType>({
  photo: null,
  setPhoto: () => {},
});

export const LargeViewProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [photo, setPhoto] = useState<Photo | null>(null);

  return (
    <LargeViewContext.Provider value={{ photo, setPhoto }}>
      {children}
    </LargeViewContext.Provider>
  );
};

export const useLargeView = () => {
  return useContext(LargeViewContext);
};
