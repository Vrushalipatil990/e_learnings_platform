import React, { useRef } from "react";
import "./category.css";

const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory
}) => {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const categories = [
  "All",
  "UI/UX Design",
  "Development",
  "Business",
  "Data Science",
  "Financial",
  "MongoDB",
  "Flutter",
  "Python",
  "Cyber Security",
  "Machine Learning"
];

  return (
    <div className="category-section">

      <button onClick={scrollLeft}>{"<"}</button>

      <div className="category-list" ref={scrollRef}>
       {categories.map((category, index) => (
       <button
              key={index}
         onClick={() => setSelectedCategory(category)}
           className={
            selectedCategory === category
        ? "active-category"
        : ""
        }
       >
         {category}
       </button>
            ))}     
      </div>

      <button onClick={scrollRight}>{">"}</button>

    </div>
  );
};

export default CategoryFilter;