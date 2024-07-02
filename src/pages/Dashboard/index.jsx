import { useState, useEffect } from "react";

import Activity from "../../components/Dashboard/Activity";
import Feed from "../../components/Dashboard/Feed";
import Navbar from "../../components/Dashboard/Navbar";
import Sidebar from "../../components/Sidebar";
import Skills from "../../components/Dashboard/Skills";
import Track from "../../components/Dashboard/Track";

import "../Dashboard/styles/dashboard.scss";

const Dashboard = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  useEffect(() => {
    document.title = "Dashboard";
  });

  return (
    <>
      <div className="dashboard">
        <div className="h-screen sticky top-0">
          <Sidebar isOpen={isSidebarOpened} setIsOpen={setIsSidebarOpened} />
        </div>
        <div className="block dashboard__main">
          <Navbar
            props={"Dashboard"}
            onHamburgerClick={() => setIsSidebarOpened(true)}
          />
          <div className="dashboard__main--first">
            <h2>Dashboard</h2>
            <Activity />
            <div className="h-full w-full">
              <Track />
              <Skills />
            </div>
          </div>
          <Feed />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
