import React from 'react'
import { Container, Icon, Header } from 'semantic-ui-react'

export const EmptyCart = () => {
    return (
        <Container style={{"marginTop":"100px"}}>
            <Header as='h2' icon textAlign='center'>
            <Icon color="blue" name='shopping cart' circular />
            <Header.Content>Your Shopping Cart is Empty !</Header.Content>
    </Header>
        </Container>
    )
}
