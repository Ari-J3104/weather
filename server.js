const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
  // Server-side weather route logic here
});

app.get('/forecast', async (req, res) => {
  // Server-side forecast route logic here
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
