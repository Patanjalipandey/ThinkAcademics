import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import About from '../components/About'
import Collections from '../components/collection/Collections'
import ContactUs from '../components/ContactUs'
import Login from '../components/accounts/Login'
import Signup from '../components/accounts/Signup'
import Cart from '../components/cart/Cart'
import Checkout from '../components/cart/Checkout'
import ProductDetails from '../components/productDetails/ProductDetails'
import Homepage from '../components/homepage/Homepage'
import ProductCard from '../components/productCard/ProductCard'

const AppRoutes = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/collection" element={<Collections />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/product-card" element={<ProductCard />} />
        </Routes>
        <div>
            <Subscribe />
            <Footer />
        </div>
    </div>
  )
}

export default AppRoutes