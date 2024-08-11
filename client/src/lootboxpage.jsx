import React, { useState } from 'react';

import axios from 'axios';

import Header from './components/header'
import Footer from './components/footer'
import images from './assets/pokemonsprites/1sprites';

import './styles/Lootbox.css';

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
  
        // Find the image for the selected item
        const matchedImage = images.find(img => img.name.toLowerCase() === randomItem.name.toLowerCase())?.image;
  
        // Set the item with the image
        setItem({
          ...randomItem,
          image: matchedImage 
        });
      } catch (error) {
        console.error('Error opening lootbox:', error);
      }
    };
  
    return (
        <main>
          <Header />
            <div className="lootbox-frame">
              {item && (
                <div className="lootbox-result">
                  <h2>You got a {item.rarity} pokemon!</h2>
                  <p>{item.name}</p>
                  {item.image ? (
                    <img src={item.image} alt={item.name} onError={() => console.log('Image load failed')} />
                  ) : (
                    <p>Image not available</p>
                  )}
                </div>
              )}
            </div>
          <div className="lootbox-button">
          <button onClick={openLootbox}>Open Lootbox</button>
          </div>
          <Footer />
        </main>     
      );
    }
  
  export default Lootbox;
  