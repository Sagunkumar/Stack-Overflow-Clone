import * as api from "../api";
 import { setCurrentUser } from "./currentUser";
// import { fetchAllUsers } from "./users";
export const signup = (authData, navigate) => async (dispatch) => {
    try {
      console.log("send data to backend")
      const { data } = await api.signUp(authData);
      console.log("awiting  data from backend")
      dispatch({ type: "AUTH", data });
     // dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
     // dispatch(fetchAllUsers());
      navigate("/");
    } catch (error) {
      console.log("erorr at signpup at actions")
      console.log(error);
    }
  };
  
  export const login = (authData, navigate) => async (dispatch) => {
    try {
      const { data } = await api.logIn(authData);
      dispatch({ type: "AUTH", data });
       dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
      navigate("/");
    } catch (error) {
      alert("Invalid credential");
      console.log(error);
    }
  };
  