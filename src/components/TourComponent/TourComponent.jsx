import React from "react";
import "./TourComponent.css";

const TourComponent = ({ tours }) => {
  return (
    <div className="bg-red-400">
      <h1>{tours.title}</h1>
      <p>{tours.description}</p>
    </div>
  );
};

export default TourComponent;
