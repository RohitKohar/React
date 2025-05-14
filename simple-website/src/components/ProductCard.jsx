import React from "react";

const ProductCard = ({ id, title, image, description, price }) => {
  return (
    <div className="flex flex-col gap-4 border border-gray-300 rounded-2xl p-4 w-72 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white group">
      {/* Image Container with Animation */}
      <div className="w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-contain h-full w-full transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

      {/* Description */}
      <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

      {/* Price */}
      <div className="mt-auto">
        <h3 className="text-lg font-bold text-indigo-600">Rs. {price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
