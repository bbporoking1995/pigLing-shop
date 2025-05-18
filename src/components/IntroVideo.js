import { useState } from "react";
import ReactPlayer from "react-player";
import LoadingAnimation from "../components/LoadingAnimation";

const IntroVideo = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="video-wrapper">
      {isLoading && <LoadingAnimation />}

      <ReactPlayer
        url="/pigLing-shop/pigLing.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
        playsinline
        controls={false}
        onReady={() => setIsLoading(false)}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </div>
  );
};

export default IntroVideo;
