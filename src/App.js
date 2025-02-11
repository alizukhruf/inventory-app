import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import SupplierList from './components/SupplierList';
import AddSupplier from './components/AddSupplier';
import AddStockIn from './components/AddStockIn';
import StockInList from './components/StockInList';
import AddStockOut from './components/AddStockOut';
import StockOutList from './components/StockOutList';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/suppliers" element={<SupplierList />} />
          <Route path="/add-supplier" element={<AddSupplier />} />
          <Route path="/add-stock-in" element={<AddStockIn />} />
          <Route path="/stock-in-list" element={<StockInList />} />
          <Route path="/add-stock-out" element={<AddStockOut />} />
          <Route path="/stock-out-list" element={<StockOutList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;