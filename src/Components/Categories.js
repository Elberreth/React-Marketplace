import React, { useState } from 'react';

const Categories = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('');
  
  
  const products = [
    { id: 1, name: 'Product 1', category: 'Computers' },
    { id: 2, name: 'Product 2', category: 'test' },
    { id: 3, name: 'Product 3', category: 'category1' },
    
  ];

 
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <h2>Categories</h2>
      
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        <option value="category1">Desktop Computers</option>
        <option value="category2">TV</option>
        <option value="category3">Laptops</option>
      </select>

      
      {selectedCategory && (
        <div>
          <h3>Selected Category: {selectedCategory}</h3>
          
          <ul>
            {products.map(product => (
              product.category === selectedCategory && (
                <li key={product.id}>{product.name}</li>
              )
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Categories;

