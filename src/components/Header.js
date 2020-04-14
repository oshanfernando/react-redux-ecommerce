import React from 'react'
import '../assets/header-styles.css'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import {useSelector} from 'react-redux'

export const Header = () => {

    const itemCount = useSelector(state => state.cart.cartItems).length

    return (
        <header className="header-login-signup">

            <div className="header-limiter">

                <h1><Link to="#">Ecommerce<span>Demo</span></Link></h1>

                <nav>
                    {/* <Link to="#">Home</Link> */}
                    <Link to="/products">Products</Link>
                    <Link to="#">About</Link>
                </nav>

                <ul>
                    <li><Link to="#">Login</Link></li>
                    <li><Link to="#">Sign up</Link></li>
                    <li><Link to="/cart">
                        {
                            <i>
                                <Icon size="large" name='shop' />
                                <span className='badge badge-warning' id='lblCartCount'> {itemCount} </span>
                            </i>
                        }
                        </Link>
                    </li>
                </ul>

            </div>

        </header>
    )
}
