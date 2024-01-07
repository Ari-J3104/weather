const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (like the HTML page)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for fetching real-time weather data from OpenWeatherMap API
app.get('/weather', async (req, res) => {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY; // Get API key from environment variable
    const city = req.query.city || 'New York';

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

    console.log('Weather API Response:', response.data);

    res.header('Content-Type', 'application/json'); // Set content type
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define a route for fetching 7-day weather forecast from OpenWeatherMap API
app.get('/forecast', async (req, res) => {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const city = req.query.city || 'New York';

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);

    console.log('Forecast API Response:', response.data);

    res.header('Content-Type', 'application/json'); // Set content type
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching forecast data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
