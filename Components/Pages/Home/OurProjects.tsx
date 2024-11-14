import React from "react";

import { Project } from "../../../Config/Home/Projects"; // Adjust the import path to match your folder structure

export default function OurProjects() {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">{Project[0]?.title}</h2>
        <p className="text-gray-600 mt-2">{Project[0]?.description}</p>
      </div>
    </div>
  );
}
