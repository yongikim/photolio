"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type PhotoSelectionContextType = {
  enabled: boolean;
  selectedPhotos: string[];
  addPhoto: (photoId: string) => void;
  removePhoto: (photoId: string) => void;
  clearPhotos: () => void;
  enable: () => void;
  disable: () => void;
};

const PhotoSelectionContext = createContext<PhotoSelectionContextType>({
  enabled: false,
  selectedPhotos: [],
  addPhoto: () => {},
  removePhoto: () => {},
  clearPhotos: () => {},
  enable: () => {},
  disable: () => {},
});

export const PhotoSelectionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [enabled, setEnabled] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);

  const addPhoto = (photoId: string) => {
    setSelectedPhotos([...selectedPhotos, photoId]);
  };
  const removePhoto = (photoId: string) => {
    setSelectedPhotos(selectedPhotos.filter((id) => id !== photoId));
  };
  const clearPhotos = () => {
    setSelectedPhotos([]);
  };
  const enable = () => {
    setEnabled(true);
    clearPhotos();
  };
  const disable = () => {
    setEnabled(false);
    clearPhotos();
  };

  return (
    <PhotoSelectionContext.Provider
      value={{
        enabled,
        selectedPhotos,
        addPhoto,
        removePhoto,
        clearPhotos,
        enable,
        disable,
      }}
    >
      {children}
    </PhotoSelectionContext.Provider>
  );
};

export const usePhotoSelection = () => {
  return useContext(PhotoSelectionContext);
};
