import React, { useEffect } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import PersonalInfo from "../../components/Profile/PersonalInfo";
import Location from "../../components/Profile/Location";
import Skills from "../../components/Profile/Skills";

const Profile = () => {
  useEffect(() => {
    document.title = "Profile";
  });

  return (
    <>
      <div className="dashboard">
        <div style={{ height: "100vh", position: "sticky", top: "0px" }}>
          <Sidebar />
        </div>
        <div className="dashboard__main">
          <Navbar props={"Profile"} />
          <div style={{ display: "flex", gap: "4px" }}>
            <div>
              <ProfileDetails />
              <PersonalInfo />
              <Location />
            </div>
            <div style={{ width: "100%" }}>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
