import videos from "../data/videos";
import VideoCard from "./VideoCard";

function VideoGrid() {
  return (
    <section className="video-grid">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
        />
      ))}
    </section>
  );
}

export default VideoGrid;