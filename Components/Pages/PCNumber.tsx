"use client";
import React, { useState, useEffect, useRef } from "react";
import { numbers } from "../../Config/Home/number"; // Adjust the import path to match your folder structure

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
    <div className="flex flex-col space-y-4" ref={sectionRef}>
      {/* Row 1: Numbers */}
      <div className="flex justify-between">
        {animatedNumbers.map((item, index) => (
          <div key={index} className="flex-1 text-center">
            <span className="text-2xl font-bold">{item}+</span>
          </div>
        ))}
      </div>

      {/* Row 2: Descriptions */}
      <div className="flex justify-between">
        {numbers.map((item, index) => (
          <div key={index} className="flex-1 text-center">
            <span className="text-lg">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
