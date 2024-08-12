import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import './styles/about.css'
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-container">
      <Header />
        <h1>Help/About</h1>
        <p>
        Thanks for using the Pokemon Lootbox app! This app was designed to simulate opening lootboxes in exchange for credits to collect a variety of Pokemon ranging from COMMON, <span className="highlight-blue">RARE</span>, and <span className="highlight-gold">LEGENDARY</span>. Games in the future could implement this lootbox feature which may be suited for genres such as (TCG)Trading Card Game, Adventure, etc.
        </p>
        <p>In this development phase you will have an infinite amount of credits supplied - so you can pull as many lootboxes as you want! Note: The inventory option on the main menu is not yet functional so you will not be able to view all the pokemon you have obtained from the lootbox.</p>
        <p>The Pokemon obtainable in this version 0.1.0 is a randomized selection of 50 of the 151 first generation Pokemon. The chances for pulling Pokemon by tier are COMMON = 80%  | <span className="highlight-blue">RARE = 19%</span> | and <span className="highlight-gold">LEGENDARY = 1%</span></p>
        <p>Goodluck and go catch 'em all!</p>
        <Link to="/home"><button type="button" className="return">Return</button></Link>
      <Footer />
    </div>
  );
}

export default About; 