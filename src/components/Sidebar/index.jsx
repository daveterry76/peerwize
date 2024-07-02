import { NavLink } from "react-router-dom";

import logo from "../../pages/Auth/assets/logo.svg";
import "../Sidebar/sidebar.scss";

import {
  DashboardIcon,
  ProfileIcon,
  CommunityIcon,
  ResourceLibraryIcon,
  WebinarIcon,
  SettingsIcon,
} from "../Dashboard/assets/icons/DashboardIcons";
import { CancelIcon, LogoutIcon } from "../../assets/icons/Icons";

const sidebarItems = [
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <ProfileIcon />,
    name: "Profile",
    link: "/profile",
  },
  {
    icon: <CommunityIcon />,
    name: "Community",
    link: "/community/design",
  },
  {
    icon: <ResourceLibraryIcon />,
    name: "Resource Library",
    link: "/resourceLibrary",
  },
  // {

  // },
  {
    icon: <WebinarIcon />,
    name: "Webinars",
    link: "/webinars",
  },
  {
    icon: <SettingsIcon />,
    name: "Settings",
    link: "/settings",
  },
];

const linkClass = ({ isActive }) => {
  return isActive ? "sidebar__link active" : "sidebar__link";
};

const Sidebar = ({ isOpen, setIsOpen }) => {

  return (
    <>
      <div className={`sidebar ${isOpen ? "opened" : ""}`}>
        <div className="sidebar__logo">
          <img src={logo} alt="logo" />
          <h3>Peerwize</h3>
          <CancelIcon onClick={() => setIsOpen(false)}  />
        </div>
        <div className="sidebar__links">
          {sidebarItems.map(({ icon, link, name }) => (
            <NavLink to={link} className={linkClass} key={link}>
              <p className={`flex center sidebar__link`}>{icon}</p>
              <p>{name}</p>
            </NavLink>
          ))}
        </div>

        <AdProfessional />
        <LogoutBtn />
      </div>
    </>
  );
};

export default Sidebar;

export const AdProfessional = () => {
  return (
    <>
      <div className="ad__professional">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 14.6668C28 22.0668 22.88 28.9868 16 30.6668C9.12 28.9868 4 22.0668 4 14.6668V6.66683L16 1.3335L28 6.66683V14.6668ZM16 28.0002C21 26.6668 25.3333 20.7202 25.3333 14.9602V8.40016L16 4.24016L6.66667 8.40016V14.9602C6.66667 20.7202 11 26.6668 16 28.0002ZM20.0667 21.3335L15.96 18.8668L11.8667 21.3335L12.9467 16.6668L9.33333 13.5468L14.1067 13.1335L15.96 8.7335L17.8267 13.1202L22.6 13.5335L18.9733 16.6668L20.0667 21.3335Z"
            fill="#EBF8FA"
          />
        </svg>
        <p>
          Become a professional. <br /> Upgrade to start sharing courses and
          webinars
        </p>
        <button>Upgrade</button>
      </div>
    </>
  );
};

export const LogoutBtn = () => {
  return (
    <>
      <button className="sidebar__logout--btn">
        <span>
          <LogoutIcon />
          <p>Logout</p>
        </span>
      </button>
    </>
  );
};
