import { useState, useEffect } from "react";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import PersonalInfo from "../../components/Profile/PersonalInfo";
import Location from "../../components/Profile/Location";
import Skills from "../../components/Profile/Skills";

const Profile = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  useEffect(() => {
    document.title = "Profile";
  });

  return (
    <>
      <div className="dashboard">
        <div className="h-screen sticky top-0">
          <Sidebar isOpen={isSidebarOpened} setIsOpen={setIsSidebarOpened} />
        </div>
        <div className={`${isSidebarOpened ? "" : "block"} dashboard__main`}>
          <Navbar
            props={"Profile"}
            onHamburgerClick={() => setIsSidebarOpened(true)}
          />
          <div className="flex gap-8 max-w-full px-7 lg:pl-0 lg:pr-12">
            <div className="w-full lg:w-3/4">
              <h2 className="block lg:hidden">Profile</h2>
              <ProfileDetails />
              <div className="skills-sm">
                <Skills />
              </div>
              <PersonalInfo />
              <Location />
            </div>
            <div className="w-full lg:w-1/4 lg:h-full hidden lg:block">
              <div className="skills-lg">
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
