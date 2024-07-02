import { useState } from "react";
import { CircularProgressBar } from "./Track";
import "../Dashboard/styles/skills.scss";
import { getUserInfo } from "../../config/swr";

const Skills = () => {
  const user = getUserInfo();
  console.log(user?.user?.skills);
  const [skills, setSkills] = useState(user?.user?.skills);

  return (
    <>
      <div className="skills">
        {skills.length ? (
          <>
            <div>
              <h3>+ Skills</h3>
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
          </>
        ) : (
          <div className="flex justify-center items-center">No skill added for now!</div>
        )}
      </div>
    </>
  );
};

export default Skills;
