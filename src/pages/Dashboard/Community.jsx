import React from "react";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Dashboard/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";

import { MainContext } from "../../contexts/MainContextProvider";

import ChatRoom from "../../components/Community/ChatRoom";
import { CommunityOptionsIcon } from "../../assets/icons/Icons";

const Community = () => {
  const stack = "frontend";
  const [roomName, setRoomName] = useState("");
  const { showSidebar } = useContext(MainContext);
  const navigate = useNavigate();

  const handleRoomNameChange = () => {
    setRoomName(stack);
  };

  useEffect(() => {
    handleRoomNameChange();
    navigate(`${roomName}`);
    document.title = `Community - ${roomName.toUpperCase()}`;
  }, [roomName]);

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
          <Navbar props={"Community"} />
          <div className="community__mobile">
            <h2>Community</h2>
            <CommunityOptionsIcon
              style={{
                cursor: "pointer",
                marginTop: "1rem",
                marginRight: "1rem",
              }}
            />
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <ChatRoom />
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
