import { useNavigate } from "react-router-dom";

import notifIcon from "../Dashboard/assets/notificationIcon.svg";
import profilePicture from "../Dashboard/assets/profilePicture.svg";
import { HamburgerIcon } from "../../assets/icons/Icons";
import logo from "../../pages/Auth/assets/logo.svg";

import "./styles/navbar.scss";
import { getUserInfo } from "../../config/swr";

const Navbar = ({ props, onHamburgerClick }) => {
  return (
    <>
      <div className="navbar">
        <HamburgerIcon onClick={onHamburgerClick} />
        <img src={logo} alt="logo" />
        <h1 className="font-semibold">{props}</h1>
        <ProfileIcon />
      </div>
    </>
  );
};

export default Navbar;

export const ProfileIcon = () => {
  const user = getUserInfo();
  const { firstName, lastName } = user?.user;

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
            // src={user ? null : profilePicture}
            src={profilePicture}
            alt="profile pic"
          />
          <div>
            <h4>{firstName} {lastName}</h4>
            <p>Learner</p>
          </div>
        </div>
      </div>
    </>
  );
};