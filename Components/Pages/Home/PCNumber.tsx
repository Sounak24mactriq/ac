"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image"; // Import next/image
import { numbers } from "../../../Config/Home/number"; // Adjust the import path to match your folder structure
import { numberimage } from "../../../Config/Home/number"; // Assuming you import your image data here

export default function PCNumber() {
  const [animatedNumbers, setAnimatedNumbers] = useState(
    Array(numbers.length).fill(0)
  );
  const sectionRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver to detect when the component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the number animation
            animateNumbers();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    const currentSectionRef = sectionRef.current; // Store the ref in a variable
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const animateNumbers = () => {
    numbers.forEach((item, index) => {
      const end = parseInt(item.number.replace("+", "").replace(",", "")); // Remove "+" and commas
      const duration = 1000; // Total duration of 1 second
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime; // Time elapsed since animation started
        const progress = Math.min(elapsed / duration, 1); // Calculate progress as a percentage (from 0 to 1)

        // Calculate the current value based on progress
        const currentValue = Math.floor(end * progress);

        // Update the state with the new number
        setAnimatedNumbers((prev) => {
          const newNumbers = [...prev];
          newNumbers[index] = currentValue;
          return newNumbers;
        });

        // Continue the animation until it reaches 100%
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Ensure the final value is set to the target number
          setAnimatedNumbers((prev) => {
            const newNumbers = [...prev];
            newNumbers[index] = end;
            return newNumbers;
          });
        }
      };

      // Start the animation
      requestAnimationFrame(animate);
    });
  };

  return (
    <div className="bg-black h-[500px] text-white" ref={sectionRef}>
      {/* Image Section */}
      <div className="relative">
        <div className="flex justify-center py-4 absolute -top-4 left-0 right-0">
          {numberimage.map((item, index) => (
            <div key={index} className="relative w-full h-auto">
              <Image
                src={item.url}
                alt="Project Image"
                width={400} // Specify width
                height={300} // Specify height
                className="object-cover" // Ensures the image covers the area
                layout="intrinsic" // Maintains the image aspect ratio
              />
            </div>
          ))}
        </div>
      </div>

      {/* Data Section: Numbers and Descriptions */}
      <div className="flex flex-col text-4xl pt-[230px] pl-[150px] pr-[150px]"> {/* Larger text size */}
        {/* Row 1: Numbers */}
        <div className="flex space-x-0 ">
          {animatedNumbers.map((item, index) => (
            <div key={index} className="flex-1 text-center w-10 border border-red-200">
              <span className="text-5xl font-bold">{item}+</span> {/* Increase text size */}
            </div>
          ))}
        </div>

        {/* Row 2: Descriptions */}
        <div className="flex space-x-0">
          {numbers.map((item, index) => (
            <div key={index} className="flex-1 text-center">
              <span className="text-3xl">{item.description}</span> {/* Larger description text */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
