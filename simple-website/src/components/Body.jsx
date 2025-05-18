import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { productData } from "../utils/productData";
import ShimmerProductCard from "./ShimmerProductCard";

const Body = () => {
  let [topRatedProducts,setTopRatedProducts]=useState([]);
  const [searchText, setSearchText] = useState("");
  const [allproducts, setAllProducts] = useState([]);
  const changeText = (event) => {
    setSearchText(event.target.value);
  }
  useEffect(()=>{
  fetchProducts();
  },[])

  const fetchProducts = async()=>{
    const result = await fetch("https://fakestoreapi.com/products");
    const json = await result.json();
    setTopRatedProducts(json);
    setAllProducts(json);
  }
  const topRatedProductsData=()=>{
    setTopRatedProducts(productData.filter((product)=>product.rating.rate>=4))
    console.log(topRatedProducts)
  };

  const searchProducts = () => {
    const filteredProducts = allproducts.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()));
    setTopRatedProducts(filteredProducts);
  }


  if(topRatedProducts.length === 0){
    return (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length:14 }).map((_,index)=>(<ShimmerProductCard key={index}/>
      ))}     
      </div>
        );
    }
  return (
    <section className="flex flex-col gap-6 px-6 py-8 bg-gray-50 min-h-screen">
      {/* Search bar section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <input
            type="text"
            className="w-full px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for products..." value={searchText} onChange={changeText}
          />
        </div>
        <button className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" onClick={searchProducts}>
          Search
        </button>
        <button
          className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          onClick={topRatedProductsData}
        >
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
