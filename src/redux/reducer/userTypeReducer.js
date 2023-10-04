import types from "../types";

const initial_state = {
    userType: undefined
}

export default function (state = initial_state, action) {
    switch (action.type) {
        case types.USER_TYPE:
            return {
                ...state,
                userType: action.payload,
            }
        default:
            return state
    }
}