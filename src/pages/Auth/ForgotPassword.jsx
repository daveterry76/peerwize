import React, { useContext, useEffect, useState } from "react";
import "../Auth/styles/auth.scss";
import logo from "../Auth/assets/logo.svg";
import loading from "../Auth/assets/loading.svg";
import error from "../Auth/assets/error.svg";
import success from "../Auth/assets/success.svg";
import { AuthContext } from "../../contexts/AuthContextProvider";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { email, setEmail } = useContext(AuthContext);

  const handleResetEmail = (e) => {
    // Rewrite the code here to check if a user's email exists
    // on Firebase, then use the success and error states
    // to show that

    setSuccess("");
    setError("");
    e.preventDefault();
    setIsLoading(true);
    if (email === "dave@gmail.com") {
      setSuccess(
        "A password resent link has been sent to your mail box. Kindly open your email to reset password"
      );
      setTimeout(() => setIsLoading(false), 2000);
      setEmail("");
    } else {
      setError("No user found. Please input a registered email address");
      setTimeout(() => setIsLoading(false), 2000);
      setIsEmailValid(false);
    }
  };

  useEffect(() => {
    document.title = "Forgot Password";
    setEmail("dave@gmail.com");
  }, []);

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
            {isLoading ? (
              <img className="loading" src={loading} alt="loading" />
            ) : null}
            {/* {isEmailValid && !isLoading ? <img className='success' src={success} alt='success' /> : <img className='error' src={error} alt='error' />} */}
            <p className="error">{error}</p>
            <p className="success">{success}</p>
            <button
              onClick={handleResetEmail}
              className="reset__password--btn"
              type="submit"
              disabled={!email ? true : false}
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
