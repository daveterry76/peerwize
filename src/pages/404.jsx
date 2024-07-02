import { useNavigate } from "react-router-dom";

import logo from "../../src/pages/Auth/assets/logo.svg";

const NoRoute = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <img src={logo} alt="peerwize logo" className="w-24 h-24 mb-8" />
      <h1 className="text-2xl font-bold my-4">404 Page Not Found</h1>
      <p>Seems like you're lost?</p>
      <button
        className="bg-[#37BBCA] text-white rounded-md px-4 py-2 my-4"
        onClick={() => navigate("/dashboard")}
      >
        Go back to home
      </button>
    </div>
  );
};

export default NoRoute;
