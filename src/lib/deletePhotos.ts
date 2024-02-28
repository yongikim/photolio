export const deletePhotos = async ({
  idToken,
  albumId,
  photoIds,
}: {
  idToken: string;
  albumId: string;
  photoIds: string[];
}) => {
  const res = await fetch("https://photolio-api.yongikim.com/photos", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify({ albumId, photoIds }),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }
};
