import React, { useState } from 'react';
import productImage from './150.png'; 
import './Categories.css';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const products = [
    { id: 1, name: 'PC', price: 999, category: 'category1', description: 'Description of PC', image: '150.png' },
    { id: 2, name: '40" TV', price: 499, category: 'category2', description: 'Description of 40" TV', image: '150.png' },
    { id: 3, name: 'Macbook', price: 1499, category: 'category3', description: 'Description of Macbook', image: '150.png' },
    { id: 4, name: 'Compaq', price: 699, category: 'category3', description: 'Description of Compaq', image: '150.png' },
    { id: 5, name: 'Gaming PC', price: 1199, category: 'category1', description: 'Description of Gaming PC', image: '150.png' },
  ];

  const categories = {
    category1: 'Desktop Computers',
    category2: 'TV',
    category3: 'Laptops'
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <h2>Categories</h2>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {Object.entries(categories).map(([key, value]) => (
          <option key={key} value={key}>{value}</option>
        ))}
      </select>

      {selectedCategory && (
        <div className="product-list">
          <h3>Category: {categories[selectedCategory]}</h3>
          <div className="product-container">
            {products
              .filter(product => product.category === selectedCategory)
              .map(product => (
                <div key={product.id} className="product">
                  <img src={productImage} alt={product.name} /> 
                  <div className="product-details">
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                    <p>{product.description}</p> 
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
