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
        <h1>Welcome</h1>
        <div className="menu">
          <Link className="select" to="/inventory">View Inventory</Link>
          <br></br>
          <Link className="select" to="/lootbox">Open Lootbox</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;