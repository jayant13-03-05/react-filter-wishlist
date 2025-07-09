"use client";
import React from "react";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <p className="text-sm text-gray-600 text-center mt-10">
        Your wishlist is empty.
      </p>
    );
  }

  return (
    <div className="mt-10 px-4 max-w-[1300px] mx-auto">
      <p className="text-xl font-bold mb-6">Your Wishlist</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
