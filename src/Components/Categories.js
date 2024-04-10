import React, { useState } from 'react';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const products = [
    { id: 1, name: 'PC', category: 'category1', description: 'Description of PC' },
    { id: 2, name: '40" TV', category: 'category2', description: 'Description of 40" TV' },
    { id: 3, name: 'Macbook', category: 'category3', description: 'Description of Macbook' },
    { id:4, name: 'Compaq', category: 'category3', description: 'Description of Compaq'},
    {id: 5, name: 'Gaming PC', category: 'category1', description: 'Description of PC' },
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
            {products.map(product => (
              product.category === selectedCategory && (
                <li key={product.id}>
                  {product.name}
                  <p>{product.description}</p> {/* Description shown for all products */}
                </li>
              )
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Categories;

