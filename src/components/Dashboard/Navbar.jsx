import React, { useEffect, useState } from 'react';
import './styles/navbar.scss';
import notifIcon from '../Dashboard/assets/notificationIcon.svg';
import defaultProfilePicture from '../Dashboard/assets/profilePicture.svg';
import { useNavigate } from 'react-router-dom';
import { useId } from "react";
import { auth, storage } from '../../Firebase/firebase'; // Import auth and storage from firebase
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const Navbar = ({ props, profileImageUrl }) => {
  const [imageUrl, setImageUrl] = useState(() => {
    // Get the image URL from local storage if available, else use default image
    const storedImageUrl = localStorage.getItem('profileImageURL');
    return storedImageUrl || profileImageUrl || defaultProfilePicture;
  });
  const [editingImage, setEditingImage] = useState(false);

  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    const userId = auth.currentUser.uid;
    const storageRef = ref(storage, `profileImages/${userId}/profilePic`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    try {
      await uploadTask;
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
      setEditingImage(false);
      // Update profile image URL in local storage for persistence
      localStorage.setItem('profileImageURL', url);
      // You can also update it in your backend or user profile data in firestore
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

  return (
    <>
      <div className='navbar'>
        <h1>{props}</h1>
        <ProfileIcon 
          profileImageUrl={imageUrl} 
          onProfileImageChange={handleProfileImageChange} 
          editingImage={editingImage} 
          setEditingImage={setEditingImage}
        />
      </div>
    </>
  );
};

export default Navbar;

export const ProfileIcon = ({ profileImageUrl, onProfileImageChange, editingImage, setEditingImage }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleImageClick = () => {
    setEditingImage(true);
  };

  return (
    <>
      <div className='profile__icon'>
        <img className='profile__icon--notif' src={notifIcon} alt='notif icon' />
        <div onClick={() => navigate('/profile')} className='profile__icon--profile'>
          {/* Check if user is logged in, then display image */}
          <label htmlFor="profilePicInput">
            {editingImage ? (
              <input
                type="file"
                id="profilePicInput"
                style={{ display: "none" }}
                accept="image/*"
                onChange={onProfileImageChange}
              />
            ) : null}
            <div
              className='profile__icon--img'
              style={{
                backgroundImage: `url(${profileImageUrl || defaultProfilePicture})`,
                borderRadius: "50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              onClick={handleImageClick}
            />
          </label>
          <div>
            {/* To be replaced by user detail's stored in the database */}
            {currentUser && <h4>{currentUser.displayName || 'User'}</h4>}
            <p>Learner</p>
          </div>
        </div>
      </div>
    </>
  );
};
