import React from 'react'
import { Icon } from 'semantic-ui-react'

export const EmptyCart = () => {
    return (
        <div  style={{"textAlign":"center","marginTop":"100px"}}>
            <Icon color="blue" size="huge" name="cart"></Icon>
            <h1>Your Cart is Empty !</h1>
        </div>
    )
}
