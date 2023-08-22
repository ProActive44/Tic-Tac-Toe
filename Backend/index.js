const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()  

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Game schema
const gameSchema = new mongoose.Schema({
  playerX: String,
  playerO: String,
  data: Object,
  result: String,
  datetime: Date,
});

const Game = mongoose.model('Game', gameSchema);

// API Routes
app.get('/games', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/games', async (req, res) => {
  const { playerX, playerO, data, result } = req.body;
  const game = new Game({
    playerX,
    playerO,
    data,
    result,
    datetime: new Date(),
  });

  try {
    const newGame = await game.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/games/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (game === null) {
      return res.status(404).json({ message: 'Game not found' });
    }
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
