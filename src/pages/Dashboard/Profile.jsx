import React, { useEffect, useContext } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import PersonalInfo from "../../components/Profile/PersonalInfo";
import Location from "../../components/Profile/Location";
import Skills from "../../components/Profile/Skills";

import { MainContext } from "../../contexts/MainContextProvider";

const Profile = () => {
  const { showSidebar } = useContext(MainContext);

  useEffect(() => {
    document.title = "Profile";
  });

  return (
    <>
      <div className="dashboard">
        <div style={{ height: "100vh", position: "sticky", top: "0px" }}>
          <Sidebar />
        </div>
        <div
          className="dashboard__main"
          style={{ display: "block" }}
        >
          <Navbar props={"Profile"} />
          <div style={{ display: "flex", gap: "4px" }}>
            <div>
              <h2>Profile</h2>
              <ProfileDetails />
              <div className="skills-sm">
                <Skills />
              </div>
              <PersonalInfo />
              <Location />
            </div>
            <div style={{ width: "100%" }}>
              <div className="skills-lg" >
                <Skills />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
