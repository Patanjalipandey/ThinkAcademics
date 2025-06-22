import React from 'react'

const CartTotal = ({subtotal}) => {

    const total = subtotal + 10; // Adding shipping fee of Rs. 10
    return (
        <div>
            <div className="bg-white rounded-lg shadow-md p-6 h-fit">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">CART TOTALS</h2>

                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">₹{subtotal}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-600">Shipping Fee</span>
                        <span className="font-medium">Rs. 10.00</span>
                    </div>

                    <div className="flex justify-between border-t border-gray-200 pt-3">
                        <span className="text-gray-900 font-semibold">Total</span>
                        <span className="font-bold">₹{total}</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CartTotal