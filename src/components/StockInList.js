import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockInList = () => {
  const [stockIns, setStockIns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5058/api/stock-in')
      .then(response => {
        setStockIns(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching stock in data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Stock In List</h2>
      <ul>
        {stockIns.map(stockIn => (
          <li key={stockIn.id}>
            Product ID: {stockIn.productId}, Supplier ID: {stockIn.supplierId}, Quantity: {stockIn.quantity}, Date Received: {new Date(stockIn.dateReceived).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockInList;