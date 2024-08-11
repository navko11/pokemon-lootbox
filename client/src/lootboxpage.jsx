import React, { useState } from 'react';

import axios from 'axios';

import Header from './components/header'
import Footer from './components/footer'
import images from './assets/pokemonsprites/1sprites';

import './styles/Lootbox.css';

function Lootbox() {
  const [items, setItems] = useState([]);

  const openLootbox = async (num = 1) => {
    try {
      const response = await axios.get('http://localhost:3001/openbox');
      const allItems = response.data;

      const newItems = [];
      for (let i = 0; i < num; i++) {
        const randomIndex = Math.floor(Math.random() * 100);
        console.log('Random Index:', randomIndex);
        let rarity = 'common';
        if (randomIndex < 19) rarity = 'rare';
        if (randomIndex < 1) rarity = 'legendary';

        const filteredItems = allItems.filter(i => i.rarity === rarity);
        const randomItem = filteredItems[Math.floor(Math.random() * filteredItems.length)];

        // Find the image for the selected item
        const matchedImage = images.find(img => img.name.toLowerCase() === randomItem.name.toLowerCase())?.image;

        // Add the item with the image to the list
        newItems.push({
          ...randomItem,
          image: matchedImage
        });
      }

      // Update the state with the new items
      setItems(newItems);
    } catch (error) {
      console.error('Error opening lootbox:', error);
    }
  };

  return (
    <main>
      <Header />
      <div className="lootbox-frame">
        {items.length > 0 && (
          <div className="lootbox-results">
            {items.map((item, index) => (
              <div key={index} className="lootbox-result">
                <h2>{item.rarity} pokemon obtained!</h2>
                <p>{item.name}</p>
                {item.image ? (
                  <img src={item.image} alt={item.name} onError={() => console.log('Image load failed')} />
                ) : (
                  <p>Image not available</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="lootbox-buttons">
        <button onClick={() => openLootbox(1)}>Open Lootbox</button>
        <button onClick={() => openLootbox(5)}>Open 5 Lootboxes</button>
      </div>
      <Footer />
    </main>
  );
}

export default Lootbox;
  