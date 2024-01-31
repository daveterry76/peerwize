import React, { useContext, useEffect, useState } from "react";
import "../Auth/styles/auth.scss";
import logo from "../Auth/assets/logo.svg";
import loading from "../Auth/assets/loading.svg";
import error from "../Auth/assets/error.svg";
import success from "../Auth/assets/success.svg";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { email, setEmail } = useContext(AuthContext);
  const navigate = useNavigate(); // Using useNavigate hook for navigation

  const handleResetEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage(
        "A password reset link has been sent to your email. Please check your inbox to reset the password."
      );
      setEmail("");
    } catch (error) {
      setErrorMessage("No user found. Please input a registered email address.");
    }

    setIsLoading(false);
  };

  // Effect to navigate to login page after displaying success message
  useEffect(() => {
    if (successMessage !== "") {
      const timeout = setTimeout(() => {
        navigate("/"); // Navigating to login page after displaying success message
      }, 3000); // Adjust the time (in milliseconds) as needed
      return () => clearTimeout(timeout);
    }
  }, [successMessage, navigate]);

  return (
    <>
      <div className="logo__container">
        <img className="logo" src={logo} alt="peerwize logo" />
        <h6>connecting skills, creating futures...</h6>
      </div>
      <div className="auth__container">
        <h1>Forgot Password?</h1>
        <div>
          <h3>Kindly enter your email address to reset your password</h3>
        </div>
        <div className="auth__container--form">
          <form>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isLoading && <img className="loading" src={loading} alt="loading" />}
            <p className="error">{errorMessage}</p>
            <p className="success">{successMessage}</p>
            <button
              onClick={handleResetEmail}
              className="reset__password--btn"
              type="submit"
              disabled={!email}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;