import React from "react";
import "./styles/profiledetails.scss";
import changeProfilePicIcon from "../Profile/assets/changeProfilePicIcon.svg";
import { useState, useId } from "react";

const ProfileDetails = () => {
  const [bio, setBio] = useState("I am a frontend engineer!");
  const textareaId = useId();

  return (
    <>
      <div className="profile__details">
        <div className="profile__details--data">
          <div className="profile__img">
            <img src={changeProfilePicIcon} alt="change pic" />
          </div>
          <div className="profile__data">
            <h1>Sim Fubara</h1>
            <h4>Simfubara@yahoo.com</h4>
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
            rows={4}
            cols={55}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
