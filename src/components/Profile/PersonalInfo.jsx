import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { EditIcon } from "./assets/Icons";
import "./styles/info.scss";
import { useId } from "react";
import { auth, storage } from "../../Firebase/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import { db } from "../../Firebase/firebase";


const PersonalInfo = () => {
  // Retrieve personal information from localStorage, or use default values if not available
  const [firstName, setFirstName] = useState(localStorage.getItem("firstName") || "");
  const [lastName, setLastName] = useState(localStorage.getItem("lastName") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem("phoneNumber") || "");
  const [date, setDate] = useState(localStorage.getItem("date") || "");
  const [myStack, setMyStack] = useState(localStorage.getItem("myStack") || "");
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    // Save personal information to localStorage whenever it changes
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("date", date);
    localStorage.setItem("myStack", myStack);

  }, [firstName, lastName, email, phoneNumber, date, myStack]);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSave = () => {
    // Save the new personal information
    console.log("Personal information saved:", { firstName, lastName, email, phoneNumber, date, myStack });
    setShowEdit(false);
  };
  

  return (
    <>
      <div className="info">
        <div className="info--heading">
          <h2>Personal Information</h2>
          <EditIcon onClick={handleEdit} />
        </div>
        <div>
          <div className="info--box">
            <div>
              <label>First Name</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                readOnly={!showEdit}
                style={{ border: showEdit ? "1px solid gray" : "none" }}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                readOnly={!showEdit}
                style={{ border: showEdit ? "1px solid gray" : "none" }}
              />
            </div>
          </div>
          <div className="info--box">
            <div>
              <label>Email Address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={!showEdit}
                style={{ border: showEdit ? "1px solid gray" : "none" }}
              />
            </div>
            <div>
              <label>Phone number</label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                readOnly={!showEdit}
                style={{ border: showEdit ? "1px solid gray" : "none" }}
              />
            </div>
          </div>
          <div className="info--box">
            <div>
              <label>Date of Birth</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                readOnly={!showEdit}
                style={{ border: showEdit ? "1px solid gray" : "none" }}
              />
            </div>
            <div>
              <label>My Stack</label>
              <input
                value={myStack}
                onChange={(e) => setMyStack(e.target.value)}
                readOnly={!showEdit}
                style={{ border: showEdit ? "1px solid gray" : "none" }}
              />
            </div>
          </div>
        </div>
        {showEdit && (
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        )}
      </div>
    </>
  );
};

export default PersonalInfo;
