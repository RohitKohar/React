import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShimmerProductCard from "./ShimmerProductCard";

const Product = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch(`https://fakestoreapi.com/products/${id}`);
      const json = await result.json();
      setProductData(json);
    };
    fetchProducts();
  }, [id]);
  if (!productData) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <ShimmerProductCard></ShimmerProductCard>
      </div>
    );
  }
    return (
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 border border-gray-300 rounded-2xl p-4 w-72 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white group">
          {/* Image Container with Animation */}
          <div className="w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
            <img
              src={productData.image}
              className="object-contain h-full w-full transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-800">
            {productData.title}
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-3">
            {productData.description}
          </p>

          <p className="text-sm text-gray-600 line-clamp-3">
            {productData.category}
          </p>

          {/* Price */}
          <div className="mt-auto">
            <h3 className="text-lg font-bold text-indigo-600">
              Rs. {productData.price}
            </h3>
          </div>
        </div>
      </div>
    );
};

export default Product;
