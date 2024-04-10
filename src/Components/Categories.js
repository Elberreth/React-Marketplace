import React, { useState } from 'react';

const Categories = () => {
  // Define state for selected category
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', category: 'category1' },
    { id: 2, name: 'Product 2', category: 'category2' },
    { id: 3, name: 'Product 3', category: 'category1' },
    // Add more product data as needed
  ];

  // Handler function to update selected category
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <h2>Categories</h2>
      {/* Dropdown list to select categories */}
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        {/* Add more options as needed */}
      </select>

      {/* Display selected category */}
      {selectedCategory && (
        <div>
          <h3>Selected Category: {selectedCategory}</h3>
          {/* Render product list for the selected category */}
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

