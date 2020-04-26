import React, {useState} from 'react'
import { Grid, Image, Button, Icon } from 'semantic-ui-react'
import { Header } from './Header'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cart-actions'

export const ProductView = (props) => {

    const [added, setadded] = useState(false)

    const dispatch = useDispatch()

    const onClick = () => {
        setadded(true)
        dispatch(addToCart(props.location.state.item))
    }

    return (
        <div>
            <Header/>
            <div>
            <Grid style={{"marginTop":"100px"}} stackable>
                <Grid.Column width={9}>
                    <Image size="huge" src={props.location.state.item.image} />
                </Grid.Column>
                <Grid.Column style={{"textAlign":"left", "marginTop":"20px"}} width={4}>
                    <h1>{props.location.state.item.name}</h1>
                    <h3>$ {props.location.state.item.price}</h3>
                    <div style={{"marginTop":"20px"}}>
                    <p style={{"lineHeight": "2.5em"}}>
                    2.3GHz 8‑core 9th‑generation Intel Core i9 processor, 
                    Turbo Boost up to 4.8GHz
                    16GB 2666MHz DDR4 memory
                    AMD Radeon Pro 5500M with 4GB of GDDR6 memory
                    1TB SSD storage
                    16-inch Retina display with True Tone
                    </p>
                    <div style={{"marginTop":"40px"}}>
                        <Button style={{"width":"100%"}} primary disabled={added} onClick={onClick} size="large"> 
                        <Icon name="cart"/>
                        Add to Cart</Button>
                    </div>

                    </div>
                </Grid.Column>
            </Grid>
            </div>

        </div>
    )
}
