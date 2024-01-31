import React, { useEffect, useState } from "react";
import "./styles/profiledetails.scss";
import changeProfilePicIcon from "../Profile/assets/changeProfilePicIcon.svg";
import { useId } from "react";
import { auth, storage } from "../../Firebase/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const ProfileDetails = ({ handleProfileImageUpdate }) => {
  const [bio, setBio] = useState("");
  const [originalBio, setOriginalBio] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [editingImage, setEditingImage] = useState(false);
  const [editingBio, setEditingBio] = useState(false);
  const textareaId = useId();

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        fetchProfilePicture(user.uid);
        // Retrieve bio from localStorage
        const storedBio = localStorage.getItem(`bio_${user.uid}`);
        setBio(storedBio || ""); // Set the bio to the stored value or an empty string
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Save the bio to localStorage whenever it changes
    if (currentUser) {
      localStorage.setItem(`bio_${currentUser.uid}`, bio);
    }
  }, [bio, currentUser]);

  const fetchProfilePicture = async (userId) => {
    try {
      const storageRef = ref(storage, `profileImages/${userId}/profilePic`);
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
      handleProfileImageUpdate(url);
    } catch (error) {
      console.error("Error fetching profile picture: ", error);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const userId = currentUser.uid;
    const storageRef = ref(storage, `profileImages/${userId}/profilePic`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    try {
      await uploadTask;
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
      setEditingImage(false);
      handleProfileImageUpdate(url);
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

  const handleSendClick = () => {
    alert("Bio sent:", bio);
    setEditingBio(false);
  };

  const handleEditClick = () => {
    setOriginalBio(bio);
    setEditingBio(true);
  };

  const handleCancelEditClick = () => {
    setBio(originalBio);
    setEditingBio(false);
  };

  return (
    <div className="profile__details">
      <div className="profile__details--data">
        <div
          className="profile__img"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "180px",
            backgroundImage: `url(${imageUrl || changeProfilePicIcon})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            cursor: "pointer",
            position: "relative",
          }}
          onClick={() => document.getElementById("profilePicInput").click()}
        >
          <input
            type="file"
            id="profilePicInput"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
        <div className="profile__data">
          {currentUser && <h1>{currentUser.displayName || "User"}</h1>}
          {currentUser && <h4>{currentUser.email || "example@example.com"}</h4>}
        </div>
      </div>
      <div className="profile__details--bio">
        <label htmlFor={textareaId}>
          Bio <span>({bio.length}/120)</span>
        </label>
        <div style={{ position: "relative" }}>
          <textarea
            name="bioUpdate"
            id={textareaId}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={120}
            rows={4}
            cols={55}
            readOnly={!editingBio}
          />
          {editingBio ? (
            <>
              <button className="send-button" onClick={handleSendClick}>
                Save
              </button>
              <button className="cancel-button" onClick={handleCancelEditClick}>
                Cancel
              </button>
            </>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
