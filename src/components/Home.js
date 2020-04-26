import React from 'react'
import { Header } from './Header'
import '../assets/home.css'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <Header/>
            <div className="hero">
                <div className="hero-inner">
                    <h1>My Shopping Website</h1>
                    <h2>Photo by Ben Kolde on Unsplash!</h2>
                    <Link to="/products" className="btn">View Products</Link>
                </div>
            </div>
        </div>
    )
}
