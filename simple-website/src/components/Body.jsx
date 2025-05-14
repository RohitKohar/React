import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { productData } from "../utils/productData";

const Body = () => {
  let [topRatedProducts,setTopRatedProducts]=useState([]);

  useEffect(()=>{
  fetchProducts();
  },[])

  const fetchProducts = async()=>{
    const result = await fetch("https://fakestoreapi.com/products");
    const json = await result.json();
    setTopRatedProducts(json);
  }
  const topRatedProductsData=()=>{
    setTopRatedProducts(productData.filter((product)=>product.rating.rate>=4))
    console.log(topRatedProducts)
  };
  return (
    <section className="flex flex-col gap-6 px-6 py-8 bg-gray-50 min-h-screen">
      {/* Search bar section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <input
            type="text"
            className="w-full px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for products..."
          />
          <span className="absolute right-3 top-2.5 text-gray-400 pointer-events-none">
            🔍
          </span>
        </div>
        <button className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" onClick={topRatedProductsData}>
          Top Rated Products
        </button>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topRatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Body;
