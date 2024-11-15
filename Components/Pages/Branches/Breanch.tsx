import React from "react";
import { branchData } from "../../../Config/Branches/Branch";

export default function Branches() {
  return (

<div >

  
<div className="bg-gray-200 border border-gray-300 w-screen h-[500px] flex items-center justify-center">
  <p className="text-center text-sm sm:text-base font-medium text-gray-700">
    Banner
  </p>
</div>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
      {branchData.map((branch, index) => (
        <div
          key={index}
          className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className="relative h-64">
            <iframe
              src={branch.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-4 left-4 bg-white p-2 rounded shadow">
              <h2 className="text-lg font-semibold">{branch.name}</h2>
              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm"
              >
                View larger map
              </a>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">{branch.type}</h3>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-gray-600 mr-2">Our Staff:</span>
                <span className="text-green-600 font-semibold text-xl">
                  {branch.staff}
                </span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              <strong>Address:</strong> {branch.address}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="inline-block w-6">✉️</span> {branch.email}{" "}
              <span className="inline-block w-6">📞</span> {branch.phone}{" "}
              <strong>Service No:</strong> {branch.serviceNumber}
            </p>
          </div>
        </div>
      ))}
    </div>
</div>
  );
}
