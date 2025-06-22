import React, { useEffect, useState } from 'react';
import axios from "../../api/axios"
import { useParams } from 'react-router-dom';
import ProductCard from '../productCard/ProductCard';
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const { id } = useParams(); // get product ID from URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const isLoggedIn = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      alert("Please login to add items to cart.");
      navigate("/login");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/cart/add",
        {
          productId: product._id,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(`${quantity} item(s) added to cart!`);
    } catch (error) {
      alert("Failed to add to cart.");
      console.error(error);
    }
  };

  if (!product) {
    return <div className="p-10 text-center">Product not found.</div>;
  }

  return (
    <>
      <div>
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image - Left Side */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <img src={product.image} alt={product.title} className="w-full md:w-1/2 object-cover" />
              </div>
            </div>

            {/* Product Details - Right Side */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <p className="text-2xl font-semibold text-gray-800 mb-6">Rs.{product.price}</p>

              <p className="text-gray-700 mb-8">
                {product.description}
              </p>

              <div className="flex items-center mt-4 gap-6 align-text-center">

                <div className="border-t border-b border-gray-200 py-6 mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Select Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 flex items-center justify-center border rounded-md font-medium ${selectedSize === size
                          ? 'bg-black text-white border-black'
                          : 'border-gray-300 hover:bg-gray-50'
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="quantity" className="font-semibold">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-20 px-2 py-1 border rounded text-center"
                  />
                </div>
              </div>

              <button onClick={handleAddToCart} className="w-full bg-black text-white py-3 px-4 rounded-md font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mb-8">
                {isLoggedIn ? "ADD TO CART" : "LOGIN TO ADD TO CART"}
              </button>

              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  100% Original product.
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cash on delivery is available on this product.
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Easy return and exchange policy within 7 days.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-center mb-6">
            <span className="text-gray-500">RELATED </span><span className="text-black">PRODUCTS</span>
          </h2>
          <ProductCard />
        </div>
      </div>
    </>
  )
}

export default ProductDetails