import React, { useState, useEffect } from 'react';
import './Search.css'

const Search = ({ onSearch, onColorFilter }) => {
  const [query, setQuery] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    if (selectedColor) {
      onColorFilter(selectedColor);
    }
  }, [selectedColor, onColorFilter]);

  return (
    <div className="search-container">
      <h1>Image Explorer</h1> 
      <input
        type="text"
        placeholder="Search for images..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button id='search' onClick={handleSearch}>Search</button>
      <select
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        <option value="">Select Color</option>
        <option value="grayscale">Grayscale</option>
        <option value="transparent">Transparent</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="turquoise">Turquoise</option>
        <option value="blue">Blue</option>
        <option value="lilac">Lilac</option>
        <option value="pink">Pink</option>
        <option value="white">White</option>
        <option value="gray">Gray</option>
        <option value="black">Black</option>
        <option value="brown">Brown</option>
      </select>
    </div>
  );
};

export default Search;