import React, { useRef } from "react";
import { useState, useEffect, useContext } from "react";
import Select from "react-dropdown-select";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Auth/assets/logo.svg";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    country: "",
    state: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showCreatePassword, setShowCreatePassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowCreatePassword = () => {
    setShowCreatePassword(!showCreatePassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword, phoneNumber, country, state } = formData;
  
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`,
        phoneNumber: phoneNumber,
        country: country,
        state: state,
      });
  
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        country: "",
        state: "",
      });
  
      setError(""); // Clear any previous errors
      alert("User created successfully!");
  
      // Pass user information to the dashboard
      const user = {
        firstName,
        lastName,
        email,
        phoneNumber,
        stack: "Ui/UX", // Set user's default stack or retrieve it from form data
      };
      navigate("/", { user });
    } catch (error) {
      const errorCode = error.code;
  
      switch (errorCode) {
        case "auth/email-already-in-use":
          setError("User already exists. Please use a different email.");
          alert("User already exists. Please use a different email.");
          break;
        case "auth/weak-password":
          setError("Password is not strong enough. Please use a stronger password.");
          alert("Password is not strong enough. Please use a stronger password.");
          break;
        case "auth/invalid-email":
          setError("Invalid email format. Please enter a valid email.");
          alert("Invalid email format. Please enter a valid email.");
          break;
             case "auth/invalid-email":
        setError("Invalid email format. Please enter a valid email.");
        alert("Invalid email format. Please enter a valid email.");
        break;
        default:
          setError(error.message);
          alert(error.message);
          break;
      }
    }
  };
  
  return (
    <>
      <div className="logo__container" style={{ height: "790px" }}>
        <img className="logo" src={logo} alt="peerwize logo" />
        <h6>connecting skills, creating futures...</h6>
      </div>
      <div className="auth__container">
        <h1>
          Sign up on <span>Peerwize</span>
        </h1>
        <div>
          <hr />
          <h3>
            Already have an account?
            <Link style={{ textDecoration: "none" }} to="/">
              <span>Login</span>
            </Link>
          </h3>
          <hr />
        </div>
        <div className="auth__container--form">
          
          <form onSubmit={handleSubmit}>
          <input
           type="email" name="email" 
           placeholder="Email" 
           value={formData.email}
            onChange={handleChange} required
             />
            <input type="text" name="firstName"
             placeholder="First Name"
              value={formData.firstName} 
              onChange={handleChange} required 
              />
            <input type="text" 
            name="lastName" placeholder="Last Name"
             value={formData.lastName} 
             onChange={handleChange} required 
             />
                <input type="text" 
            name="country" placeholder="Country" 
            value={formData.country} onChange={handleChange} required
             />
            <input type="text"
             name="state" placeholder="State" 
             value={formData.state} onChange={handleChange} required 
             />
  <input type="tel"
             name="phoneNumber" placeholder="Phone Number"
              value={formData.phoneNumber} 
              onChange={handleChange} required
              maxLength={11}
               />

<div className="auth__container--password">
            <input type={showCreatePassword ? 
              "text" : "password"} name="password" 
              placeholder="Password"
               value={formData.password}
                onChange={handleChange} required 
                minLength={8}
                />
                  <h6>Minimum 8 characters including a number</h6>
            <input type={showCreatePassword ? 
              "text" : "password"} name="confirmPassword" 
              placeholder="Confirm Password"
               value={formData.confirmPassword} onChange={handleChange} required 
              minLength={8}
               />
           {showCreatePassword ? (
                <svg
                  onClick={handleShowCreatePassword}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="auth__container--show--password"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  onClick={handleShowCreatePassword}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="auth__container--show--password"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </div>
            <button className="auth__container--btn" type="submit">
              Sign Up
            </button>
          </form>
        </div>
        <h5>
          By continuing, you agree to our <span>Terms of service</span> and <span>Privacy policy</span>
        </h5>
      </div>
    </>
  );
};

export default SignUp;