import React from "react";
import { useEffect, useContext } from "react";
import { MainContext } from "../../contexts/MainContextProvider";
import Activity from "../../components/Dashboard/Activity";
import Feed from "../../components/Dashboard/Feed";
import Navbar from "../../components/Dashboard/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import Skills from "../../components/Dashboard/Skills";
import Track from "../../components/Dashboard/Track";
import "../Dashboard/styles/dashboard.scss";

const Dashboard = () => {
  const { showSidebar, setShowSideBar, isMobile } = useContext(MainContext);

  useEffect(() => {
    document.title = "Dashboard";
  });

  return (
    <>
      <div className="dashboard">
        <div style={{ height: "100vh", position: "sticky", top: "0px" }}>
          <Sidebar />
        </div>
        <div
          className="dashboard__main"
          style={{ display: 'block' }}
        >
          <Navbar props={"Dashboard"} />
          <div className="dashboard__main--first">
            <h2>Dashboard</h2>
            <Activity />
            <div>
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
