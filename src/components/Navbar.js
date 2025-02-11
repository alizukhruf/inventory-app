import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-product">Add Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/suppliers">Suppliers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-supplier">Add Supplier</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-stock-in">Add Stock In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stock-in-list">Stock In List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-stock-out">Add Stock Out</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stock-out-list">Stock Out List</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;