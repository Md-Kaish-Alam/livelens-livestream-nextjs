import { StreamPlayerSkeleton } from "@/components/stream/stream-player";
import { Stream } from "stream";

const CreatorLoading = () => {
  return (
    <div className="h-full">
      <StreamPlayerSkeleton />
    </div>
  );
};

export default CreatorLoading;
