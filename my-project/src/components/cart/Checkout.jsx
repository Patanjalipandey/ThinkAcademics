import React, { useState } from 'react'
import CartTotal from './CartTotal';
import { useLocation } from "react-router-dom";

const Checkout = () => {

    const [paymentMethod, setPaymentMethod] = useState('stripe');
    const location = useLocation();
    const subtotal = location.state?.subtotal || 0;

    return (
        <div>
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">DELIVERY INFORMATION</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left side - Delivery Information */}
                        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                                    <input
                                        type="email"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Street</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Zipcode</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                                    />
                                </div>
                            </form>
                        </div>

                        {/* Right side - Order Summary */}
                        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
                            <CartTotal
                                subtotal={subtotal}
                            />

                            <div className="border-t border-gray-200 pt-6 mb-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">PAYMENT METHOD</h2>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <label className={`flex-1 flex items-center justify-center p-3 border rounded-md cursor-pointer ${paymentMethod === 'stripe' ? 'border-black bg-gray-50' : 'hover:bg-gray-50'}`}>
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="stripe"
                                            checked={paymentMethod === 'stripe'}
                                            onChange={() => setPaymentMethod('stripe')}
                                            className="sr-only"
                                        />
                                        <span className="font-medium">Stripe</span>
                                    </label>

                                    <label className={`flex-1 flex items-center justify-center p-3 border rounded-md cursor-pointer ${paymentMethod === 'razorpay' ? 'border-black bg-gray-50' : 'hover:bg-gray-50'}`}>
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="razorpay"
                                            checked={paymentMethod === 'razorpay'}
                                            onChange={() => setPaymentMethod('razorpay')}
                                            className="sr-only"
                                        />
                                        <span className="font-medium">Razorpay</span>
                                    </label>

                                    <label className={`flex-1 flex items-center justify-center p-3 border rounded-md cursor-pointer ${paymentMethod === 'cod' ? 'border-black bg-gray-50' : 'hover:bg-gray-50'}`}>
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="cod"
                                            checked={paymentMethod === 'cod'}
                                            onChange={() => setPaymentMethod('cod')}
                                            className="sr-only"
                                        />
                                        <span className="font-medium">Cash on Delivery</span>
                                    </label>
                                </div>
                            </div>
                            <button className="w-full bg-black text-white py-3 px-4 rounded-md font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                                PLACE ORDER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout