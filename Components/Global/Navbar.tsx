"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { navdata } from "../../Config/Navbar/data"; // Adjust path as necessary
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrolling, setScrolling] = useState(false); // To manage scroll effect timing

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll event to update navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true); // Scrolled past 300px
        if (!scrolling) {
          setScrolling(true);
          setTimeout(() => {
            setScrolling(false);
          }, 1000); // Wait 1 second to allow smooth transition before showing the new navbar
        }
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolling]);

  return (
    <div className="relative w-full">
      {/* Default Navbar for large screens */}
      <div
        className={`w-full p-4 absolute text-white top-0 left-0 transition-all duration-1000 ease-in-out ${
          !isScrolled ? "block" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center 2xl:pl-5 2xl:pr-8 2xl:pt-2 xl:pr-5 xl:pt-2">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Image
              src={navdata[0].logo1 || "/path/to/default-logo.png"} // Fallback logo if not found
              alt="Logo 1"
              width={100}
              height={50}
              className="2xl:h-[50px] 2xl:w-full xl:h-[35px] xl:w-full 2xl:pb-[7px] mb-[5px] md:mb-[0px]"
            />
          </div>

      {/* Desktop Navigation Links */}
<div
  className={`flex md:space-x-1 lg:space-x-4 xl:space-x-8 uppercase font-semibold `}
>
  {navdata.map((item, index) => (
    <div key={index} className="xl:text-[15px] 2xl:text-[18px] lg hidden md:block">
      {item.link ? (
        // Use Link for navigation
        <Link href={item.link} className="hover:text-gray-300">
          {item.text}
        </Link>
      ) : (
        // For non-link items, render as normal text
        <span className="hover:text-gray-300 cursor-default">{item.text}</span>
      )}
    </div>
  ))}
</div>


          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center  mr-[20px]">
            <Image
              src="/Navbar/menu.png" // Path to the hamburger menu image
              alt="Hamburger Menu"
              width={25}
              height={25}
              onClick={toggleMenu}
              className={isMenuOpen ? "hidden" : "block"}
            />
            <Image
              src="/Navbar/close.png" // Path to the close menu image
              alt="Close Menu"
              width={30}
              height={30}
              onClick={toggleMenu}
              className={` ${isMenuOpen ? "block" : "hidden"} hover:scale-110`} // Example with hover scale and smooth transition
            />
          </div>
        </nav>
      </div>

      {/* New Navbar after scrolling for large screens */}
      <div
        className={`w-full p-4 fixed top-0 left-0 z-50 transition-all duration-1000 ease-in-out ${
          isScrolled ? "translate-y-0 bg-white text-black" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center 2xl:pl-5 2xl:pr-8 2xl:pt-2 xl:pr-5 xl:pt-2">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Image
              src={navdata[0].logo2 || "/path/to/default-logo.png"} // Fallback logo if not found
              alt="Logo 2"
              width={100}
              height={50}
              className="2xl:h-[50px] 2xl:w-full xl:h-[35px] xl:w-full 2xl:pb-[7px] "
            />
          </div>

          {/* Desktop Navigation Links */}
          <div
  className={`flex space-x-8 uppercase font-semibold text-sm md:flex ${
    isMenuOpen ? "flex-col mt-4" : "hidden md:flex"
  }`}
>
  {navdata.map((item, index) => (
    <div key={index} className="xl:text-[15px] 2xl:text-[18px] lg hidden md:block">
      {item.link ? (
        // Wrap text inside the Link component directly
        <Link href={item.link} className="hover:text-green-500 cursor-pointer">
          {item.text}
        </Link>
      ) : (
        // Non-link items just display the text
        <span className="hover:text-green-500 cursor-default">{item.text}</span>
      )}
    </div>
  ))}
</div>


        </nav>
      </div>
    </div>
  );
}
