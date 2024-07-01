import React from "react";
import "./styles/navbar.scss";
import notifIcon from "../Dashboard/assets/notificationIcon.svg";
import profilePicture from "../Dashboard/assets/profilePicture.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "../../assets/icons/Icons";
import logo from "../../pages/Auth/assets/logo.svg";
import { useContext } from "react";
import { MainContext } from "../../contexts/MainContextProvider";
import { Sidebar } from "flowbite-react";

const Navbar = ({ props }) => {
  const { showSidebar, setShowSideBar, isMobile, setIsMobile } = useContext(MainContext);

  const handleShowSidebar = () => {
    setShowSideBar(true);
    console.log(showSidebar);
  };

  return (
    <>
      <div className="navbar">
        <HamburgerIcon onClick={() => setIsMobile(!isMobile)} />
        <img src={logo} alt="logo" />
        <h1>{props}</h1>
        <ProfileIcon />
      </div>
    </>
  );
};

export default Navbar;

export const ProfileIcon = () => {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="profile__icon">
        <img
          className="profile__icon--notif"
          src={notifIcon}
          alt="notif icon"
        />
        <div
          onClick={() => navigate("/profile")}
          className="profile__icon--profile"
        >
          {/* Check if user is logged in, then display image */}
          <img
            className="profile__icon--img"
            src={user ? null : profilePicture}
            alt="profile pic"
          />
          <div>
            {/* To be replaced by user detail's stored in the database */}
            <h4>Sim Fubara</h4>
            <p>Learner</p>
          </div>
        </div>
      </div>
    </>
  );
};