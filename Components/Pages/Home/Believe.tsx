import React from "react";
import { Believevideo, Videotext } from "../../../Config/Home/Believe"; // Adjust the path as necessary

export default function Believe() {
  return (
    <div className="relative">
      {/* Videos */}
      {Believevideo && Believevideo.length > 0 ? (
        Believevideo.map((video, index) => (
          <div key={index}>
            <video
              className="w-full"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{ zIndex: -1 }} // Ensure video is behind the text
            >
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))
      ) : (
        <p>No videos available.</p>
      )}

      {/* Text in front of the video */}
      {Videotext && Videotext.length > 0 ? (
        Videotext.map((textItem, index) => (
          <div
            key={index}
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl sm:text-2xl md:text-3xl font-semibold text-center bg-black bg-opacity-50 p-4 rounded-md z-10"
          >
            <div className="text-[55px] pb-[70px]">{textItem.text}</div>
            <div className="text-[30px] pl-[150px] pr-[150px] leading-[50px]">
              {textItem.description}
            </div>
          </div>
        ))
      ) : (
        <p>No text available.</p>
      )}
    </div>
  );
}
