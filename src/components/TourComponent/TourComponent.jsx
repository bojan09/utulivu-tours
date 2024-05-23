import React from "react";

const TourComponent = ({ tours }) => {
  return (
    <div className="bg-red-400">
      <h1>Hello world</h1>
      <h1>{tours.title}</h1>
      <p>{tours.description}</p>
    </div>
  );
};

export default TourComponent;
