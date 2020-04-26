import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cart-actions'
import  '../assets/productcard.css'

export const ItemsList = (props) => {

    const initialState = [
        {
            id: 1,
            name: 'MacBook Pro 1',
            image: '/images/img1.png',
            price: 100,
        },
        {
            id: 2,
            name: 'MacBook Pro 2',
            image: '/images/img2.png',
            price: 200,
        },
        {
            id: 3,
            name: 'MacBook Pro 3',
            image: '/images/img1.png',
            price: 300,
        },
        {
            id: 4,
            name: 'MacBook Pro 4',
            image: '/images/img2.png',
            price: 400,
        },
        {
            id: 5,
            name: 'MacBook Pro 5',
            image: '/images/img1.png',
            price: 500,
        },
        {
            id: 6,
            name: 'MacBook Pro 6',
            image: '/images/img2.png',
            price: 600,
        },
        {
            id: 7,
            name: 'MacBook Pro 7',
            image: '/images/img1.png',
            price: 700,
        },
        {
            id: 8,
            name: 'MacBook Pro 8',
            image: '/images/img2.png',
            price: 800,
        }
    ]

    // state
    const [products] = useState(initialState)

    // redux dispatcher
    const dispatch = useDispatch();

    const addItem = (e) => {
        const item = products.find(item => (
            item.id === Number(e.currentTarget.getAttribute('data-id'))
        ))

        dispatch(addToCart(item))
    }

    const viewProduct = (item) => {
        props.history.push({
            pathname: '/product',
            search: '?productid=' + item.id,
            state: { item }
        });
    }

    return (
        <div className="main-products">
            {
                products.map(item => {
                    return (
                        <div key={item.id} className="card">
                            <div className="image">
                                <img src={item.image} onClick={() => viewProduct(item)} alt="" />
                            </div>
                            <div className="details">
                                <h4>{item.name}</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                                <div className="footer">
                                    <div className="price">$ {item.price}</div>
                                    <Icon data-id={item.id} onClick={addItem} className="cart" size="large" color="grey" name="add to cart"/>
                                </div>
                            </div>
                        </div>
                    );
                }
                )
            }
        </div>
    )

    // return (
    //     <Card.Group stackable itemsPerRow={4}>
    //         {
    //             products.map(item => {
    //                 return (
    //                     <Card key={item.id}
    //                         image={item.image}
    //                         header={item.name}
    //                         extra={
    //                             <div>
    //                                 <Button primary style={{"textAlign":"center"}}
    //                                 onClick={() => viewProduct(item)} 
    //                                 floated="left" color="grey" size="large">
    //                                 <Button.Content>Details</Button.Content>
    //                             </Button>
    //                             <Button
    //                                 disabled = {disabledItems.indexOf(item.id) > -1 }
    //                                 data-id={item.id}
    //                                 onClick={addItem} 
    //                                 floated="right" color="grey" size="large" animated='fade'>
    //                                 <Button.Content visible>$ {item.price}</Button.Content>
    //                                 <Button.Content hidden>Add to Cart</Button.Content>
    //                             </Button>

    //                             </div>
    //                         }
    //                     />
    //                 )
    //             })
    //         }
    //     </Card.Group>
    // )
}
