import React from "react";

const WorkContainer = ({ source, altString, workName, details }) => {
  return (
    <>
      <section className="workPortfolio">
        <section className="front">
          <img src={source} className="workImg front" alt={altString} />
        </section>
        <div className="back">
          <span className="strong">Project Name:</span>
          <span className="workDetails">{workName}</span>
          <span className="strong">Details:</span>
          <span className="workDetails">{details}</span>
        </div>
      </section>
    </>
  );
};

export default WorkContainer;
