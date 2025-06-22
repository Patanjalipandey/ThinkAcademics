import React from 'react'

const Subscribe = () => {
    return (
        <div className='mb-5'>
            <div className="text-center space-y-4">
                <p className="font-semibold">Join the Chlothzy Style Community</p>
                <h2 className="text-2xl font-bold">Subscribe now & get 20% off</h2>
                <p className="text-gray-600">Chlothzy Fashion – Where Style Meets Confidence.</p>
                <div className="flex justify-center mt-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-64 px-4 py-2 border border-gray-300 rounded-l"
                    />
                    <button className="bg-black text-white px-6 py-2 rounded-r">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe