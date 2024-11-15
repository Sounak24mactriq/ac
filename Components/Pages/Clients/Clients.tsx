import React from 'react';
import Image from 'next/image'; // Import the next/image component
import { Clientheader, Clientsimage } from "../../../Config/Clients/Clients";

export default function Clients() {
  return (
    <div>
      <div className="bg-gray-200 border border-gray-300 w-screen h-[500px] flex items-center justify-center">
        <p className="text-center text-sm sm:text-base font-medium text-gray-700">
          Banner
        </p>
      </div>
      <div className="py-10 px-5">
        {/* Client Header */}
        <div className="text-center mb-8">
          {Clientheader.map((item, index) => (
            <div key={index}>
              <h2 className="text-3xl font-semibold">{item.header}</h2>
              <p className="mt-4 text-lg">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ml-[200px] mr-[200px]">
          {Clientsimage.map((item, index) => (
            <div key={index}>
              <div className="border hover:border-8 hover:border-gray-300 p-[8px]">
                <Image
                  src={item.path}
                  alt={`client-${index}`}
                  width={200} // Adjust the width as needed
                  height={100} // Adjust the height as needed
                  className="object-contain" // Maintain the aspect ratio of the image
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
