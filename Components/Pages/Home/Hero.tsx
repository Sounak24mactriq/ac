import React from "react";
import { Herovideo } from "../../../Config/Home/Hero"; // Adjust the path as necessary

export default function Hero() {
  return (
    <div>
      {Herovideo && Herovideo.length > 0 ? (
        Herovideo.map((video, index) => (
          <div key={index}>
            <video
              width="100%"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{ zIndex: -1 }} // Ensure video is behind content if needed
            >
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))
      ) : (
        <p>No videos available.</p>
      )}
    </div>
  );
}
