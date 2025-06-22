import React, { useEffect, useState } from "react";
import CartTotal from './CartTotal'
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios"


const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const getCartKey = () => `cart_${userId}`;

    // Load cart from localStorage on mount
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const token = localStorage.getItem("token");

                const res = await axios.get("http://localhost:5000/api/cart", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // Map backend cart items to frontend format
                const items = (res.data.products || []).map((item) => ({
                    _id: item.productId._id,
                    name: item.productId.name,
                    image: item.productId.image,
                    price: item.productId.price,
                    quantity: item.quantity,
                }));

                setCartItems(items);
            } catch (err) {
                console.error("Failed to fetch cart", err);
            }
        };

        fetchCart();
    }, []);

    //total price
    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    //remove item from cart
    const handleRemove = (id) => {
        const updatedCart = cartItems.filter((item) => item._id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    return (
        <div>
            <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">YOUR CART</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left side - Product List */}
                        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                            {/* Placeholder for products - replace with your product component */}
                            {cartItems.length === 0 ? (
                                <p>Your cart is empty.</p>
                            ) : (
                                <div className="space-y-4">
                                    {cartItems.map((item) => (
                                        <div
                                            key={item._id}
                                            className="flex items-center justify-between border p-4 rounded shadow-sm"
                                        >
                                            <div className="flex items-center gap-4">
                                                <img src={item.image} alt={item.name} className="h-20 w-20 object-contain" />
                                                <div>
                                                    <h3 className="font-semibold line-clamp-2">{item.name}</h3>
                                                    <p>₹{item.price} x {item.quantity}</p>

                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleRemove(item._id)}
                                                className="text-red-600 hover:underline"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {/* Right side - Cart Summary */}
                        <div>
                            <CartTotal
                                subtotal={getTotal()}
                            />
                            <button onClick={() => navigate("/checkout", { state: { subtotal: getTotal() } })} className="w-full mt-8 bg-black text-white py-3 px-4 rounded-md font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                                PROCEED TO CHECKOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart