import React from "react";
import { branchData } from "../../../Config/Branches/Branch";

export default function Branch() {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative h-64">
        <iframe
          src={branchData.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute top-4 left-4 bg-white p-2 rounded shadow">
          <h2 className="text-lg font-semibold">{branchData.name}</h2>
          <a
            href={branchData.mapUrl}
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
            {" "}
            <h3 className="text-2xl font-bold mb-2">{branchData.type}</h3>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Our Staff:</span>
            <span className="text-green-600 font-semibold text-xl">
              {branchData.staff}
            </span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          <strong>Address:</strong> {branchData.address}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="inline-block w-6">✉️</span> {branchData.email}{" "}
          <span className="inline-block w-6">📞</span> {branchData.phone}{" "}
          <strong>Service No:</strong> {branchData.serviceNumber}
        </p>
      </div>
    </div>
  );
}
