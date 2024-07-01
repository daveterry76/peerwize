import { useState, useEffect } from "react";

export const BackArrowIcon = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.07999"
        stroke="#141414"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const HamburgerIcon = ({ ...props }) => {
  return (
    <svg
      width="30"
      height="18"
      viewBox="0 0 30 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1H29"
        stroke="#37BBCA"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M1 9H21"
        stroke="#37BBCA"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M1 17H29"
        stroke="#37BBCA"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const CancelIcon = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 6.15381L6 18.1538"
        stroke="#848484"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 6.15381L18 18.1538"
        stroke="#848484"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const LogoutIcon = ({ ...props }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.4399 14.62L19.9999 12.06L17.4399 9.5"
        stroke={isMobile ? "#37BBCA" : "#333333"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75977 12.0601H19.9298"
        stroke={isMobile ? "#37BBCA" : "#333333"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7598 20C7.33977 20 3.75977 17 3.75977 12C3.75977 7 7.33977 4 11.7598 4"
        stroke={isMobile ? "#37BBCA" : "#333333"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CommunityOptionsIcon = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.6665 4.16667C11.6665 3.25 10.9165 2.5 9.99984 2.5C9.08317 2.5 8.33317 3.25 8.33317 4.16667C8.33317 5.08333 9.08317 5.83333 9.99984 5.83333C10.9165 5.83333 11.6665 5.08333 11.6665 4.16667Z"
        stroke="#37BBCA"
        stroke-width="1.5"
      />
      <path
        d="M11.6665 15.8337C11.6665 14.917 10.9165 14.167 9.99984 14.167C9.08317 14.167 8.33317 14.917 8.33317 15.8337C8.33317 16.7503 9.08317 17.5003 9.99984 17.5003C10.9165 17.5003 11.6665 16.7503 11.6665 15.8337Z"
        stroke="#37BBCA"
        stroke-width="1.5"
      />
      <path
        d="M11.6665 9.99967C11.6665 9.08301 10.9165 8.33301 9.99984 8.33301C9.08317 8.33301 8.33317 9.08301 8.33317 9.99967C8.33317 10.9163 9.08317 11.6663 9.99984 11.6663C10.9165 11.6663 11.6665 10.9163 11.6665 9.99967Z"
        stroke="#37BBCA"
        stroke-width="1.5"
      />
    </svg>
  );
};
