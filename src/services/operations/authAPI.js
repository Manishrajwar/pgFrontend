import { toast } from "react-hot-toast";

import { setLoading, setToken } from "../../reducer/slices/authSlice";
import { setUser } from "../../reducer/slices/profileSlice";
import { endpoints } from "../api";
import {makeUnauthenticatedPOSTRequest,} from "../serverHelper";

const { SIGNUP_API, LOGIN_API} = endpoints;


// ! signup
export function signUp(email , password , navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await makeUnauthenticatedPOSTRequest(SIGNUP_API, { email , password   });

      console.log("SIGNUP API RESPONSE............", response);

      if (!response.success) {
        toast.error(response.message);
      } else {
        toast.success("Signup Successful");
        navigate("/login");
      }
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
      navigate("/signup");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

// ! login
export function login(email , password, navigate) {

  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await makeUnauthenticatedPOSTRequest(
        LOGIN_API,
        {email , password}
      );

      if (!response.success) {
        throw new Error(response.data.message);
      } else {
        toast.success("login Successfully");
        dispatch(setToken(response.token));
      }

      localStorage.setItem("token", JSON.stringify(response.token));
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/room")

    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error("Login Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}


// ! logout
export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/");
    
  };
}
