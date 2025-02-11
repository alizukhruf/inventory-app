import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [stock, setStock] = useState(0);
  const [supplierId, setSupplierId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, stock: parseInt(stock), supplierId: parseInt(supplierId) };

    try {
      await axios.post('http://localhost:5058/api/products', product);
      alert('Product added successfully');
    } catch (error) {
      console.error('There was an error adding the product!', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock:</label>
          <input type="number" className="form-control" value={stock} onChange={(e) => setStock(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Supplier ID:</label>
          <input type="number" className="form-control" value={supplierId} onChange={(e) => setSupplierId(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
