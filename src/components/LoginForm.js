import React, { useState, useEffect } from 'react'
import '../assets/login-register.css'
import { Header } from './Header'
import { Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkLogin } from '../actions/user-actions'

export const LoginForm = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [loginAttempts, setAttempts] = useState(0);
    const [hasError, setHasError] = useState(false);

    const dispatch = useDispatch();
    const loginSuccess = useSelector(state => state.user.loginSuccess);

    useEffect(() => {
        if (props.location.redirected) {
            setErrorMsg("This is a protected route, You must login to continue. Use john@test.com to login")
            setHasError(true)
        }
        if (loginSuccess) {
            props.history.push("/protected")
        } else if (loginSuccess === false && loginAttempts > 0) {
            setErrorMsg("Incorrect email/password")
            setHasError(true)
        }// eslint-disable-next-line
    }, [props.location.redirected, props.history, loginSuccess, loginAttempts])

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = () => {
        if (email === "" && password === "") {
            setErrorMsg("Email and Password required!")
            setHasError(true)
        } else if (email === "") {
            setErrorMsg("Email cannot be empty")
            setHasError(true)
        }
        else if (password === "") {
            setErrorMsg("Password cannot be empty")
            setHasError(true)
        } else {
            dispatch(checkLogin({ email, password }))
            setAttempts(loginAttempts + 1)
        }
    }

    const ErrorMessage = (
        <Message size="large" negative>
            {errorMsg}
        </Message>
    )

    return (
        <div>
            <Header />
            <div className="main" style= {{"marginTop":"100px"}}>
                <div id="form">
                    <h2> Sign In </h2>
                    <div>
                        <img src="/images/user.png" id="icon" alt="User Icon" />
                    </div>
                    {hasError ? ErrorMessage : ""}
                    <form>
                        <input type="text" required onChange={onChangeEmail} name="email" value={email} placeholder="e-mail" />
                        <input type="password" required onChange={onChangePassword} name="password" value={password} placeholder="password" />
                        <input type="button" onClick={login} value="Log In" />
                    </form>

                    <div id="footer">
                        No account yet ?
                        <Link to="/signup"> Sign Up Here</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
