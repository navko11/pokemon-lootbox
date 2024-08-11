const dotenv = require("dotenv");
dotenv.config(); 

const express = require("express");
const mongoose = require("mongoose");
const Pokemon = require('./models/pokemon'); 
const cors = require("cors");
const UserModel = require('./models/user');



const app = express();
app.use(express.json());
app.use(cors());

// Connect to user database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to user database'))
  .catch(err => console.error('Error connecting to user database:', err));

// Connect to pokemon database
const pokemonDB = mongoose.createConnection(process.env.POKEMON_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

pokemonDB.once('open', () => {
  console.log('Connected to pokemon database');
  populateDatabase(); // Populate database once connected
});

pokemonDB.on('error', (error) => {
  console.error('Error connecting to pokemon database:', error);
});

const pokemons = [
  { name: 'Abra', rarity: 'common', },
  { name: 'Arcanine', rarity: 'rare' },
  { name: 'Articuno', rarity: 'legendary' },
  { name: 'Blastoise', rarity: 'rare' },
  { name: 'Bulbasaur', rarity: 'common' },
  { name: 'Charizard', rarity: 'rare' },
  { name: 'Charmander', rarity: 'common' },
  { name: 'Diglett', rarity: 'common' },
  { name: 'Dragonite', rarity: 'rare' },
  { name: 'Eevee', rarity: 'common' },
  { name: 'Ekans', rarity: 'common' },
  { name: 'Electrode', rarity: 'rare' },
  { name: 'Flareon', rarity: 'rare' },
  { name: 'Gengar', rarity: 'rare' },
  { name: 'Golduck', rarity: 'rare' },
  { name: 'Grimer', rarity: 'common' },
  { name: 'Growlithe', rarity: 'common' },
  { name: 'Gyarados', rarity: 'rare' },
  { name: 'Hitmonchan', rarity: 'rare' },
  { name: 'Hitmonlee', rarity: 'rare' },
  { name: 'Jigglypuff', rarity: 'rare' },
  { name: 'Jolteon', rarity: 'rare' },
  { name: 'Koffing', rarity: 'common' },
  { name: 'Lapras', rarity: 'rare' },
  { name: 'Machamp', rarity: 'rare' },
  { name: 'Magikarp', rarity: 'common' },
  { name: 'Magnemite', rarity: 'common' },
  { name: 'Magneton', rarity: 'rare' },
  { name: 'Mewtwo', rarity: 'legendary' },
  { name: 'Moltres', rarity: 'legendary' },
  { name: 'MrMime', rarity: 'rare' },
  { name: 'Ninetales', rarity: 'rare' },
  { name: 'Oddish', rarity: 'common' },
  { name: 'Onix', rarity: 'rare' },
  { name: 'Paras', rarity: 'common' },
  { name: 'Pidgey', rarity: 'common' },
  { name: 'Pikachu', rarity: 'rare' },
  { name: 'Psyduck', rarity: 'common' },
  { name: 'Rattata', rarity: 'common' },
  { name: 'Scyther', rarity: 'rare' },
  { name: 'Slowpoke', rarity: 'common' },
  { name: 'Snorlax', rarity: 'rare' },
  { name: 'Spearow', rarity: 'common' },
  { name: 'Squirtle', rarity: 'common' },
  { name: 'Vaporeon', rarity: 'rare' },
  { name: 'Venusaur', rarity: 'rare' },
  { name: 'Voltorb', rarity: 'common' },
  { name: 'Vulpix', rarity: 'common' },
  { name: 'Zapdos', rarity: 'legendary' },
  { name: 'Zubat', rarity: 'common' }
];

const populateDatabase = async () => {
  try {
    const count = await Pokemon.countDocuments({});
    if (count === 50) {
      console.log('Database already populated.');
      return;
    }

    await Pokemon.deleteMany({});
    await Pokemon.insertMany(pokemons);
    console.log('Pokémon data successfully added to the database!');
  } catch (error) {
    console.error('Error populating the database:', error);
  }
};

app.post("/login", (request, response) => {
  const { username, password } = request.body;
  UserModel.findOne({ username: username })
    .then(user => {
      if (user) {
        if (user.password === password) {
          response.json("Success");
        } else {
          response.json("Incorrect password");
        }
      } else {
        response.json("User does not exist");
      }
    })
    .catch(error => response.status(500).json(error));
});

app.post('/register', (request, response) => {
  UserModel.create(request.body)
    .then(user => response.json(user))
    .catch(error => response.status(500).json(error));
});

app.get('/openbox', async (request, response) => {
  try {
    const items = await Pokemon.find(); // fetch all pokemon from the database
    response.json(items);
  } catch (error) {
    response.status(500).json({ error: 'Error fetching Pokémon data' });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});