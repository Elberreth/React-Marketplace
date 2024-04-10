import ProductCard from './ProductCard';

function ProductList() {
  const products = [
    { id: 1, name: 'PC', price: 99, image: 'product1.jpg', description: 'Description of PC', category: 'Category 1' },
    { id: 2, name: '40" TV', price: 149, image: 'product2.jpg', description: 'Description of 40" TV', category: 'Category 2' },
    { id: 3, name: 'Macbook', price: 199, image: 'product3.jpg', description: 'Description of Macbook', category: 'Category 3' },
   
  ];

  return (
    <div>
      <h2>Category 1</h2>
      <div className="product-list">
        {products.filter(product => product.category === 'Category 1').map(product => (
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
  function handleDetailsClick(product) {
    console.log('Details button clicked for product:', product);
  }
}

export default ProductList;


