import types from "../types";

const initial_state = {
  language: 'en'
}

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default:
      return state
  }
}