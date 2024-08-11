import React from 'react';
import '../styles/header.css'; 

function Header() {
  return (
    <header>
      <nav>
        <ul>
          {/* credits balance = infinite until purchase function created */}
          <li className="credits">Credits: ∞</li> 
          <li><a href="/home">Home</a></li>
          <li><a href="/shop">Buy Credits</a></li>
          <li><a href="/login">Logout</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;