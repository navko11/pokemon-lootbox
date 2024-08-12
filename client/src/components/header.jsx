import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; 

function Header() {
  return (
    <header>
      <nav>
        <ul>
          {/* credits balance = infinite until purchase function created */}
          <li className="credits">Credits: ∞</li> 
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/shop">Buy Credits</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;