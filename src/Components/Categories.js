import React, { useState } from 'react';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const products = [
    { id: 1, name: 'PC', price: 999, category: 'category1', description: 'Description of PC' },
    { id: 2, name: '40" TV', price: 499, category: 'category2', description: 'Description of 40" TV' },
    { id: 3, name: 'Macbook', price: 1499, category: 'category3', description: 'Description of Macbook' },
    { id: 4, name: 'Compaq', price: 699, category: 'category3', description: 'Description of Compaq' },
    { id: 5, name: 'Gaming PC', price: 1199, category: 'category1', description: 'Description of Gaming PC' },
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
        <div>
          <h3>Selected Category: {categories[selectedCategory]}</h3>
          <ul>
            {products
              .filter(product => product.category === selectedCategory)
              .map(product => (
                <li key={product.id}>
                  {product.name} - ${product.price}
                  <p>{product.description}</p> 
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Categories;


