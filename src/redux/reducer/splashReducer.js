import types from "../types";

const initial_state = {
    splash: false
}

export default function (state = initial_state, action) {
    switch (action.type) {
        case types.IS_FIRST_TIME:
          return {
            ...state,
            splash: action.payload
          }
        default:
          return state
      }
}