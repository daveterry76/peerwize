import React, { useState } from "react";
import { CircularProgressBar } from "../Dashboard/Track";
import { SearchIcon, SkillsIcon } from "./assets/Icons";
import "../Profile/styles/skills.scss";

const Skills = () => {
  const [displayAddSkills, setDisplayAddSkills] = useState(false);

  const handleDisplayAddSkills = () => {
    setDisplayAddSkills(true);
  };

  return (
    <>
      <div className="skills">
        <div>
          <SkillsIcon />
          <h3>My Skills</h3>
        </div>
        <ul>
          <li>
            <p>Wireframing</p>
            <div>
              <CircularProgressBar />
            </div>
          </li>
          <li>
            <p>User interface design</p>
            <div>
              <CircularProgressBar />
            </div>
          </li>
          <li>
            <p>Colour psychology</p>
            <div>
              <CircularProgressBar />
            </div>
          </li>
        </ul>
        <p>See more</p>
        <div className="add__skill">
          {!displayAddSkills ? (
            <button className="add__skill-btn" onClick={handleDisplayAddSkills}>Add Skill</button>
          ) : (
            <>
              <div>
                <div className="add__skill-heading">
                  <SkillsIcon />
                  <h4>Skills</h4>
                </div>
                <div className="add__skill-search">
                  <input placeholder="Search" type="search" />
                  <SearchIcon />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Skills;
