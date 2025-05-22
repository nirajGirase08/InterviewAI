import React from "react";
import { useState } from "react";
import "./Tiles.css";

const Tiles = () => {
  const skills = [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "C#",
    "PHP",
    "Ruby",
    "Swift",
    "Go",
    "Kotlin",
  ];
  return (
    <>
      <div className="tiles-container">
        {skills.map((skill, index) => {
          return (
            <span key={index} className="tiles">
              {skill}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Tiles;
