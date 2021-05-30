
const axios = require('axios');
require('dotenv').config();

module.exports = async function() {
  try {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
    const response = await axios.get(url);
    return response.data;
  } catch(err) {
    console.error(err);
  }
};