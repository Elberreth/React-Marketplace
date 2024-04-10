import React from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  
  const products = [
    
  {id: 1, name: 'Product 1', price: 99 },
  
  
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;