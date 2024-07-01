import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { sendPostRequest } from "../../config/swr";
import useSWRMutation from "swr/mutation";

import logo from "../Auth/assets/logo.svg";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { BackArrowIcon } from "../../assets/icons/Icons";

const SignUp = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phoneNumber,
    setPhoneNumber,
    createPassword,
    setCreatePassword,
    confirmPassword,
    setConfirmPassword,
  } = useContext(AuthContext);

  const { trigger, isMutating } = useSWRMutation("/signup", sendPostRequest);

  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const selectCountryRef = useRef();
  const selectCityRef = useRef();
  const navigate = useNavigate();

  const handleShowCreatePassword = () => {
    setShowCreatePassword(!showCreatePassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const countryValues = [
    {
      value: 1,
      label: "Ghana",
    },
    {
      value: 2,
      label: "Nigeria",
    },
    {
      value: 3,
      label: "South Africa",
    },
  ];

  const cityValues = [
    {
      value: 1,
      label: "Abuja",
    },
    {
      value: 2,
      label: "Lagos",
    },
    {
      value: 3,
      label: "Port Harcourt",
    },
  ];

  const handleSignUp = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password: createPassword,
      confirmPassword,
      firstName,
      lastName,
      phoneNumber,
      country: selectedCountry,
      city: selectedCity,
    };

    try {
      const res = await trigger(data);
      console.log(res);
      alert("Signup was successful");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "An error occurred");
    }
  };

  const btnDisabled =
    !email ||
    !firstName ||
    !lastName ||
    !phoneNumber ||
    !selectedCountry ||
    !selectedCity ||
    !createPassword ||
    !confirmPassword;

  useEffect(() => {
    document.title = "Sign Up on Peerwize";
  });

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
          Sign up on <span>Peerwize</span>
        </h1>
        <div className="flex justify-center items-center gap-4 mt-4 w-full">
          <hr className="w-1/4" />
          <h3>
            Already have an account?&nbsp;
            <Link style={{ textDecoration: "none" }} to="/">
              <span>Login</span>
            </Link>
          </h3>
          <hr className="w-1/4" />
        </div>
        <div className="auth__container--form my-4">
          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <select
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                selectCountryRef.current.style.color = "black";
              }}
              ref={selectCountryRef}
              aria-label="label for country select"
              title="select"
            >
              <option disabled selected>
                Country
              </option>
              {countryValues.map((country) => (
                <option>{country.label}</option>
              ))}
            </select>
            <select
              onChange={(e) => {
                setSelectedCity(e.target.value);
                selectCityRef.current.style.color = "black";
              }}
              ref={selectCityRef}
              aria-label="label for city select"
              title="select"
            >
              <option disabled selected>
                City
              </option>
              {cityValues.map((city) => (
                <option>{city.label}</option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className="flex justify-center items-center auth__container--password">
              <input
                type={showCreatePassword ? "text" : "password"}
                placeholder="Create Password"
                value={createPassword}
                onChange={(e) => setCreatePassword(e.target.value)}
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
                  className="w-6 h-6"
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
                  className="w-6 h-6"
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
            <h6 className="text-sm">Minimum 8 characters including a number</h6>
            <div className="flex justify-center items-center auth__container--password">
              <input
                type={handleShowConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength={8}
              />
              {handleShowConfirmPassword ? (
                <svg
                  onClick={handleShowConfirmPassword}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  onClick={handleShowConfirmPassword}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
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
            <button
              className="auth__container--btn"
              disabled={btnDisabled || isMutating}
            >
              {isMutating ? <>Loading...</> : <>Sign Up</>}
            </button>
          </form>
        </div>
        <h5>
          By continuing, you agree to our <span>Terms of service</span>&nbsp;
          and&nbsp;
          <span>Privacy policy</span>
        </h5>
      </div>
    </>
  );
};

export default SignUp;
