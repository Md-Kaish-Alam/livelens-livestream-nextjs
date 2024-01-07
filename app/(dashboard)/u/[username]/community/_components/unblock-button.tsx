"use client";

import { toast } from "sonner";
import { useTransition } from "react";

import { onUnblock } from "@/actions/block";
import { Button } from "@/components/ui/button";

interface UnBlockButtonProps {
  userId: string;
}

export const UnBlockButton = ({ userId }: UnBlockButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((res) => toast.success(`User ${res.blocked.username} unblocked.`))
        .catch(() => toast.error("Something went wrong"));
    })
  }

  return (
    <Button
      disabled={isPending}
      onClick={onClick}
      variant="link"
      size="sm"
      className="text-blue-500 w-full"
    >
      Unblock
    </Button>
  )
}
