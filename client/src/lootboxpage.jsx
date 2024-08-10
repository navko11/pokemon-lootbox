import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import Header from './components/header'
import Footer from './components/footer'

function Lootbox() {
  const [item, setItem] = useState(null);

  const openLootbox = async () => {
    try {
      const response = await axios.get('http://localhost:3001/openbox');
      const items = response.data;

      const randomIndex = Math.floor(Math.random() * 100);
      console.log('Random Index:', randomIndex);
      let rarity = 'common';
      if (randomIndex < 19) rarity = 'rare';
      if (randomIndex < 1) rarity = 'legendary';

      const filteredItems = items.filter(i => i.rarity === rarity);
      const randomItem = filteredItems[Math.floor(Math.random() * filteredItems.length)];

      setItem(randomItem);
    } catch (error) {
      console.log(error('Error opening lootbox:', error));
    }
  };

  return (
    <div>   
        <Header />
        <div>
        <button onClick={openLootbox}>Open Lootbox</button>
        {item && (
            <div>
            <h2>You've got a {item.rarity} item!</h2>
            <p>{item.name}</p>
            </div>
        )}
        </div>
        <Footer />
    </div>     
  );
}

export default Lootbox;