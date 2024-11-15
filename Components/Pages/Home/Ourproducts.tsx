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

      {/* Unified Product Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:pr-[30px] 2xl:p-[0px]">
        {/* Left Column: Large Image (Product 1) */}
        <div className="relative h-full col-span-1">
          <Image
            src={Products[0]?.url || "/placeholder.png"}
            alt="Product 1"
            height={350}
            width={350}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Right Column: Product Images (Products 2, 3, and 4) */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-rows-2 gap-4 col-span-1">
          {/* Top Right: Product 2 */}
          <div className="relative h-full ">
            <Image
              src={Products[1]?.url || "/placeholder.png"}
              alt="Product 2"
              height={350}
              width={350}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Bottom Right: Products 3 and 4 in two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-full ">
              <Image
                src={Products[2]?.url || "/placeholder.png"}
                alt="Product 3"
                height={350}
                width={350}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
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

      {/* Product 5, 6, and 7 Grid Layout */}
      <div className="grid grid-cols-1 gap-4 mt-8">
        {/* Product 5 takes the full row */}
        <div className="relative h-full col-span-1">
          <Image
            src={Products[4]?.url || "/placeholder.png"}
            alt="Product 5"
            height={350}
            width={350}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Product 6 and 7 in the second row (two columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative h-full">
            <Image
              src={Products[5]?.url || "/placeholder.png"}
              alt="Product 6"
              height={350}
              width={350}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="relative h-full">
            <Image
              src={Products[6]?.url || "/placeholder.png"}
              alt="Product 7"
              height={350}
              width={350}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
