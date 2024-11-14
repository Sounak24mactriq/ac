import React from "react";

import { CUEvideo, CUE } from "../../../Config/Home/Creating"; // Adjust the path as necessary

export default function Cue() {
  return (
    <div className="relative h-screen md:h-full">
      {/* Videos */}
      {CUEvideo && CUEvideo.length > 0 ? (
        CUEvideo.map((video, index) => (
          <div key={index}>
            <video
              className="w-full h-screen md:h-full object-cover"
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
          <div className="pb-[60px] leading-[40px] text-[30px] pl-[20px] pr-[20px] lg:text-[40px] lg:pb-[50px] lg:leading-[50px] xl:text-[45px] xl:pb-[100px]  xl:leading-[70px] xl:pl-[100px] xl:pr-[100px] 2xl:text-[50px] 2xl:pb-[100px] 2xl:pl-[100px] 2xl:pr-[100px] 2xl:leading-[70px]">
            {CUE[0].title}
          </div> // Display title from the data
        )}

        {/* Render buttons dynamically */}
        {CUE.slice(1).map((item, index) => (
          <button
            key={index}
            className="bg-black opacity-50 p-[20px] rounded-[15px] mt-[30px]"
          >
            <p className="2xl:text-[30px] z-20 text-white">{item.btntext}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
