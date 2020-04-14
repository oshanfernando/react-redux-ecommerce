import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { ProductsPage } from '../components/ProductsPage'
import { CartPage } from '../components/CartPage'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ProductsPage}/>
                <Route exact path="/products" component={ProductsPage}/>
                <Route exact path="/cart" component={CartPage}/>
            </Switch>
        </BrowserRouter>
    )
}
