import axios from "axios";
import { backend_url } from "../constants";
import toast from "react-hot-toast";

const registerUser = (data) => {
  const result = axios
    .post(`${backend_url}/register`, data)
    .then((response) => {
      toast.success(`Account created for ${response.data.name}`);
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data
    })
    .catch((err) => {
      toast.error(`Error ${err.response.data.detail}`);
      return err;
    });
    return result
};

const loginUser = (data) => {
  const result = axios
    .post(`${backend_url}/login`, data)
    .then((response) => {
      localStorage.setItem("access_token", response.data.access_token);

      localStorage.setItem("refresh_token", response.data.refresh_token);

      localStorage.setItem("user", JSON.stringify(response.data.user));

      toast.success(`Login successful for ${response.data.user.name}`)

      return response
    })
    .catch((err) => {
      err.response.data.detail ? toast.error(`Error: ${err.response.data.detail}`) : toast.error(err)
    });
    return result
};

export { registerUser, loginUser };
