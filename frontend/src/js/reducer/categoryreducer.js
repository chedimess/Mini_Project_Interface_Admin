import {
    GET_CATEGORY,
} from "../const/actionType";
const initState = {
    categories:[],
   };

   export default function (state = initState, { type, payload }) {
    switch (type) {

        case GET_CATEGORY:
      return {
        ...state,
        categories: payload  };
              default:
                return state;
            }
          }