import React from 'react'
import { Header } from './Header';

export const ProtectedPage = () => {
    
    return (
        <div>
            <Header/>
            <h1 style={{"textAlign":"center","marginTop":"110px"}}>This is a protected page</h1>
        </div>
    )
}
