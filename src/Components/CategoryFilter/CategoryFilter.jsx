import React, { useState } from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ onSelectCategory }) => {
  const categories = [
    'backgrounds', 'nature', 'science', 'education',
    'feelings', 'health', 'religion', 'places', 'animals',
    'industry', 'computer', 'food', 'sports', 'transportation',
    'travel', 'buildings', 'business', 'music'
  ];

  const [selected, setSelected] = useState('');

  const handleCategoryClick = (category) => {
    setSelected(category);
    onSelectCategory(category);
  };

  return (
    <div className="category-filter">
      <h2>Category </h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selected === category ? 'selected' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;