import React from 'react'
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 px-6 py-10 border-t">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Left Column – Logo & Description */}
                <div>
                    <div className="text-3xl font-bold mb-4">
                        <span className="text-yellow-500 italic">Game</span>Zone
                        <div className="text-sm mt-1">GameZone pvt. ltd.</div>
                    </div>
                    <p className="text-sm leading-relaxed">
                        Chlothzy Fashion brings bold elegance to your wardrobe. From bodycon dresses to chic essentials, we redefine style. Perfect fits, premium fabrics — confidence in every thread. Step into the spotlight with Chlothzy — where fashion speaks.
                    </p>
                </div>

                {/* Middle Column – Links */}
                <div>
                    <h3 className="text-md font-semibold mb-4">COMPANY</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-black">Home</a></li>
                        <li><a href="/about" className="hover:text-black">About Us</a></li>
                        <li><a href="/delivery" className="hover:text-black">Delivery</a></li>
                        <li><a href="/privacy" className="hover:text-black">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Right Column – Contact Info */}
                <div>
                    <h3 className="text-md font-semibold mb-4">GET IN TOUCH</h3>
                    <p className="text-sm"><strong>Phone:</strong> 8505835814</p>
                    <p className="text-sm"><strong>Email:</strong> contact@chlothzy.shop</p>
                    <p className="text-sm mt-2">
                        <strong>Address:</strong><br />
                        Unit-113, Malabar Hill<br />
                        Maharashtra - 400006
                    </p>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="text-center mt-10 border-t pt-6 text-sm text-gray-600">
                <p>Copyright © 2025 <strong>chlothzy.shop</strong> – All Rights Reserved.</p>
                <p className="mt-2">Follow us on Instagram for daily style inspo</p>
                <div className="mt-2 flex justify-center">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-xl hover:text-pink-600" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer