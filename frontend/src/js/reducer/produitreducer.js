import {
    GET_PRODUIT,
} from "../const/actionType";
const initState = {
    produits:[],
   };

   export default function (state = initState, { type, payload }) {
    switch (type) {
        case GET_PRODUIT:
      return {
        ...state,
        produits: payload  };
              default:
                return state;
            }
          }