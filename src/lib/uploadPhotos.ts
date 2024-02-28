const convertFileToBase64 = (
  file: File
): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const postPhotos = async ({
  idToken,
  photos,
}: {
  idToken: string;
  photos: { imageBase64: string | ArrayBuffer | null; photoTitle?: string }[];
}) => {
  const res = await fetch("https://photolio-api.yongikim.com/photos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify({ photos }),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const uploadPhotos = async ({
  idToken,
  files,
}: {
  idToken: string;
  files: FileList;
}) => {
  const encoded = await Promise.all(
    Array.from(files).map((file) => convertFileToBase64(file))
  );

  const photos = encoded.map((base64) => ({
    imageBase64: base64,
  }));

  await postPhotos({ idToken, photos });
};
