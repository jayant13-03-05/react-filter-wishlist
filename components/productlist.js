"use client";
import React, { useState } from "react";
import { product } from "../data/products";
import ProductCard from "./ProductCard";
import FilterPanel from "./FilterPanel";
import Wishlist from "./wishlist";

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? product
      : product.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <FilterPanel
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-[1300px] mx-auto py-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
