"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { navdata } from "../../Config/Navbar/data"; // Adjust path as necessary

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Track visibility of default navbar
  const [scrolling, setScrolling] = useState(false); // To manage scroll effect timing

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll event to update navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true); // Scrolled past 50px
        if (!scrolling) {
          setIsNavbarVisible(false); // Hide default navbar when scrolling down
          setScrolling(true);
          setTimeout(() => {
            setScrolling(false);
          }, 1000); // Wait 1 second to allow smooth transition before showing the new navbar
        }
      } else {
        setIsScrolled(false);
        setIsNavbarVisible(true); // Show default navbar when at the top
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
          isNavbarVisible ? "block" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center 2xl:pl-5 2xl:pr-8 2xl:pt-2 xl:pr-5 xl:pt-[2px]">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Image
              src={navdata[0].logo1 || "/path/to/default-logo.png"} // Fallback logo if not found
              alt="Logo 1"
              width={100}
              height={50}
              className="2xl:h-full 2xl:w-full xl:h-[35px] xl:w-full"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Image
              src="/Navbar/menu.png" // Path to the hamburger menu image
              alt="Hamburger Menu"
              width={30}
              height={30}
              onClick={toggleMenu}
              className={isMenuOpen ? "hidden" : "block"}
            />
            <Image
              src="/Navbar/close.png" // Path to the close menu image
              alt="Close Menu"
              width={30}
              height={30}
              onClick={toggleMenu}
              className={isMenuOpen ? "block" : "hidden"}
            />
          </div>

          {/* Desktop Navigation Links */}
          <div
            className={`flex md:space-x-1 lg:space-x-4 xl:space-x-8  uppercase font-semibold  md:flex ${
              isMenuOpen ? "flex-col mt-4" : "hidden md:flex"
            }`}
          >
            {navdata.map((item, index) => (
              <a
                key={index}
                className="hover:text-gray-300 xl:text-[15px] 2xl:text-[18px] lg"
              >
                {item.text}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* New Navbar after scrolling for large screens */}
      <div
        className={`w-full p-4 fixed top-0 left-0 z-50 transition-all duration-1000 ease-in-out ${
          isScrolled ? "translate-y-0 bg-white text-black" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Image
              src={navdata[0].logo2 || "/path/to/default-logo.png"} // Fallback logo if not found
              alt="Logo 2"
              width={100}
              height={50}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Image
              src="/Navbar/menu.png" // Path to the hamburger menu image
              alt="Hamburger Menu"
              width={30}
              height={30}
              onClick={toggleMenu}
              className={isMenuOpen ? "hidden" : "block"}
            />
            <Image
              src="/Navbar/close.png" // Path to the close menu image
              alt="Close Menu"
              width={30}
              height={30}
              onClick={toggleMenu}
              className={isMenuOpen ? "block" : "hidden"}
            />
          </div>

          {/* Desktop Navigation Links */}
          <div
            className={`flex space-x-8 uppercase font-semibold text-sm md:flex ${
              isMenuOpen ? "flex-col mt-4" : "hidden md:flex"
            }`}
          >
            {navdata.map((item, index) => (
              <a key={index} className="hover:text-gray-700">
                {item.text}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile & Tablet Navbar (Below 1036px) */}
      <div className={`w-full  fixed top-0 left-0 z-50  md:hidden`}>
        <nav
          className={`container  flex justify-between items-center ${
            isMenuOpen ? "flex-col bg-white h-screen w-full" : "flex"
          }`}
        >
          <div className="flex flex-col">
            {/* Logo */}
            <div className="space-x-4">
              <Image
                src={navdata[0].logo1 || "/path/to/default-logo.png"} // Fallback logo if not found
                alt="Logo"
                width={100}
                height={50}
              />
            </div>
            {/* Mobile Navigation Links */}
            <div
              className={`flex flex-col space-y-4 uppercase font-semibold text-sm ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              {navdata.map((item, index) => (
                <a key={index} className="hover:text-gray-700">
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div>
            <Image
              src="/Navbar/menu.png" // Path to the hamburger menu image
              alt="Hamburger Menu"
              width={30}
              height={30}
              onClick={toggleMenu}
              className={isMenuOpen ? "hidden" : "block"}
            />
            <Image
              src="/Navbar/close.png" // Path to the close menu image
              alt="Close Menu"
              width={30}
              height={30}
              onClick={toggleMenu}
              className={isMenuOpen ? "block" : "hidden"}
            />
          </div>
        </nav>
      </div>
    </div>
  );
}
