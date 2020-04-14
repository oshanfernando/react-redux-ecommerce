import React from 'react'
import { Header } from './Header'
import 'semantic-ui-css/semantic.min.css'
import { Container} from 'semantic-ui-react'
import { ItemsList } from './ItemsList'

export const ProductsPage = () => {
    return (
        <div>
            <Header />
            <h1 style= {{"textAlign":"center"}}>Products</h1>
            <Container style= {{"marginTop":"30px"}}>
                <ItemsList/>
            </Container>
            <br/>
            <p>Photo by veeterzy from Pexels | Photo by John Tekeridis from Pexels
            </p>
        </div>
    )
}
