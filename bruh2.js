// Updated JavaScript code to fetch data directly from OpenWeatherMap
async function fetchWeather() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=New York&appid=60a64d63e1eca1313cdbc9fe1844915f');
    const data = await response.json();
    updateWeather(data);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
  }
}

async function fetchForecast() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=New York&appid=60a64d63e1eca1313cdbc9fe1844915f');
    const data = await response.json();
    updateForecast(data);
  } catch (error) {
    console.error('Error fetching forecast data:', error.message);
  }
}

window.onload = function() {
  fetchWeather();
  fetchForecast();
};
