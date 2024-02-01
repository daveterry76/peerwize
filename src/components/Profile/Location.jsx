import React, { useState, useEffect } from "react";
import { EditIcon } from "./assets/Icons";
import { useId } from "react";
import { auth, storage } from "../../Firebase/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const Location = () => {
  // Retrieve location information from localStorage, or use default values if not available
  const [country, setCountry] = useState(localStorage.getItem("country") || "");
  const [state, setState] = useState(localStorage.getItem("state") || "");
  const [city, setCity] = useState(localStorage.getItem("city") || "");
  const [houseAddress, setHouseAddress] = useState(localStorage.getItem("houseAddress") || "");

  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    // Save location information to localStorage whenever it changes
    localStorage.setItem("country", country);
    localStorage.setItem("state", state);
    localStorage.setItem("city", city);
    localStorage.setItem("houseAddress", houseAddress);
  }, [country, state, city, houseAddress]);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSave = () => {
    // Save the new user location information
    alert("Location information saved:", { country, state, city, houseAddress });
    setShowEdit(false);
  };

  return (
    <>
      <div className="info">
        <div className="info--heading">
          <h2>Location</h2>
          <EditIcon onClick={handleEdit} />
        </div>
        <div>
          <div className="info--box">
            <div>
              <label>Country</label>
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                readOnly={!showEdit}
                style={{ border: showEdit ? "1px solid gray" : "none" }}
              />
            </div>
            <div>
              <label>State</label>
              <input
                value={state}
                onChange={(e) => setState(e.target.value)}
                readOnly={!showEdit}
                style={{ border: showEdit ? "1px solid gray" : "none" }}
              />
            </div>
          </div>
          <div className="info--box">
            <div>
              <label>City</label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                readOnly={!showEdit}
                style={{ border: showEdit ? "1px solid gray" : "none" }}
              />
            </div>
            <div>
              <label>House Address</label>
              <input
                value={houseAddress}
                onChange={(e) => setHouseAddress(e.target.value)}
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

export default Location;
