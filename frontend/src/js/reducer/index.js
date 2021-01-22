import { combineReducers } from "redux";
import categoryreducer from "./categoryreducer";
import produitreducer from "./produitreducer";
import clientreducer from "./clientreducer"


export default combineReducers({
  categoryreducer,produitreducer,clientreducer,
  
});