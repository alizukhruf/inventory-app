import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5058/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <ul className="list-group">
        {products.map(product => (
          <li key={product.id} className="list-group-item">
            {product.name} - Stock: {product.stock} - Supplier: {product.supplier?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
