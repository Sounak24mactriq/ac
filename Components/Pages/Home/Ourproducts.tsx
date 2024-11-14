// Components/Pages/Home/Ourproducts.tsx
import React from "react";
import { productInfo, Products } from "../../../Config/Home/Product"; // Adjust the import path to match your folder structure
import Image from "next/image";

export default function Ourproducts() {
  return (
    <div className="p-8">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">{productInfo[0]?.title}</h2>
        <p className="text-gray-600 mt-2">{productInfo[0]?.description}</p>
      </div>

      {/* Product Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:pr-[30px] 2xl:p-[0px]">
        {/* Left Column: Large Image */}
        <div className="relative h-full col-span-1">
          <Image
            src={Products[0]?.url || "/placeholder.png"}
            alt="Product 1"
            height={350}
            width={350}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Right Column: Three Smaller Images */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-rows-2 gap-4 col-span-1">
          {/* Top Right: Second Product */}
          <div className="relative h-full ">
            <Image
              src={Products[1]?.url || "/placeholder.png"}
              alt="Product 2"
              height={350}
              width={350}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Bottom Right: Two Products in One Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bottom Left of Right Column: Third Product */}
            <div className="relative h-full ">
              <Image
                src={Products[2]?.url || "/placeholder.png"}
                alt="Product 3"
                height={350}
                width={350}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            {/* Bottom Right of Right Column: Fourth Product */}
            <div className="relative h-full">
              <Image
                src={Products[3]?.url || "/placeholder.png"}
                alt="Product 4"
                height={350}
                width={350}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
