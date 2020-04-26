import {LOGIN, LOGOUT, SIGNUP, CREATING_USER} from './action-types'

export const checkLogin = credentials => dispatch => {
    // fetch("http://localhost:8081/login", {
    //     method : "POST",
    //     body: JSON.stringify(credentials)
    // })
    // .then(res => res.json())
    // .then(data => dispatch({
    //     type: LOGIN,
    //     payload: data
    // }))

    if(credentials.email === "john@test.com") {
        dispatch({
            type: LOGIN,
            payload: {
                isvaliduser: true,
                name: "John"
            }
        })
    } else {
        dispatch({
            type: LOGIN,
            payload: {isvaliduser: false}
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}

export const signup = (user) => dispatch => {
    dispatch({
        type: CREATING_USER
    })

    // fetch("http://localhost:8081/signup", {
    //     method : "POST",
    //     body: JSON.stringify(user)
    // })
    // .then(res => res.json())
    // .then(data => dispatch({
    //     type: LOGIN,
    //     payload: data
    // }))
    
    if(user.firstname === "error") {
        dispatch({
            type: SIGNUP,
            payload: {
                created: false,
                error:true,
                id: 0
            }
        })
    } else {
        dispatch({
            type: SIGNUP,
            payload: {
                created: true,
                error:false,
                id: 1
            }
        })
    }
    
}