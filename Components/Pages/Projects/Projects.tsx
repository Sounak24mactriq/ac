"use client"
import React, { useCallback, useRef } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";

// Import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import Image from "next/image"; // Import Image from next/image for optimization

// Define types for images
type ImageType = {
  src: string;
  title: string;
  description: string;
};

const images: ImageType[] = [
  { src: "/Projects/ab1.jpeg", title: "Project 1", description: "Description 1" },
  { src: "/Projects/ab1.jpeg", title: "Project 2", description: "Description 2" },
  { src: "/Projects/ab1.jpeg", title: "Project 3", description: "Description 3" },
  { src: "/Projects/ab1.jpeg", title: "Project 4", description: "Description 4" },
  { src: "/Projects/ab1.jpeg", title: "Project 5", description: "Description 5" },
  { src: "/Projects/ab1.jpeg", title: "Project 6", description: "Description 6" },
  { src: "/Projects/ab1.jpeg", title: "Project 7", description: "Description 7" },
  { src: "/Projects/ab1.jpeg", title: "Project 8", description: "Description 8" },
  { src: "/Projects/ab1.jpeg", title: "Project 9", description: "Description 9" },
  { src: "/Projects/ab1.jpeg", title: "Project 10", description: "Description 10" },
];

// Define the LightGallery instance type
interface LightGalleryInstance {
  openGallery: (index: number) => void;
}

export default function Projects() {
  // Ref for the LightGallery instance
  const lightGalleryRef = useRef<LightGalleryInstance | null>(null);

  // onInit callback with correct parameter type
  const onInit = useCallback((detail: { instance: LightGalleryInstance }) => {
    if (detail && detail.instance) {
      lightGalleryRef.current = detail.instance; // Assign the LightGallery instance to the ref
    }
  }, []);

  // Function to open the lightbox at the specified index
  const openLightbox = useCallback((index: number) => {
    if (lightGalleryRef.current) {
      lightGalleryRef.current.openGallery(index); // Use the openGallery method on the instance
    }
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div className="bg-gray-200 border border-gray-300 w-screen h-[500px] flex items-center justify-center">
        <p className="text-center text-sm sm:text-base font-medium text-gray-700">
          Banner
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Projects</h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="cursor-pointer rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={image.src}
                alt={image.title}
                width={400} // Specify the width
                height={300} // Specify the height
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* LightGallery Component */}
        <LightGallery
          onInit={onInit} // Correctly pass the onInit callback
          speed={500}
          plugins={[lgThumbnail, lgZoom, lgFullscreen]}
          elementClassNames="hidden"
        >
          {images.map((image, idx) => (
            <a key={idx} href={image.src} data-lg-size="1400-933">
              <Image
                src={image.src}
                alt={image.title}
                width={400} // Specify the width
                height={300} // Specify the height
                className="object-cover"
              />
              <div className="lg-sub-html">
                <h4 className="text-xl font-bold">{image.title}</h4>
                <p className="text-sm">{image.description}</p>
              </div>
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
}
