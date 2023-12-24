import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { EditIcon } from "./assets/Icons";
import "./styles/info.scss";

const PersonalInfo = () => {
  let { firstName, setFirstName, lastName, setLastName } =
    useContext(AuthContext);

  const [email, setEmail] = useState("simfubara@yahoo.com");
  const [phoneNumber, setPhoneNumber] = useState("+234 803 875 5560");
  const [stack, setStack] = useState("UI/UX");

  const initialized = true;
  const [showEdit, setShowEdit] = useState(false);

  if (initialized) {
    setFirstName("Sim");
    setLastName("Fubara");
  }

  const handleEdit = () => {
    setShowEdit(!showEdit);
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
                value={initialized && firstName}
                onChange={(e) => setFirstName(e.target.value)}
                readOnly={!showEdit}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                value={initialized && lastName}
                onChange={(e) => setLastName(e.target.value)}
                readOnly
              />
            </div>
          </div>
          <div className="info--box">
            <div>
              <label>Email Address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly
              />
            </div>
            <div>
              <label>Phone number</label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                readOnly
              />
            </div>
          </div>
          <div className="info--box">
            <div>
              <label>Date of Birth</label>
              <input
                type="date"
                readOnly={!showEdit}
                style={{ border: showEdit ? "1px solid gray" : "none" }}
              />
            </div>
            <div>
              <label>My Stack</label>
              <input
                value={stack}
                onChange={(e) => setStack(e.target.value)}
                readOnly={!showEdit}
                style={{ border: showEdit ? "1px solid gray" : "none" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
