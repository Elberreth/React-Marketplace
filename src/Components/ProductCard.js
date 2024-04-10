import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src="/150.png" alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p> 
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
