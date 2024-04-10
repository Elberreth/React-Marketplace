import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;