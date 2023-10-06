import types from "../types";

const initial_state = {
  internet: true
}

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.CHECKINTERNET:
      return {
        ...state,
        internet: action.payload
      }
    default:
      return state
  }
}