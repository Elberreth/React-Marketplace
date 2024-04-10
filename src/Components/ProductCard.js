import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={require(`./150.png/${product.image}`).default} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={() => console.log(`Details for ${product.name}`)}>Details</button>
    </div>
  );
}

export default ProductCard;
