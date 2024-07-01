import React, { useContext } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import { MainContext } from "../../contexts/MainContextProvider";

const ResourceLibrary = () => {
  const { showSidebar } = useContext(MainContext);
  return (
    <>
      <div className="dashboard">
        <div style={{ height: "100vh", position: "sticky", top: "0px" }}>
          <Sidebar />
        </div>
        <div
          className="dashboard__main"
          style={{ display: `${showSidebar ? "none" : "block"}` }}
        >
          <Navbar props={"Resources"} />
          <div style={{ display: "flex", gap: "4px" }}>
            <Resources />
          </div>
        </div>
      </div>
    </>
  );
};

export const Resources = () => {
  return <></>;
};

export const SavedCourses = () => {
  return <>hi</>;
};

export default ResourceLibrary;
