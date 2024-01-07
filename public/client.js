// Fetch weather data and update the HTML content
async function fetchWeather() {
    try {
      const response = await fetch('/weather');
      const data = await response.json();
      updateWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  }
  
  // Update the HTML content with weather information
  function updateWeather(weatherData) {
    const temperatureCelsius = weatherData.main.temp - 273.15;
    const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
    const description = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;
    const windSpeed = weatherData.wind.speed;
    const cloudiness = weatherData.clouds.all;
  
    // Display temperature information
    document.getElementById('temperature-section').innerHTML = `Temperature: ${temperatureFahrenheit.toFixed(2)}°F, ${description}`;
  
    // Display additional details
    document.getElementById('details-section').innerHTML = `Wind Speed: ${windSpeed} m/s<br>Cloudiness: ${cloudiness}%`;
  
    // Display weather icon
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    document.getElementById('weather-icon').src = iconUrl;
  }
  
  // Fetch forecast data and update the HTML content
  async function fetchForecast() {
    try {
      const response = await fetch('/forecast');
      const data = await response.json();
      updateForecast(data);
    } catch (error) {
      console.error('Error fetching forecast data:', error.message);
    }
  }
  
  // Update the HTML content with forecast information
  function updateForecast(forecastData) {
    const forecastSection = document.getElementById('forecast-section');
    forecastSection.innerHTML = '';
  
    // Loop through forecast data and display each day's information
    forecastData.list.forEach(item => {
      const date = new Date(item.dt * 1000);
      const day = date.toLocaleDateString('en-US', { weekday: 'long' });
      const temperatureCelsius = item.main.temp - 273.15;
      const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
      const description = item.weather[0].description;
  
      const forecastItem = document.createElement('div');
      forecastItem.innerHTML = `${day}: ${temperatureFahrenheit.toFixed(2)}°F, ${description}`;
      forecastSection.appendChild(forecastItem);
    });
  }
  
  // Fetch weather data and forecast data on page load
  window.onload = function() {
    fetchWeather();
    fetchForecast();
  };
  