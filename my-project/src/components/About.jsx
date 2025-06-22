import React from 'react'

const About = () => {
    return (
        <div className='container'>
            <div className="px-6 md:px-20 py-16 space-y-16">
                {/* ABOUT US */}
                <h2 className="text-xl font-semibold mb-4 items-center flex justify-center">
                    <span className="text-gray-400">ABOUT </span><span className="text-black">US</span>
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <img
                        src="https://chlothzy.shop/assets/about_img-CnrQFd3s.png"
                        alt="about"
                        className="w-full md:w-1/2 object-cover rounded"
                    />
                    <div className="md:w-1/2">

                        <p className="text-gray-700 mb-4">
                            <strong>Chlothzy</strong> is your go-to destination for premium fashion that speaks elegance, confidence, and modern style.
                            We believe in celebrating every body type through bold and beautiful silhouettes—especially our signature
                            <strong> bodycon dresses</strong> designed to turn heads.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Our curated collections reflect the latest trends while maintaining timeless quality.
                            Whether you're dressing up for a party or owning your everyday look,
                            <strong> Chlothzy</strong> ensures you're always fashion-forward with comfort and flair.
                        </p>
                        <h3 className="font-semibold mb-1">Our Mission</h3>
                        <p className="text-gray-700">
                            At <strong>Chlothzy</strong>, our mission is to empower individuals through style.
                            We aim to offer easy access to high-quality, trendsetting apparel that makes you feel confident in your own skin—
                            especially with our standout bodycon range.
                        </p>
                    </div>
                </div>

                {/* WHY CHOOSE US */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-10">
                        <span className="text-gray-400">WHY </span>
                        <span className="text-black">CHOOSE US</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="border p-6">
                            <h3 className="font-semibold mb-2">Flattering Fits:</h3>
                            <p className="text-sm text-gray-600">
                                Our bodycon dresses are crafted to enhance every curve with premium stretchable fabrics.
                            </p>
                        </div>
                        <div className="border p-6">
                            <h3 className="font-semibold mb-2">Effortless Shopping:</h3>
                            <p className="text-sm text-gray-600">
                                Browse, choose, and flaunt – our site makes fashion accessible and seamless to shop.
                            </p>
                        </div>
                        <div className="border p-6">
                            <h3 className="font-semibold mb-2">Fashion that Empowers:</h3>
                            <p className="text-sm text-gray-600">
                                At Chlothzy, we’re all about bold confidence—each dress is designed to make a statement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About