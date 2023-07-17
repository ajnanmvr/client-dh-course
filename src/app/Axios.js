import axios from "axios";
import Cookies from "js-cookie";

const Axios = axios.create({
  // baseURL: "http://localhost:5000/api/v1",
  baseURL: "https://dhcourse.vercel.app/api/v1",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
  withCredentials: true,
});

export default Axios;
