const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: String,
  rarity: {
    type: String,
    enum: ['common', 'rare', 'legendary'] 
  }
});


const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;