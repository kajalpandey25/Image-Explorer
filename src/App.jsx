import React, { useState, useEffect } from 'react';
import './App.css';
import ImageCard from './Components/Images/ImagesCard';
import Search from './Components/Search/Search';
import CategoryFilter from './Components/CategoryFilter/CategoryFilter';

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleSearch = async (query) => {
    const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;

    const categoryParam = selectedCategory ? `&category=${selectedCategory}` : '';
    const colorParam = selectedColor ? `&colors=${selectedColor}` : '';
    const url = ` https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo${categoryParam}${colorParam}`;
    

    try {
      const response = await fetch(url);
      const data = await response.json();
      setImages(data.hits);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    handleSearch('');
  }, [selectedCategory, selectedColor]);

  return (
    <div className="App">
      <Search onSearch={handleSearch} onColorFilter={setSelectedColor} />
      <CategoryFilter onSelectCategory={setSelectedCategory} />
      <div className="image-list">
        {images.length === 0 ? (
          <p id='message'>No images found.</p>
        ) : (
          images.map((image) => (
            <ImageCard key={image.id} imageUrl={image.webformatURL} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;