import { SWRConfig } from "swr";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export const BASE_URL = "peerwize-api.vercel.app/users";

export function getUserInfo() {
  if (window.localStorage.getItem("userInfo")) {
    return JSON.parse(window.localStorage.getItem("userInfo"));
  }
  return null;
}

export function setUserInfo(userInfo) {
  window.localStorage.setItem(
    "userInfo",
    JSON.stringify({
      ...userInfo,
      userInfoLastUpdatedTime: Date.now(),
    })
  );
}

export function clearUserInfo() {
  window.localStorage.removeItem("userInfo");
}

export function getToken() {
  return window.localStorage.getItem("token");
}

export function setToken(token) {
  window.localStorage.setItem("token", token);
}

export function clearToken() {
  window.localStorage.removeItem("token");
}

export function useLogout() {
  const navigate = useNavigate();
  return () => {
    clearToken();
    clearUserInfo();
    navigate("/login");
  };
}

const axiosInstance = axios.create({
  baseURL: "https://" + BASE_URL,
});

export async function sendPostRequest(subPath, { arg }) {
  return axiosInstance.post(subPath, arg);
}

export async function sendDeleteRequest(subPath, { arg }) {
  const { subUrl, payload } = arg;
  return axiosInstance.delete(`${subPath}${subUrl ?? ""}`, { data: payload });
}

export async function sendGetRequest(subPath, { arg }) {
  return axiosInstance.get(`${subPath}${arg}`);
}

export async function sendBlobRequest(subPath, { arg }) {
  return axiosInstance.get(`${subPath}${arg}`, {
    responseType: "blob",
  });
}

export async function sendPutRequest(subPath, { arg }) {
  return axiosInstance.put(subPath, arg);
}

export async function sendPatchRequest(subPath, { arg }) {
  return axiosInstance.patch(subPath, arg);
}

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use((res) => {
  const updatedToken = res.headers.get("authToken");
  if (updatedToken) setToken(updatedToken);
  return res;
});

const CustomSWR = ({ children }) => {
  const logout = useLogout();

  const handleError = (error) => {
    if (error.response && error.response.status === 401) {
      logout();
    } else {
      console.log(error);
    }
  };

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        onError: (error) => handleError(error),
        fetcher: (url) => axiosInstance.get(url).then((res) => res.data),
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default CustomSWR;
