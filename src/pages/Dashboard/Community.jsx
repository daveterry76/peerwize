import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Dashboard/Navbar";
import Sidebar from "../../components/Sidebar";

import ChatRoom from "../../components/Community/ChatRoom";
import { CommunityOptionsIcon } from "../../assets/icons/Icons";

const Community = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const stack = "design";
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  const handleRoomNameChange = () => {
    setRoomName(stack);
  };

  useEffect(() => {
    handleRoomNameChange();
    navigate(`${roomName}`);
    document.title = `Community - ${roomName.toUpperCase()}`;
  }, [roomName, navigate]);

  return (
    <>
      <div className="dashboard">
        <div className="h-screen sticky top-0">
          <Sidebar isOpen={isSidebarOpened} setIsOpen={setIsSidebarOpened} />
        </div>
        <div
          className="dashboard__main"
        >
          <Navbar props={"Community"} onHamburgerClick={() => setIsSidebarOpened(true)} />
          <div className="community__mobile">
            <h2>Community</h2>
            <CommunityOptionsIcon
              className="pointer mt-4 mr-4"
            />
          </div>
          <div className="flex gap-1">
            <ChatRoom />
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
