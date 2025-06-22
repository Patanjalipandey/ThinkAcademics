import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, image, title, price }) => {
  return (
    <Link to={`/product-details/${id}`} className='cursor-pointer'>
      <div className="bg-white shadow rounded overflow-hidden ">
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300"
        />
        <div className="p-3">
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2">{title}</h3>
          <p className="text-sm font-semibold text-gray-900 mt-1">Rs.{price}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card