import React, { useEffect, useState } from "react";
import { productDetails } from '../../assets/cardData/productData'
import Card from './Card'
import axios from "../../api/axios"
import { useNavigate } from 'react-router-dom'

const ProductCard = () => {
    const [products, setProducts] = useState([]);

    // Fetch products on page load
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("/products"); // This hits /api/products
                setProducts(res.data);
            } catch (err) {
                alert("Failed to fetch products:", err);
            }
        };

        fetchProducts();
    }, []);
    return (

        <section className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {products.map((product) => (
                    <Card
                        key={product._id}
                        id={product._id}
                        title={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProductCard