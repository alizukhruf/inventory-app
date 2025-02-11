import React, { useState } from 'react';
import axios from 'axios';

const AddStockIn = () => {
  const [productId, setProductId] = useState('');
  const [supplierId, setSupplierId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [dateReceived, setDateReceived] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stock = {
      productId: parseInt(productId),
      supplierId: parseInt(supplierId),
      quantity: parseInt(quantity),
      dateReceived: new Date(dateReceived)
    };

    try {
      await axios.post('http://localhost:5058/api/stock-in', stock);
      alert('Stock added successfully');
    } catch (error) {
      console.error('There was an error adding the stock!', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Stock In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product ID:</label>
          <input type="number" className="form-control" value={productId} onChange={(e) => setProductId(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Supplier ID:</label>
          <input type="number" className="form-control" value={supplierId} onChange={(e) => setSupplierId(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity:</label>
          <input type="number" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Date Received:</label>
          <input type="date" className="form-control" value={dateReceived} onChange={(e) => setDateReceived(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Stock</button>
      </form>
    </div>
  );
};

export default AddStockIn;
