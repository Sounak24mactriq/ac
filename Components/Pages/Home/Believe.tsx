import React from "react";
import { Believevideo, Videotext } from "../../../Config/Home/Believe"; // Adjust the path as necessary

export default function Believe() {
  return (
    <div className="relative">
      {/* Text first with white background and black text on mobile */}
      {Videotext && Videotext.length > 0 ? (
        Videotext.map((textItem, index) => (
          <div
            key={index}
            className="bg-white md:hidden text-black text-xl sm:text-2xl md:text-3xl font-semibold text-center p-4 rounded-md sm:relative sm:z-10"
          >
            <div className="text-[25px]">{textItem.text}</div>
            <div className="text-[20px] pt-[30px]">{textItem.description}</div>
          </div>
        ))
      ) : (
        <p>No text available.</p>
      )}

      {/* Videos below the text without background on mobile */}
      {Believevideo && Believevideo.length > 0 ? (
        Believevideo.map((video, index) => (
          <div key={index} className="w-full flex justify-center mt-4 md:mt-0">
            <video
              className="w-full"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))
      ) : (
        <p>No videos available.</p>
      )}

      {/* On desktop (and larger screens), display video in the background and text on top */}
      <div className="absolute inset-0 flex flex-col items-center justify-center sm:flex-row sm:text-white sm:bg-black sm:bg-opacity-50">
        {/* Text in front of the video on desktop */}
        {Videotext && Videotext.length > 0 ? (
          Videotext.map((textItem, index) => (
            <div
              key={index}
              className="absolute sm:relative hidden md:block sm:z-10 sm:text-center text-white text-xl sm:text-2xl md:text-3xl font-semibold p-4 rounded-md sm:bg-transparent sm:bg-opacity-0"
            >
              <div className="text-[55px] pb-[70px]">{textItem.text}</div>
              <div className="text-[30px] pl-[150px] pr-[150px] leading-[50px]">
                {textItem.description}
              </div>
            </div>
          ))
        ) : (
          <p>No text available</p>
        )}
      </div>
    </div>
  );
}
