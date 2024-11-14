import React from "react";

import { CUEvideo, CUE } from "../../../Config/Home/Creating"; // Adjust the path as necessary

export default function Cue() {
  return (
    <div className="relative">
      {/* Videos */}
      {CUEvideo && CUEvideo.length > 0 ? (
        CUEvideo.map((video, index) => (
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl sm:text-2xl md:text-3xl font-semibold text-center bg-black bg-opacity-50 p-4 rounded-md z-10">
        {/* Render title dynamically */}
        {CUE.length > 0 && (
          <div>{CUE[0].title}</div> // Display title from the data
        )}

        {/* Render buttons dynamically */}
        {CUE.slice(1).map((item, index) => (
          <button key={index} className="bg-black opacity-50 p-[20px]">
            <p>{item.btntext}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
