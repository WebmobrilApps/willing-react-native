import types from "../types";

const initial_state = {
  loginInfo: undefined
}

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        loginInfo: action.payload
      }
    case types.LOGOUT:
      return {
        ...state,
        loginInfo: undefined,
      }
    default:
      return state
  }
}