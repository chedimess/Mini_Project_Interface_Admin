import {
    GET_CLIENT,
} from "../const/actionType";
const initState = {
    clients:[],
   };

   export default function (state = initState, { type, payload }) {
    switch (type) {
        case GET_CLIENT:
      return {
        ...state,
        clients: payload  };
              default:
                return state;
            }
          }