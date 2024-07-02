import { useState } from "react";
import { getUserInfo } from "../../config/swr";

import { EditIcon } from "./assets/Icons";
import "./styles/info.scss";

const PersonalInfo = () => {
  const user = getUserInfo();
  const { firstName, lastName, email, phoneNumber, city, country, track } =
    user?.user;
  const [stack, setStack] = useState("UI/UX");
  const [showEdit, setShowEdit] = useState(false);

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
              <input value={firstName} readOnly={!showEdit} />
            </div>
            <div>
              <label>Last Name</label>
              <input value={lastName} readOnly />
            </div>
          </div>
          <div className="info--box">
            <div>
              <label>Email Address</label>
              <input value={email} readOnly />
            </div>
            <div>
              <label>Phone number</label>
              <input value={phoneNumber} readOnly />
            </div>
          </div>
          <div className="info--box">
            <div>
              <label>Date of Birth</label>
              {showEdit ? (
                <input
                  type="date"
                  readOnly={!showEdit}
                  style={{ border: showEdit ? "1px solid gray" : "none" }}
                />
              ) : (
                <p className="text-sm">No date of birth added</p>
              )}
            </div>
            <div>
              <label>My Stack</label>
              {showEdit ? (
                <input
                  value={track.join(", ")}
                  onChange={(e) => setStack(e.target.value)}
                  readOnly={!showEdit}
                  style={{ border: showEdit ? "1px solid gray" : "none" }}
                  placeholder="Update stack"
                />
              ) : (
                <p className="text-sm">No stack added</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
