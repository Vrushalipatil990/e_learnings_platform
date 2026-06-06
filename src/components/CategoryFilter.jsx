import React from "react";
import "./category.css";

const CategoryFilter = () => {

  const categories = [
    "UI/UX Design",
    "Development",
    "Business",
    "Data Science",
    "Financial"
  ];

  return (
    <div className="category-section">

      <button>{"<"}</button>

      {categories.map((category, index) => (
        <button key={index}>
          {category}
        </button>
      ))}

      <button>{">"}</button>

    </div>
  );
};

export default CategoryFilter;