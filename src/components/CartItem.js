import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Item, Button, Icon, Container } from 'semantic-ui-react'
import { changeTotal, removeFromCart } from '../actions/cart-actions'

export const CartItem = ({ item }) => {

  const [qty, setQty] = useState(1)
  const [itemid] = useState(item.id)

  const orderCount  = useSelector(state => state.cart.orderCount)

  useEffect(() => {
      setQty(orderCount.find(i=> i.id === itemid).qty)
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(changeTotal(qty + 1, itemid))
    setQty(qty + 1)
  }

  const decrease = () => {
    if (qty > 1) {
      dispatch(changeTotal(qty - 1, itemid))
      setQty(qty - 1)
    }
  }

  const removeItem = () => {
    dispatch(removeFromCart(itemid))
  }

  return (
    <Item key={item.id}>
      <Button onClick={removeItem} color="red" icon>
        <Icon name='close' />
      </Button>
      <Item.Image  size='small' src={item.image} />

      <Item.Content>
        <Item.Header>{item.name}</Item.Header>
        <Item.Meta>
          <span className='price'>$ {item.price}</span>
        </Item.Meta>
        <Item.Description>
          {
            <Container textAlign="right">

              <Button onClick={decrease} size="tiny" icon>
                <Icon name='minus' />
              </Button>

              <span style={{"fontSize":"20px", "padding":"0px 20px"}}>{qty}</span>

              <Button onClick={increment} style={{ "marginRight": "50px" }} size="tiny" icon>
                <Icon name='plus' />
              </Button>

                <Icon name='dollar' size="large"/> 
                <span style={{"fontSize":"20px"}}> {qty * item.price}</span>

            </Container>
          }
        </Item.Description>
      </Item.Content>
    </Item>
  )
}