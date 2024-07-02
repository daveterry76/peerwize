import { useState } from "react";

import { CircularProgressBar } from "../Dashboard/Track";
import { SearchIcon, SkillsIcon } from "./assets/Icons";
import "../Profile/styles/skills.scss";
import { getUserInfo } from "../../config/swr";

const Skills = () => {
  const user = getUserInfo();
  const { skills } = user?.user;

  // const skills = ["Wireframing", "User interface design", "Colour psychology"];
  const [displayAddSkills, setDisplayAddSkills] = useState(false);

  const handleDisplayAddSkills = () => {
    setDisplayAddSkills(true);
  };

  return (
    <>
      <div className="skills w-full">
        <div className="pb-4">
          <SkillsIcon />
          <h3>My Skills</h3>
        </div>

        {skills.length ? (
          skills?.map((skill) => (
            <>
              <ul className="flex flex-col gap-4">
                <li className="flex justify-between gap-4 mt-4 text-xs">
                  <p className="text-xs text-left">{skill}</p>
                  <div>
                    <CircularProgressBar />
                  </div>
                </li>
              </ul>
            </>
          ))
        ) : (
          <p className="mt-8">No skills available. Click the button below to add new skills</p>
        )}
        {skills && skills.length > 3 && (
          <p className="text-xs underline mt-8">See more</p>
        )}

        <div className="add__skill">
          {!displayAddSkills ? (
            <button className="add__skill-btn" onClick={handleDisplayAddSkills}>
              Add Skill
            </button>
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
