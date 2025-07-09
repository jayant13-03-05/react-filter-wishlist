"use client";
import Wishlist from "../../components/wishlist";
import { WishlistProvider } from "../../context/WishlistContext";

export default function page() {
  return (
    <WishlistProvider>
      <Wishlist />
    </WishlistProvider>
  );
}
