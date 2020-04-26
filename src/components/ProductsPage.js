import React from 'react'
import { Header } from './Header'
import 'semantic-ui-css/semantic.min.css'
import { ItemsList } from './ItemsList'

export const ProductsPage = (props) => {
    return (
        <div>
            <Header />
            <h1 style= {{"textAlign":"center","marginTop":"110px"}}>Products</h1>
            <ItemsList {...props}/>
            <br/>
            <p>Photo by veeterzy from Pexels | Photo by John Tekeridis from Pexels
            </p>
        </div>
    )
}
