"use client";
import { createContext, useContext, useState, useEffect } from "react";
const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        const saved = localStorage.getItem("wishlist");
        if(saved) 
            console.log("Wishlist loaded from localStorage:", saved);
        else 
            console.log("No wishlist found in localStorage.");
        console.log("Updated wishlist:", saved);
        if (saved) setWishlist(JSON.parse(saved));
        setLoading(false);
    }, []);
    useEffect(() => {
        if(!loading)
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        
    }, [wishlist,loading]);
    const toggleWishlist = (product) => {
        console.log("Toggling wishlist item:", product); // ✅ log clicked item
        setWishlist((prev) => {
            const exists = prev.find((p) => p.id === product.id);
            return exists ? prev.filter((p) => p.id !== product.id) : [...prev, product];
        });
    };
    if(loading) return null;
    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};