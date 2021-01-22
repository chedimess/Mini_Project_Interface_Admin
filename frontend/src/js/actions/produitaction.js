import axios from "axios";
import {
      GET_PRODUIT,
      
  } from "../const/actionType";

  //get product

  export const getProduits = () => async (dispatch) => {

    try {
      const res = await axios.get("/api/produit/allproduit");
     dispatch({
        type: GET_PRODUIT,
        payload: res.data, 
      });
    } catch (error) {
    console.log(error)
    }
  };
  //add product

export const addProduits = (newproduit) => async (dispatch) => {

    try {
      const res = await axios.post("/api/produit/addproduit", newproduit);
     dispatch(getProduits());
    } catch (error) {
      console.log(error)
    

    }
  };

  //delete product
export const deleteproduit = id => dispatch => {

  try {
  const res = axios.delete(`/api/produit/deleteproduit/${id}`);
    dispatch(getProduits());
    } catch (error) {
    console.log(error)
  }
  };

//edit product

export const editProduit=(id,updateproduit)=>dispatch=>{
      
  try {
    
      const res =axios.put(`/api/produit/editproduit/${id}`,updateproduit)
      dispatch(getProduits());
    } catch (error) {
     console.log(error)
    }
    };