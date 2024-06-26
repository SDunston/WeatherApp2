// server.js
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '/')));

// Endpoint to get API key
app.get('/api-key', (req, res) => {
  res.json({ apiKey: process.env.API_KEY });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
