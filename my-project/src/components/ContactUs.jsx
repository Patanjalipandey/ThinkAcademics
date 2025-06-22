import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <div className="px-6 md:px-20 py-16">
                {/* Header */}
                <h2 className="text-center text-2xl font-semibold mb-10">
                    <span className="text-gray-400">CONTACT </span>
                    <span className="text-black">US</span>
                </h2>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://res.cloudinary.com/dsbdbtrhk/image/upload/v1747291385/jvzqr5h4basopdc4sat5.webp"
                            alt="contact"
                            className="rounded w-full object-cover"
                        />
                    </div>

                    {/* Form */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="5"
                                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-2 rounded hover:opacity-90 transition duration-200"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs