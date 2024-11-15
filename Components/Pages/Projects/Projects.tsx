"use client";

import React, { useState, useCallback, useRef } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";

// Import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";

const images = [
  { src: "/Projects/ab1.jpeg", title: "Project 1", description: "Description 1" },
  { src: "/Projects/ab1.jpeg", title: "Project 1", description: "Description 1" },  { src: "/Projects/ab1.jpeg", title: "Project 1", description: "Description 1" },  { src: "/Projects/ab1.jpeg", title: "Project 1", description: "Description 1" },  { src: "/Projects/ab1.jpeg", title: "Project 1", description: "Description 1" },  { src: "/Projects/ab1.jpeg", title: "Project 1", description: "Description 1" },  { src: "/Projects/ab1.jpeg", title: "Project 1", description: "Description 1" },  { src: "/Projects/ab1.jpeg", title: "Project 1", description: "Description 1" },  { src: "/Projects/ab1.jpeg", title: "Project 1", description: "Description 1" },  { src: "/Projects/ab1.jpeg", title: "Project 1", description: "Description 1" },
];

export default function Projects() {
  const lightGalleryRef = useRef<any>(null);

  const onInit = useCallback((detail: any) => {
    if (detail) {
      lightGalleryRef.current = detail.instance;
    }
  }, []);

  const openLightbox = useCallback((index: number) => {
    lightGalleryRef.current?.openGallery(index);
  }, []);

  return (

  <div>
      <div className="bg-gray-200 border border-gray-300 w-screen h-[500px] flex items-center justify-center">
  <p className="text-center text-sm sm:text-base font-medium text-gray-700">
    Banner
  </p>
</div>
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
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-48 object-cover"
            />
           
          </div>
        ))}
      </div>

      {/* LightGallery Component */}
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgFullscreen]}
        elementClassNames="hidden"
      >
        {images.map((image, idx) => (
          <a
            key={idx}
            href={image.src}
            data-lg-size="1400-933"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-auto"
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
