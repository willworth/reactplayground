import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import headerStyles from '../styles/header.module.scss';

// The Header creates links that can be used to navigate
// between routes.
const header = () => (
  <header className= {headerStyles.header}>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/comp2">comp2</Link>
        </li>
        <li>
          <Link to="/comp3">comp3</Link>
        </li>
        <li>
          <Link to="/counter">counter</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default header;
