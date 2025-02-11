import React, { useState } from 'react';
import axios from 'axios';

const AddStockOut = () => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [destination, setDestination] = useState('');
  const [dateDispatched, setDateDispatched] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stock = {
      productId: parseInt(productId),
      quantity: parseInt(quantity),
      destination,
      dateDispatched: new Date(dateDispatched)
    };

    try {
      await axios.post('http://localhost:5058/api/stock-out', stock);
      alert('Stock dispatched successfully');
    } catch (error) {
      console.error('There was an error dispatching the stock!', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Stock Out</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product ID:</label>
          <input type="number" className="form-control" value={productId} onChange={(e) => setProductId(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity:</label>
          <input type="number" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Destination:</label>
          <input type="text" className="form-control" value={destination} onChange={(e) => setDestination(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Date Dispatched:</label>
          <input type="date" className="form-control" value={dateDispatched} onChange={(e) => setDateDispatched(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Dispatch Stock</button>
      </form>
    </div>
  );
};

export default AddStockOut;
