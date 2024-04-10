import React from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  const products = [
    { id: 1, name: 'Product 1', price: 99, image: 'product1.jpg', description: 'Description of Product 1', category: 'Category 1' },
    { id: 2, name: 'Product 2', price: 149, image: 'product2.jpg', description: 'Description of Product 2', category: 'Category 1' },
    { id: 3, name: 'Product 3', price: 199, image: 'product3.jpg', description: 'Description of Product 3', category: 'Category 2' },
    { id: 4, name: 'Product 4', price: 129, image: 'product4.jpg', description: 'Description of Product 4', category: 'Category 3' },
    
  ];

  const defaultImage = '150.png';
  return (
    <div>
      <h2>Category 1</h2>
      <div className="product-list">
        {products.filter(product => product.category === 'Desktop Computers').map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <h2>Category 2</h2>
      <div className="product-list">
        {products.filter(product => product.category === 'Category 2').map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <h2>Category 3</h2>
      <div className="product-list">
        {products.filter(product => product.category === 'Category 3').map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
     
    </div>
  );
}

export default ProductList;

