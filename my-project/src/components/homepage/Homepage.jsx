import React from 'react'
import ProductCarousel from '../carousel/ProductCarousel'
import { productDetails } from '../../assets/cardData/productData'
import ProductCard from '../productCard/ProductCard'
import Login from '../accounts/Login'
import Card from '../productCard/Card'

const Homepage = () => {
    return (
        <>
            <div>
                <ProductCarousel />
            </div>
            <div>
                <ProductCard />
            </div>
        </>

    )
}

export default Homepage