import axios from "axios";
import {
      GET_CLIENT,
      
  } from "../const/actionType";

  //get client
  export const getClients = () => async (dispatch) => {

    try {
      const res = await axios.get("/api/client/allclient");
     dispatch({
        type: GET_CLIENT,
        payload: res.data, 
      });
    } catch (error) {
    console.log(error)
    }
  };
  //add client  
export const addClients = (newclient) => async (dispatch) => {

    try {
      const res = await axios.post("/api/client/addclient", newclient);
     dispatch(getClients());
    } catch (error) {
      console.log(error)
    }
  };
//delete client
export const deleteclient = id => dispatch => {

  try {
  const res = axios.delete(`/api/client/deleteclient/${id}`);
    dispatch(getClients());
    } catch (error) {
    console.log(error)
  }
  };
//edit client

    export const editClient=(id,updateclient)=>dispatch=>{
      
  try {
    
      const res =axios.put(`/api/client/editclient/${id}`,updateclient)
      dispatch(getClients());
    } catch (error) {
     console.log(error)
    }
    };
