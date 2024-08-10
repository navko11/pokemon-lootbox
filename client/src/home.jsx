import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import { Link } from 'react-router-dom'

function Home() {
    return (
      <div>
        <Header />
        <div>
        <h1>Welcome</h1>
        <Link to="/inventory">View Inventory</Link>
        <br></br>
        <Link to="/lootbox">Open Lootbox</Link>
        <Footer />
        </div>
      </div>
    );
  }

export default Home;