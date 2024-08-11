import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import { Link } from 'react-router-dom'
import './styles/home.css'

function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className="menu-container">
        <h1>Welcome, User</h1>
        <p>Try your luck at opening Pokemon lootboxes for a chance to obtain very rare Pokemon! Go to About/Help for more information.</p>
        <div className="menu">
          <Link className="select" to="/inventory">View Inventory</Link>
          <br></br>
          <Link className="select" to="/lootbox">Open Lootbox</Link>
          <br></br>
          <Link className="select" to="/about">About/Help</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;