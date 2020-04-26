import React from 'react'
import '../assets/header-styles.css'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import {useSelector, useDispatch} from 'react-redux'
import {logout} from '../actions/user-actions'

export const Header = () => {

    const itemCount = useSelector(state => state.cart.cartItems).length;
    const name = useSelector(state => state.user.name);
    const loggedIn = useSelector(state => state.user.loginSuccess);

    const dispatch = useDispatch();

    const clickLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="header">
        <header className="header-login-signup">

            <div className="header-limiter">

                <h1><Link to="/">Company</Link></h1>

                <nav>
                    <Link to="/products">Products</Link>
                    <Link to="/about">About</Link>
                    <Link to="/protected">Protected</Link>
                </nav>

                <ul>
                    {name === "" ? (
                        <li><Link to="/login">Login</Link></li> 
                    ) : "" }
                    <li><Link to="/signup">Sign up</Link></li>
                    <li><Link to="/cart">
                        {
                            <i>
                                <Icon size="large" name='shop' />
                                <span className='badge badge-warning' id='lblCartCount'> {itemCount} </span>
                            </i>
                        }
                        </Link>
                    </li>
                    { loggedIn ? 
                        <li onClick={clickLogout}>
                            {name} 
                            <Icon size="large" 
                            style={{"marginLeft":"10px"}} 
                            name="power"/>
                        </li> : ""
                    }
                </ul>

            </div>

        </header>
        </div>
    )
}
