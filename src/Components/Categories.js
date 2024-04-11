import React, { useState } from 'react';
import './Categories.css';
import productImage from './150.png';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const products = [
    { id: 1, name: 'PC', price: 999, category: 'category1', description: 'Description of PC', sellerEmail: 'seller1@example.com' },
    { id: 2, name: '40" TV', price: 499, category: 'category2', description: 'Description of 40" TV', sellerEmail: 'seller2@example.com' },
    { id: 3, name: 'Macbook', price: 1499, category: 'category3', description: 'Description of Macbook', sellerEmail: 'seller3@example.com' },
    { id: 4, name: 'Compaq', price: 699, category: 'category3', description: 'Description of Compaq', sellerEmail: 'seller4@example.com' },
    { id: 5, name: 'Gaming PC', price: 1199, category: 'category1', description: 'Description of Gaming PC', sellerEmail: 'seller5@example.com' },
  ];

  const categories = {
    category1: 'Desktop Computers',
    category2: 'TV',
    category3: 'Laptops'
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
    setShowPopup(true); 
  };

  const handleClosePopup = () => {
    setShowPopup(false); 
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
          <ul className="product-list">
            {products
              .filter(product => product.category === selectedCategory)
              .map(product => (
                <li key={product.id} className="product-item">
                  <img src={productImage} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>Price: ${product.price}</p>
                  <p>{product.description}</p>
                  <button onClick={() => handleDetailsClick(product)}>Details</button>
                </li>
              ))}
          </ul>
        </div>
      )}

      {selectedProduct && showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <h2>Details</h2>
            <p>Seller's Email: {selectedProduct.sellerEmail}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;

