import React, { useEffect, useState } from 'react'
import FilterSideBar from './FilterSideBar'
import ProductCard from '../productCard/ProductCard'
import axios from "../../api/axios"
import { FiSearch, FiX } from "react-icons/fi";
import Card from '../productCard/Card'

const Collections = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='container'>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold">ALL <span className="border-b-2 border-black">COLLECTIONS</span></h2>
        </div>
        <div className="flex items-center w-full max-w-2xl mx-auto border rounded-full px-4 py-2 bg-gray-100">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-grow bg-gray-100 outline-none text-lg"
          />

        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left - Filters */}
          <FilterSideBar />

          {/* Right - Products and Sort */}
          <div className="flex-1">

            {/* Sort Dropdown */}
            <div className="flex justify-end mb-4 gap-4">
              <select className="border border-gray-300 text-sm px-4 rounded">
                <option>Sort by: Relevent</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <section className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {filteredProducts.map((product) => (
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
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collections