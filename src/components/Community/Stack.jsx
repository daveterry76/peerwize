import React from "react";
import "../Community/styles/stack.scss";

export const stackNiche = [
    "Wireframing",
    "Interviews",
    "User testing",
    "Figma",
    "Empathy mapping",
    "Empathy mapping",
    "Empathy mapping",
    "Empathy mapping",
    "Empathy mapping",
    "Empathy mapping",
]

const Stack = () => {
  return (
    <>
      <div className="stack__information">
        <h3>Stack</h3>
        <h1>UI/UX</h1>
      </div>
      <div className="stack__list">
        {stackNiche.map((stack, index) => (
            <h4 key={index}>{stack}</h4>
        ))}
      </div>
    </>
  );
};

export default Stack;
