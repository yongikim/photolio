"use server";

import { revalidateTag } from "next/cache";

export default function revalidateAllPhotos() {
  revalidateTag("photos");
}
