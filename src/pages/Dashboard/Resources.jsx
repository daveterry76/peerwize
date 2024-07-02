import { useState } from "react";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Dashboard/Navbar";

const ResourceLibrary = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  return (
    <>
      <div className="dashboard">
        <div style={{ height: "100vh", position: "sticky", top: "0px" }}>
          <Sidebar isOpen={isSidebarOpened} setIsOpen={setIsSidebarOpened} />
        </div>
        <div className="dashboard__main">
          <Navbar
            props={"Resources"}
            onHamburgerClick={() => setIsSidebarOpened(true)}
          />
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
