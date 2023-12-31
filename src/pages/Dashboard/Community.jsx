import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../components/Dashboard/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";

import { useNavigate } from "react-router-dom";
import ChatRoom from "../../components/Community/ChatRoom";

const Community = () => {

  const stack = "frontend"
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  const handleRoomNameChange = () => {
    setRoomName(stack);
  }

  useEffect(() => {
    handleRoomNameChange();
    navigate(`${roomName}`);
    document.title = `Community - ${roomName.toUpperCase()}`
  }, [roomName]);

  return (
    <>
      <div className="dashboard">
        <div style={{ height: "100vh", position: "sticky", top: "0px" }}>
          <Sidebar />
        </div>
        <div className="dashboard__main">
          <Navbar props={"Community"} />
          <div style={{ display: "flex", gap: "4px" }}>
            <ChatRoom />
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
