import types from "../types";

const initial_state = {
    loader: false
}

export default function (state = initial_state, action) {
    switch (action.type) {
        case types.LOADER:
            // console.log('loader reducer',action.payload);
          return {
            ...state,
            loader: action.payload
          }
        default:
          return state
      }
}