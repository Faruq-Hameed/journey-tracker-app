import { Alert } from "react-native";
import createDataContext from "./createDataContext";
import { tokenReducer } from "../reducers/tokenReducer";


//get the current token
const getToken = (dispatch) => {
  return  () => {
      dispatch({ type: "get_token"});
    }
};

//set the token
const setToken = (dispatch) => {
  return  (token) => {
    dispatch({
      type: "set_token",
      payload: token,
    });
  };
};

//remove the token from the state
const removeToken = (dispatch) => {
  return  () => {
      dispatch({ type: "remove_token" });
  }
};

export const { Context, Provider } = createDataContext(
    tokenReducer,
  { getToken, setToken, removeToken },
 {
    token: null,
 }
);
