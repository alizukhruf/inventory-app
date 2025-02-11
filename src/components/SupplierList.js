import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5058/api/suppliers')
      .then(response => setSuppliers(response.data))
      .catch(error => console.error('Error fetching suppliers:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Suppliers</h2>
      <ul className="list-group">
        {suppliers.map(supplier => (
          <li key={supplier.id} className="list-group-item">
            {supplier.name} - Contact: {supplier.contactInfo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierList;
