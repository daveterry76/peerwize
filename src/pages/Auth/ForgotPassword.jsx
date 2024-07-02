import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { sendPostRequest } from "../../config/swr";
import useSWRMutation from "swr/mutation";

import "../Auth/styles/auth.scss";
import logo from "../Auth/assets/logo.svg";
import loading from "../Auth/assets/loading.svg";

import { AuthContext } from "../../contexts/AuthContextProvider";
import { BackArrowIcon, HamburgerIcon } from "../../assets/icons/Icons";

const ForgotPassword = () => {
  const { trigger, isMutating } = useSWRMutation(
    "/forget-password",
    sendPostRequest
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { email, setEmail } = useContext(AuthContext);

  const handleResetEmail = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");
    setIsLoading(true);

    try {
      const res = await trigger({ email });
      console.log(res);
      setIsLoading(false);
      setSuccess(
        "A password reset link has been sent to your mail box. Kindly open your email to reset password"
      );
    } catch (error) {
      setIsLoading(false);
      setError(error?.response?.data?.message);
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = "Forgot Password";
  }, []);

  return (
    <>
      <div className="logo__container">
        <img className="logo" src={logo} alt="peerwize logo" />
        <h6>connecting skills, creating futures...</h6>
      </div>
      <div className="auth__container">
        <Link to="/" className="back__btn">
          <BackArrowIcon />
        </Link>
        <img className="logo" src={logo} alt="peerwize logo" />
        <h1 className="text-center text-xl lg:text-3xl font-bold">
          Forgot Password?
        </h1>
        <div className="my-4">
          <h3 className="text-sm text-center">
            Kindly enter your email address to reset your password
          </h3>
        </div>
        <div className="auth__container--form">
          <form onSubmit={handleResetEmail}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isLoading ? (
              <img className="loading" src={loading} alt="loading" />
            ) : null}
            {error && (
              <p className="text-red-500 font-semibold text-sm mt-1">{error}</p>
            )}
            {success && (
              <p className="text-blue-500 font-semibold text-sm mt-1">
                {success}
              </p>
            )}
            <button
              className="reset__password--btn mt-3"
              disabled={!email || isMutating}
            >
              {isMutating ? <>Loading...</> : <>Reset</>}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
