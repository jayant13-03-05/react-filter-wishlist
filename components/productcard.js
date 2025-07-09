"use client";

import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image"; // ✅ Import from next/image

const ProductCard = ({ product }) => {
  const { wishlist, toggleWishlist } = useWishlist();
  const isWished = wishlist.find((item) => item.id === product.id);

  return (
    <div className="relative group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-full h-[460px] flex flex-col justify-between">
      {/* NEW Badge */}
      <span className="absolute top-2 left-2 bg-yellow-400 text-[10px] font-bold px-1.5 py-0.5 rounded z-10">
        NEW
      </span>

      {/* Wishlist Button */}
      <motion.button
        whileTap={{ scale: 1.2 }}
        onClick={() => toggleWishlist(product)}
        className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-red-100 z-10"
      >
        <Heart
          className={`w-5 h-5 transition ${
            isWished ? "text-red-500 fill-red-500" : "text-gray-500"
          }`}
        />
      </motion.button>

      {/* ✅ Optimized Image */}
      <div className="w-full h-[240px] flex items-center justify-center px-3">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="px-3 pb-4 mt-auto">
        {/* Rating */}
        <div className="flex items-center gap-1 text-xs mb-1">
          <span className="bg-green-600 text-white px-1.5 py-0.5 rounded text-[10px] font-semibold">
            {product.rating?.toFixed(1) || "4.3"}
          </span>
          <span className="text-gray-500">
            ({product.ratingCount || "1.5k"})
          </span>
        </div>

        {/* Brand & Name */}
        <p className="font-semibold text-sm text-gray-800">{product.brand}</p>
        <p className="text-xs text-gray-600 truncate">{product.name}</p>

        {/* Sizes */}
        <p className="text-[11px] text-gray-500 mt-1">Sizes: S, M, L, XL</p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <p className="text-sm font-bold text-black">₹{product.price}</p>
          <p className="line-through text-xs text-gray-400">
            ₹{Math.round(product.price * 1.6)}
          </p>
          <p className="text-xs text-pink-600 font-semibold">40% OFF</p>
        </div>

        {/* Add to Bag */}
        <button className="hidden group-hover:block mt-3 w-full text-sm font-medium py-1.5 rounded border border-black text-black hover:bg-black hover:text-white transition">
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
