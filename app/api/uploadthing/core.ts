import { metadata } from "./../../layout";
import { createUploadthing, type FileRouter } from "uploadthing/next";

import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";

const f = createUploadthing();

export const ourFileRouter = {
  thumbnailUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const self = await getSelf();

      return { user: self };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await db.stream.update({
        where: {
          userId: metadata.user.id,
        },
        data: {
          thumbnail: file.url,
        },
      }); 
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
