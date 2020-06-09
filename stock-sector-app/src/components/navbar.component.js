import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Stock Sector Performance By Sectors</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Stock Sectors</Link>
          </li>
          <li className="navbar-item">
          <Link to="/sector" className="nav-link">Create Sector</Link>
          </li>
          <li className="navbar-item">
          <Link to="/sector/:id" className="nav-link">Edit Sector</Link>
          </li>
          <li className="navbar-item">
          <Link to="/sector/:id" className="nav-link">Delete Sector</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}