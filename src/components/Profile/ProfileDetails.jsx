import React from "react";
import "./styles/profiledetails.scss";
import changeProfilePicIcon from "../Profile/assets/changeProfilePicIcon.svg";
import { useState, useId } from "react";
import { getUserInfo } from "../../config/swr";

const ProfileDetails = () => {
  const [bio, setBio] = useState("I am a product designer!");
  const textareaId = useId();

  const user = getUserInfo();
  console.log(user?.user);
  const { firstName, lastName, email } = user?.user

  return (
    <>
      <div className="profile__details">
        <div className="profile__details--data">
          <div className="profile__img">
            <img src={changeProfilePicIcon} alt="change pic" />
          </div>
          <div className="profile__data">
            <h1>{firstName} {lastName}</h1>
            <h4>{email}</h4>
          </div>
        </div>
        <div className="profile__details--bio">
          <label htmlFor={textareaId}>Bio <span>({bio.length}/120)</span></label>
          <textarea
            name="bioUpdate"
            id={textareaId}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={120}
            style={{ width: "90%" }}
            rows={4}
            cols={55}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
