"use client";

import React from "react";
const FilterPanel = ({ selectedCategory, setSelectedCategory }) => {
const categories = ["All", "Electronics", "Clothing", "Books"];
return (
<div className="mb-4️">
<p className="font-bold mb-4 m-4">Filter by Category:</p>
<div className="flex gap-2 flex-wrap m-3">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={`px-3 py-1 rounded-xl ${
        selectedCategory === cat
          ? "bg-blue-600 text-white"
          : "bg-gray-200"
      }`}
    >
      {cat}
    </button>
  ))}
</div>

</div>
);
};
export default FilterPanel;