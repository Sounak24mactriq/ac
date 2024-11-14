"use client";
import React from "react";
import Slider, { Settings } from "react-slick"; // Importing the Settings type from react-slick
import "slick-carousel/slick/slick.css";
import Image from "next/image"; // Import Image from next/image for optimization
import "slick-carousel/slick/slick-theme.css";
import { Clients, Clientsimg } from "../../../Config/Home/Clients";
import { CSSProperties } from "react"; // Import CSSProperties for correct typing
import { MouseEventHandler } from "react"; // Import MouseEventHandler for correct onClick typing

// Custom Previous Arrow Component with correct typings
function SamplePrevArrow(props: {
  className: string;
  style: CSSProperties;
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{
        ...style,
        display: "block",
        left: "-40px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        background: "none",
        border: "none",
      }}
      onClick={onClick}
    >
      <Image
        src="/Home/Clients/Back.png"
        alt="Previous"
        width={30}
        height={30}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

// Custom Next Arrow Component with correct typings
function SampleNextArrow(props: {
  className: string;
  style: CSSProperties;
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{
        ...style,
        display: "block",
        right: "-40px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        background: "none",
        border: "none",
      }}
      onClick={onClick}
    >
      <Image
        src="/Home/Clients/Next.png"
        alt="Next"
        width={30}
        height={30}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

// Defining the settings type for Slider
const settings: Settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  prevArrow: <SamplePrevArrow className={""} style={{}} onClick={() => {}} />,
  nextArrow: <SampleNextArrow className={""} style={{}} onClick={() => {}} />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const OurClients = () => {
  return (
    <div className="our-clients container mx-auto p-6">
      <h2 className="text-center text-2xl font-semibold mb-8">
        {Clients[0].title}
      </h2>
      <Slider {...settings}>
        {Clientsimg.map((client, index) => (
          <div key={index} className="client-slide px-2">
            <Image
              src={client.url}
              alt={`Client ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
              width={150} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurClients;
