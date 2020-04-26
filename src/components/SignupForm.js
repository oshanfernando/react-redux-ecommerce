import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Header } from './Header'
import { Message } from 'semantic-ui-react'
import '../assets/login-register.css'
import {signup} from '../actions/user-actions'
import { useDispatch, useSelector } from 'react-redux'

export const SignupForm = () => {

    // state
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password1, setpassword1] = useState("")
    const [password2, setpassword2] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [hasError, setHasError] = useState(false)
    const [creatingUser, setCreatingUser] = useState(false)

    // store
    const dispatch = useDispatch();
    const userid = useSelector(state => state.user.id);
    const error = useSelector(state => state.user.createdError);
    const success = useSelector(state => state.user.createdSuccess);

    const onChange = (e) => {
        switch (e.target.name) {
            case "firstname" : setfirstname(e.target.value); break;
            case "lastname" : setlastname(e.target.value); break;
            case "email" : setemail(e.target.value); break;
            case "password1" : setpassword1(e.target.value); break;
            case "password2" : setpassword2(e.target.value); break;
            default: break;
        }
    }

    const register = () => {
        if (firstname === "") {
            setErrorMsg("First Name is required")
            setHasError(true)
        } else if (lastname === "") {
            setErrorMsg("Last Name is required")
            setHasError(true)
        } else if (email === "") {
            setErrorMsg("Email is required")
            setHasError(true)
        } else if (password1 === "") {
            setErrorMsg("Password is required")
            setHasError(true)
        } else if (password2 === "") {
            setErrorMsg("Confirm password")
            setHasError(true)
        } else if (password1 !== password2){
            setErrorMsg("Passwords do not match")
            setHasError(true)
        } else {
            setHasError(false);
            setCreatingUser(true);
            const user = {
                firstname : firstname,
                lastname: lastname,
                email: email,
                password: password1
            }
            dispatch(signup(user));

        }
    }

    const ErrorMessage = (
        <Message size="large" negative>
            {errorMsg}
        </Message>
    )

    return (
        <div>
            <Header/>
            <div className="main" style= {{"marginTop":"100px"}}>
                <div id="form">
                    <h2> Register </h2>
                    {(creatingUser && success) ? alert("Account created with id " + userid) : '' }
                    {(creatingUser && error) ? alert("Failed to create account") : '' }
                    {hasError ? ErrorMessage : ""}
                    <form>
                        <input type="text" onChange={onChange} value={firstname} id="firstname" name="firstname" placeholder="First Name" />
                        <input type="text" onChange={onChange} value={lastname} id="lastname" name="lastname" placeholder="Last Name" />
                        <input type="text" onChange={onChange} value={email} id="email" name="email" placeholder="e-mail" />
                        <input className="error" type="password" onChange={onChange} value={password1} id="password1" name="password1" placeholder="Password" />
                        <input type="password" onChange={onChange} value={password2} id="password2" name="password2" placeholder="Re-type Password" />
                        <input onClick={register} type="button" value="Sign Up" />
                    </form>

                    <div id="footer">
                        Already have an account ?
                        <Link to="/login"> Sign in Here</Link>
                    </div>

                </div>
            </div>

        </div>
    )
}
