import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockOutList = () => {
  const [stockOuts, setStockOuts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5058/api/stock-out')
      .then(response => {
        setStockOuts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching stock out data');
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
      <h2>Stock Out List</h2>
      <ul>
        {stockOuts.map(stockOut => (
          <li key={stockOut.id}>
            Product ID: {stockOut.productId}, Quantity: {stockOut.quantity}, Destination: {stockOut.destination}, Date Dispatched: {new Date(stockOut.dateDispatched).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockOutList;