import { LOGIN, LOGOUT, SIGNUP, CREATING_USER } from "../actions/action-types"

const initialState = {
    loginSuccess: false,
    name: "",
    id: 0,
    creating: false,
    createdSuccess: false,
    createdError: false
}

export default function (state = initialState ,action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loginSuccess: action.payload.isvaliduser,
                name: action.payload.name }
        case LOGOUT: {
            return {
                ...state,
                loginSuccess: false,
                name: ""
            }
        }
        case CREATING_USER: {
            return {...state, creating: true}
        }
        case SIGNUP: {
            console.log(action)
            return {
                ...state,
                creating: false,
                id: action.payload.id,
                createdSuccess: action.payload.created,
                createdError: action.payload.error
            }
        }
        default: return state
    }
}