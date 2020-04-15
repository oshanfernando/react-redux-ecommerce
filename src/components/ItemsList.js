import React, { useState } from 'react'
import { Card, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cart-actions'

export const ItemsList = () => {

    const initialState = [
        {
            id: 1,
            name: 'MacBook Pro 1',
            image: '/images/macbook.jpg',
            price: 100,
        },
        {
            id: 2,
            name: 'MacBook Pro 2',
            image: '/images/macbook2.jpg',
            price: 200,
        },
        {
            id: 3,
            name: 'MacBook Pro 3',
            image: '/images/macbook.jpg',
            price: 300,
        },
        {
            id: 4,
            name: 'MacBook Pro 4',
            image: '/images/macbook2.jpg',
            price: 400,
        },
        {
            id: 5,
            name: 'MacBook Pro 5',
            image: '/images/macbook.jpg',
            price: 500,
        },
        {
            id: 6,
            name: 'MacBook Pro 6',
            image: '/images/macbook2.jpg',
            price: 600,
        },
        {
            id: 7,
            name: 'MacBook Pro 7',
            image: '/images/macbook.jpg',
            price: 700,
        },
        {
            id: 8,
            name: 'MacBook Pro 8',
            image: '/images/macbook2.jpg',
            price: 800,
        }
    ]

    // state
    const [products] = useState(initialState)
    const [disabledItems, setDisabledItems] = useState([])

    // redux dispatcher
    const dispatch = useDispatch();

    const addItem = (e) => {
        const item = products.find(item => (
            item.id === Number(e.currentTarget.getAttribute('data-id'))
        ))
        
        dispatch(addToCart(item))
        setDisabledItems([...disabledItems, item.id])
    }

    return (
        <Card.Group stackable itemsPerRow={4}>
            {
                products.map(item => {
                    return (
                        <Card key={item.id}
                            image={item.image}
                            header={item.name}
                            extra={
                                <Button
                                    disabled = {disabledItems.indexOf(item.id) > -1 }
                                    data-id={item.id}
                                    onClick={addItem} 
                                    floated="right" color="grey" size="large" animated='fade'>
                                    <Button.Content visible>$ {item.price}</Button.Content>
                                    <Button.Content hidden>Add to Cart</Button.Content>
                                </Button>
                            }
                        />
                    )
                })
            }
        </Card.Group>
    )
}
