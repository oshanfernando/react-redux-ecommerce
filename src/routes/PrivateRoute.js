import React from 'react';
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isloggedIn = useSelector(state => state.user.loginSuccess)
    return (
        <Route {...rest}
            render={props => (
                isloggedIn === true
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: '/login',
                        redirected: true
                    }}
            />
            )}
        />
    )
};

export default PrivateRoute;