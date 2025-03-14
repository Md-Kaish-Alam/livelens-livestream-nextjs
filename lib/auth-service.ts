import { currentUser } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export const getSelf = async () => {
  const self = await currentUser();

  if (!self || !self.username) {
    throw new Error("Unauthorized User");
  }

  const user = await db.user.findUnique({
    where: {
      externalUserId: self.id,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const getSelfByUsername = async (username: string) => {
  const self = await currentUser();

  // console.log(self?.username);

  if (!self || !self.username) {
    throw new Error("Unauthorized User");
  }

  const user = await db.user.findUnique({
    where: {
      username: self.username,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (self.username !== user.username) {
    throw new Error("Unauthenticated User");
  }

  return user;
};
