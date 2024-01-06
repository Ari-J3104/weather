/*

const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Serve static files (like the HTML page)
app.use(express.static('public'));

// Define a route for fetching real-time weather data from OpenWeatherMap API
app.get('/weather', async (req, res) => {
  try {
    // Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key
    const apiKey = '60a64d63e1eca1313cdbc9fe1844915f';
    const city = req.query.city || 'New York'; // Default city is New York

    // Add a timestamp to ensure real-time data (cache-busting)
    const timestamp = new Date().getTime();

    // Make a request to the OpenWeatherMap API with the timestamp parameter
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&timestamp=${timestamp}`);

    // Send the weather data as the API response
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

*/


const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Serve static files (like the HTML page)
app.use(express.static('public'));

// Define a route for fetching real-time weather data from OpenWeatherMap API
app.get('/weather', async (req, res) => {
  try {
    // Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key
    const apiKey = '60a64d63e1eca1313cdbc9fe1844915f';
    const city = req.query.city || 'New York'; // Default city is New York

    // Add a timestamp to ensure real-time data (cache-busting)
    const timestamp = new Date().getTime();

    // Make a request to the OpenWeatherMap API with the timestamp parameter
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&timestamp=${timestamp}`);

    // Log the API response to the console
    console.log('API Response:', response.data);

    // Send the weather data as the API response
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define a route for fetching 7-day weather forecast from OpenWeatherMap API
app.get('/forecast', async (req, res) => {
  try {
    // Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key
    const apiKey = '60a64d63e1eca1313cdbc9fe1844915f';
    const city = req.query.city || 'New York'; // Default city is New York

    // Make a request to the OpenWeatherMap API for 7-day forecast
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);

    // Log the API response to the console
    console.log('Forecast API Response:', response.data);

    // Send the forecast data as the API response
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching forecast data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
