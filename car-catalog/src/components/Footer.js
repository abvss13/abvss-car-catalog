import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        {/* Replace the below text with your logo or website title */}
        <h1>ABVSS Car Catalog</h1>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">Home</a>
        </li>
        {/* Add other navigation links here */}
      </ul>
    </nav>
  );
};

export default Navbar;
