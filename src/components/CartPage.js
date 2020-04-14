import React from 'react'
import { useSelector} from 'react-redux'
import { Header } from './Header'
import { CartItem } from './CartItem'
import { Item } from 'semantic-ui-react'
import { EmptyCart } from './EmptyCart'

export const CartPage = () => {

    const cartItems = useSelector(state => state.cart.cartItems)
    const total = useSelector(state => state.cart.total)

    return (
        <div>
            <Header />
            <br />
            <h1 style={{"textAlign":"center"}}>Shopping Cart</h1>
            <Item.Group divided style={{"margin":"20px 50px"}}>
                {
                    cartItems.map(item => {
                        return <CartItem key={item.id} item = {item}/>
                    })
                }
                {
                    cartItems.length > 0 ? 
                    <h1 style={{"textAlign":"right", "marginTop":"50px"}}>Total : $ {total}</h1>
                    : <EmptyCart/>
                }
                
            </Item.Group>,
        </div>
    )
}
