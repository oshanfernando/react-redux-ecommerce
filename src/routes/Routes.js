import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { ProductsPage } from '../components/ProductsPage'
import { CartPage } from '../components/CartPage'
import { LoginForm } from '../components/LoginForm'
import { SignupForm } from '../components/SignupForm'
import PrivateRoute from './PrivateRoute'
import { ProtectedPage } from '../components/ProtectedPage'
import { About } from '../components/About'
import { ProductView } from '../components/ProductView'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/products" component={ProductsPage}/>
                <Route exact path="/cart" component={CartPage}/>
                <Route exact path="/login" component={LoginForm}/>
                <Route exact path="/signup" component={SignupForm}/>
                <Route exact path="/about" component={About} />
                <Route path="/product" component={ProductView}/>
                <PrivateRoute exact path="/protected" component={ProtectedPage}/>
            </Switch>
        </BrowserRouter>
    )
}
