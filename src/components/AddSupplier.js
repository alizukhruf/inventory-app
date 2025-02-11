import React, { useState } from 'react';
import axios from 'axios';

const AddSupplier = () => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const supplier = { name, contactInfo };

    try {
      await axios.post('http://localhost:5058/api/suppliers', supplier);
      alert('Supplier added successfully');
    } catch (error) {
      console.error('There was an error adding the supplier!', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Supplier</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Info:</label>
          <input type="text" className="form-control" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Supplier</button>
      </form>
    </div>
  );
};

export default AddSupplier;
